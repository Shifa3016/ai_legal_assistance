// router/ngo.mjs
import express from 'express';
import pkg from 'pg';
const { Pool } = pkg;
export default function createNgoRouter(pool) {
 
const router = express.Router();
// Set up the PostgreSQL connection pool directly here
const pool = new Pool({
  user: 'postgres',       // Replace with your PostgreSQL username
  host: 'localhost',           // Host where PostgreSQL is running
  database: 'byteverse',   // Replace with your PostgreSQL database name
  password: 'vaish09',   // Replace with your PostgreSQL password
  port: 5432,                  // Default PostgreSQL port
});

// Search NGOs by pincode
router.get('/search', async (req, res) => {
  const { pincode } = req.query;

  // Check if pincode is provided
  if (!pincode) {
    return res.status(400).json({ error: 'Pincode is required' });
  }

  try {
    // Query to search NGOs by pincode
    const result = await pool.query(
      'SELECT name, address, staff_phone, email, city, state FROM ngos WHERE pincode = $1',
      [pincode]
    );

    // Return the results
    if (result.rows.length > 0) {
      res.json(result.rows);
    } else {
      res.status(404).json({ message: 'No NGOs found for this pincode' });
    }
  } catch (error) {
    console.error('Error fetching NGOs:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});
return router;}


