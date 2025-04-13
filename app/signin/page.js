'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('${API_URL}/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include' // Important for cookies
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // Redirect on successful login
      router.push('/');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex bg-white text-black justify-center w-[60%] mx-auto h-[85vh] rounded-[40px]">
        <div className="right-signup w-[50%] flex flex-col items-center justify-center text-center">
          <h2 className="font-bold text-3xl">Sign In</h2>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <div className="form-container sign-up flex flex-col justify-center px-[48px] items-center">
            <form onSubmit={handleSubmit}>
              <input 
                className="my-2 bg-[#eee] py-[10px] px-[15px] border-none" 
                type="email" 
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input 
                className="my-2 bg-[#eee] py-[10px] px-[15px] border-none mb-[20px]" 
                type="password" 
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="text-[13px] mb-[20px]">Forgot Password</div>
              <button 
                className="px-12 py-2 mx-1 border border-black text-black hover:text-[#f0c040] hover:bg-black hover:border-[#f0c040] hover:font-bold transition"
                disabled={loading}
              >
                {loading ? 'Signing In...' : 'SIGN IN'}
              </button>
            </form>
          </div>
        </div>
        {/* Left side remains the same */}
      </div>
    </div>
  );
}
