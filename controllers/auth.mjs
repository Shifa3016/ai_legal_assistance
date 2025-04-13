import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import pkg from 'pg';
import { promisify } from 'util';
const { Pool } = pkg;

import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Required for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from the parent directory
dotenv.config({ path: path.resolve(__dirname, '../.env') });



// Check and log environment variables
if (!process.env.DB_USER || !process.env.DB_HOST || !process.env.DB_NAME || !process.env.DB_PASSWORD || !process.env.DB_PORT) {
  console.error("Error: Missing required environment variables (DB_USER, DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT)");
  process.exit(1);
}

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

// Test connection with PostgreSQL
const testConnection = async () => {
  try {
    const client = await pool.connect();
    console.log("PostgreSQL connection successful.");
    client.release();
  } catch (err) {
    console.error('PostgreSQL connection error:', err);
    process.exit(1); // Terminate the application if the connection fails
  }
};

testConnection();  // Ensure PostgreSQL connection works at the start

// Login function
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Please provide email and password" });
    }

    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    const user = result.rows[0];

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Email or password is incorrect' });
    }

    const token = jwt.sign({ id: user.user_id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    const cookieOptions = {
      expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };

    res.cookie('userSave', token, cookieOptions);
    res.status(200).redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Register function
export const register = async (req, res) => {
  try {
    const { name, email, password, passwordConfirm } = req.body;

    const result = await pool.query('SELECT email FROM users WHERE email = $1', [email]);

    if (result.rows.length > 0) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    if (password !== passwordConfirm) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await pool.query(
      `INSERT INTO users (full_name, email, password) VALUES ($1, $2, $3)`,
      [name, email, hashedPassword]
    );

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Check if user is logged in
export const isLoggedIn = async (req, res, next) => {
  if (req.cookies.userSave) {
    try {
      const decoded = await promisify(jwt.verify)(req.cookies.userSave, process.env.JWT_SECRET);
      const result = await pool.query('SELECT * FROM users WHERE user_id = $1', [decoded.id]);

      if (result.rows.length === 0) {
        return next();
      }

      req.user = result.rows[0];
      next();
    } catch (err) {
      console.error(err);
      next();
    }
  } else {
    next();
  }
};

// Logout function
export const logout = (req, res) => {
  res.cookie('userSave', 'logout', {
    expires: new Date(Date.now() + 2 * 1000),
    httpOnly: true,
  });
  res.status(200).redirect('/');
};



