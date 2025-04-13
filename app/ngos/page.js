'use client';  // Add this line to mark the component as a Client Component

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Use 'next/navigation' instead of 'next/router' for App Directory

export default function Home() {
  const [pincode, setPincode] = useState('');
  const [isValid, setIsValid] = useState(true);
  const router = useRouter();

  const handlePincodeChange = (event) => {
    setPincode(event.target.value);
  };

  const handleSearchClick = () => {
    if (pincode.length === 6 && !isNaN(pincode)) {
      setIsValid(true);
      router.push(`/ngos/pincode`);
    } else {
      setIsValid(false);
    }
  };

  return (
    <div
      style={{
        backgroundImage: 'url(/ngoback.jpg)', // Background image URL
        backgroundSize: 'cover',  // Ensures the image covers the entire background
        backgroundPosition: 'center', // Centers the image
        color: '#f0c040',  // Applying yellow-gold color to text
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: 'black',  // Fallback color if the image doesn't load
      }}
    >
      <h1 className='text-3xl font-bold' style={{ marginBottom: '20px', color: 'white' }}>NGO</h1>
      <div style={{ textAlign: 'center' }}>
        <label
          htmlFor="pincode"
          style={{
            fontSize: '18px',
            color: 'white',  // Label text in white for contrast
          }}
        >
          Search by Pincode
        </label>
        <div>
          <input
            type="text"
            id="pincode"
            placeholder="Enter Pincode"
            value={pincode}
            onChange={handlePincodeChange}
            maxLength={6}
            style={{
              padding: '10px',
              marginTop: '10px',
              fontSize: '16px',
              width: '200px',
              borderRadius: '5px',
              border: '1px solidrgb(244, 190, 43)',  // Yellow border color
              color: 'black',
              backgroundColor: 'white',
            }}
          />
        </div>
        <button
          onClick={handleSearchClick}
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#f0c040',  // Yellow button background
            color: 'black',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Search
        </button>
        {!isValid && (
          <p style={{ color: 'red', marginTop: '10px' }}>
            Please enter a valid 6-digit pincode.
          </p>
        )}
      </div>
    </div>
  );
}

