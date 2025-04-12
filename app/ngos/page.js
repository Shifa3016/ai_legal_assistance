'use client';

import { useState } from 'react';

export default function NGOsPage() {
  const [pincode, setPincode] = useState('');
  const [ngos, setNgos] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchNGOs = async () => {
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:3000/api/ngos/search?pincode=${pincode}`);
      const data = await res.json();
      setNgos(data);
    } catch (error) {
      console.error('Error fetching NGOs:', error);
      setNgos([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Find NGOs by Pincode</h1>

      <input
        type="text"
        placeholder="Enter pincode"
        value={pincode}
        onChange={(e) => setPincode(e.target.value)}
        className="border p-2 rounded w-full mb-4"
      />
      <button
        onClick={fetchNGOs}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {loading ? 'Searching...' : 'Search'}
      </button>

      <div className="mt-6">
        {ngos.length > 0 ? (
          <ul className="space-y-4">
            {ngos.map((ngo, index) => (
              <li key={index} className="p-4 border rounded shadow">
                <h2 className="text-xl font-semibold">{ngo.name}</h2>
                <p>{ngo.address}</p>
                <p><strong>City:</strong> {ngo.city}</p>
                <p><strong>State:</strong> {ngo.state}</p>
                <p><strong>Pincode:</strong> {ngo.pincode}</p>
                {ngo.distance_km && (
                  <p><strong>Distance:</strong> {ngo.distance_km} km</p>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600 mt-4">No NGOs found.</p>
        )}
      </div>
    </div>
  );
}
