-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS cube;
CREATE EXTENSION IF NOT EXISTS earthdistance;

-- Create NGOs table
CREATE TABLE ngos (
  ngo_id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  address TEXT,
  owner_phone VARCHAR(15),
  staff_phone VARCHAR(15),
  email VARCHAR(50),
  city VARCHAR(50),
  state VARCHAR(50),
  pincode VARCHAR(10) NOT NULL,
  latitude FLOAT,
  longitude FLOAT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create index for faster location searches
CREATE INDEX idx_ngos_geo ON ngos USING gist (ll_to_earth(latitude, longitude));

-- Function to update timestamp
CREATE OR REPLACE FUNCTION update_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for automatic timestamp updates
CREATE TRIGGER update_ngo_timestamp
BEFORE UPDATE ON ngos
FOR EACH ROW EXECUTE FUNCTION update_timestamp();


--Authentication table
CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  full_name VARCHAR(100) NOT NULL,
  email VARCHAR(150) UNIQUE NOT NULL,
  password TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
