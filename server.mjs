

import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import pkg from 'pg';
import { fileURLToPath } from 'url';
const { Pool } = pkg;
//import next from 'next';
import process from 'process';

// Load env variables
dotenv.config();

// Setup Next.js
/*s
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();*/

// Express app
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: 'http://localhost:5000', // Your React app's URL
  methods: ['GET', 'POST']
}));

// __dirname setup for ESModules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());



// PostgreSQL connection
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error('PostgreSQL connection error:', err.stack);
  }
  console.log("PostgreSQL CONNECTED");
  release();
});

global.db = pool;

// Google Places API
// Assuming `pool` is your PostgreSQL connection pool
import createNgoRouter from './router/ngo.mjs';
const ngoRouter = createNgoRouter(pool);
app.use('/api/ngos', ngoRouter);

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
      RETURNING ngo_id;
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

async function getNGOsByPincode(pincode, radiusKm = 10) {
  try {
    const result = await pool.query(
      `SELECT *, 0 AS distance_km
       FROM ngos
       WHERE pincode = $1
       LIMIT 50`,
      [pincode]
    );
    return result.rows;
  } catch (error) {
    console.error('Database error:', error.message);
    return [];
  }
}


// API Routes
/*
app.post('/api/ngos/fetch', async (req, res) => {
  const { latitude, longitude, radius } = req.body;
  const ngos = await fetchNGOsFromGoogle(latitude, longitude, radius);
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
});*/

// Custom Routes
import authRouter from './router/auth.mjs';
import pagesRouter from './router/pages.mjs';
app.use('/', pagesRouter);
app.use('/auth', authRouter);

// Next.js Handler
/*
await nextApp.prepare();
app.all('*', (req, res) => handle(req, res));*/

const server = app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

process.on('SIGTERM', () => {
  server.close(() => {
    pool.end();
    console.log('Server stopped');
    process.exit(0);
  });
});
