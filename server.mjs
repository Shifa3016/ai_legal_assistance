import express from 'express';
import bodyParser from 'body-parser';
import pkg from 'pg'; // Correct import for pg
import axios from 'axios';
import dotenv from 'dotenv';
import process from 'process';
import cors from 'cors';
app.use(cors());


dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Database Configuration
const { Pool } = pkg; // Extracting Pool from the default export
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Google Places API Configuration
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const PLACE_TYPES = 'non_profit|charity|social_facility';

// Middleware
app.use(express.json());

// Helper: Extract location details from address
function parseLocationDetails(address) {
  const parts = address?.split(',') || [];
  const city = parts[1]?.trim() || '';
  const statePincode = parts[2]?.trim().split(' ') || [];
  const state = statePincode.slice(0, -1).join(' ') || '';
  const pincode = statePincode[statePincode.length - 1] || '';
  return { city, state, pincode };
}

// 1. Fetch NGO data from Google Places
async function fetchNGOsFromGoogle(lat, lng, radius = 5000) {
  try {
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${radius}&type=${PLACE_TYPES}&key=${GOOGLE_API_KEY}`;
    const response = await axios.get(url);
    
    const basicNGOs = response.data.results.map(place => ({
      name: place.name,
      address: place.vicinity,
      latitude: place.geometry.location.lat,
      longitude: place.geometry.location.lng,
      ...parseLocationDetails(place.vicinity)
    }));

    return basicNGOs;
  } catch (error) {
    console.error('Google Places API error:', error.message);
    return [];
  }
}

// 2. Store NGOs in Database
async function storeNGOs(ngos) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    
    const insertQuery = `
      INSERT INTO ngos (
        name, address, owner_phone, staff_phone, email,
        city, state, pincode, latitude, longitude
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      ON CONFLICT (name, pincode) 
      DO UPDATE SET
        address = EXCLUDED.address,
        latitude = EXCLUDED.latitude,
        longitude = EXCLUDED.longitude
      RETURNING ngo_id
    `;

    const results = [];
    for (const ngo of ngos) {
      const res = await client.query(insertQuery, [
        ngo.name,
        ngo.address,
        ngo.owner_phone || null,
        ngo.staff_phone || null,
        ngo.email || null,
        ngo.city,
        ngo.state,
        ngo.pincode,
        ngo.latitude,
        ngo.longitude
      ]);
      results.push(res.rows[0]);
    }

    await client.query('COMMIT');
    return { success: true, count: results.length };
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('Database error:', error.message);
    return { success: false, error: error.message };
  } finally {
    client.release();
  }
}

// 3. Find NGOs by Pincode (with nearby search)
async function getNGOsByPincode(pincode, radiusKm = 10) {
  try {
    // First try exact matches
    const exactResults = await pool.query(
      `SELECT * FROM ngos WHERE pincode = $1`,
      [pincode]
    );

    if (exactResults.rows.length > 0) {
      return exactResults.rows;
    }

    // Fallback to proximity search
    const proximityResults = await pool.query(`
      WITH reference AS (
        SELECT latitude, longitude 
        FROM ngos 
        WHERE pincode = $1 
        LIMIT 1
      )
      SELECT n.*, 
        ROUND(
          earth_distance(
            ll_to_earth(n.latitude, n.longitude),
            ll_to_earth(r.latitude, r.longitude)
          ) / 1000, 2
        ) AS distance_km
      FROM ngos n, reference r
      WHERE earth_distance(
        ll_to_earth(n.latitude, n.longitude),
        ll_to_earth(r.latitude, r.longitude)
      ) < $2 * 1000
      ORDER BY distance_km ASC
      LIMIT 50
    `, [pincode, radiusKm]);

    return proximityResults.rows;
  } catch (error) {
    console.error('Database error:', error.message);
    return [];
  }
}

// API Endpoints
app.post('/api/ngos/fetch', async (req, res) => {
  const { latitude, longitude, radius } = req.body;
  
  // Fetch from Google
  const ngos = await fetchNGOsFromGoogle(latitude, longitude, radius);
  
  // Store in database
  const result = await storeNGOs(ngos);
  
  res.json({
    success: result.success,
    message: `Processed ${ngos.length} NGOs`,
    stored_count: result.count
  });
});

app.get('/api/ngos/search', async (req, res) => {
  const { pincode, radius } = req.query;
  const ngos = await getNGOsByPincode(pincode, parseFloat(radius) || 10);
  res.json(ngos);
});

// Server Start
const server = app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Graceful Shutdown
process.on('SIGTERM', () => {
  server.close(() => {
    pool.end();
    console.log('Server stopped');
    process.exit(0);
  });
});

