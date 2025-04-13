'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from "next/link";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Client-side validation
    if (formData.password !== formData.passwordConfirm) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      // Redirect to login page after successful registration
      router.push('/signin');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex bg-white text-black justify-center w-[60%] mx-auto h-[85vh] rounded-[40px]">
        {/* Left side remains the same */}
        
        <div className="right-signup w-[50%] flex flex-col items-center justify-center text-center">
          <h2 className="font-bold text-3xl">Create Account</h2>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <div className="form-container sign-up flex flex-col justify-center px-[48px] items-center">
            <form onSubmit={handleSubmit}>
              <input 
                className="my-2 bg-[#eee] py-[10px] px-[15px] border-none" 
                type="text" 
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input 
                className="my-2 bg-[#eee] py-[10px] px-[15px] border-none" 
                type="email" 
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input 
                className="my-2 bg-[#eee] py-[10px] px-[15px] border-none" 
                type="password" 
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <input 
                className="my-2 bg-[#eee] py-[10px] px-[15px] border-none mb-[20px]" 
                type="password" 
                name="passwordConfirm"
                placeholder="Confirm Password"
                value={formData.passwordConfirm}
                onChange={handleChange}
                required
              />
              <button 
                type="submit"
                className="px-12 py-2 mx-1 border border-black text-black hover:text-[#f0c040] hover:bg-black hover:border-[#f0c040] hover:font-bold transition"
                disabled={loading}
              >
                {loading ? 'Registering...' : 'SIGN UP'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
