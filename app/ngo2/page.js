// pages/index.js
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
    const [pincode, setPincode] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSearch = () => {
        // Validate if the pincode is exactly 6 digits
        if (!/^\d{6}$/.test(pincode)) {
            setError("Please enter a valid 6-digit pincode.");
            return;
        }

        // If valid, redirect to the new page with the pincode as a path parameter
        setError('');
        router.push(`/ngos/pincode`);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>NGO Search by Pincode</h1>

            <div>
                <label htmlFor="pincode">Enter Pincode:</label>
                <input
                    type="text"
                    id="pincode"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    style={{ padding: '8px', marginRight: '10px' }}
                />
                <button onClick={handleSearch} style={{ padding: '8px 16px' }}>
                    Search
                </button>
            </div>

            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}
