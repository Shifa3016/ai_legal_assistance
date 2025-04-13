"use client"
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="flex justify-between items-center text-[20px] rounded-full px-4 py-2">
        {/* Hamburger Icon */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-[#f0c040]">
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>

        {/* Logo - Hide on mobile when menu is open */}
        <div className={`flex items-center ${isMenuOpen ? 'hidden' : ''}`}>
          <img className="h-[50px] rounded-full" src="logo2.png" alt="Logo" />
          <div className="font-bold ml-4">LawSphere</div>
        </div>

        {/* Navigation Links */}
        <div className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
          <ul className="flex lg:flex-row flex-col gap-6 text-[#f0c040]">
            <Link href="/">
              <li className="hover:font-bold hover:text-white hover:bg-[#efb008] px-3 rounded-full py-2">
                Home
              </li>
            </Link>
            <Link href="/blogs">
              <li className="hover:font-bold hover:text-white hover:bg-[#efb008] px-3 rounded-full py-2">
                Blogs
              </li>
            </Link>
            <Link href="/chatbot/chatbot.html">
              <li className="hover:font-bold hover:text-white hover:bg-[#efb008] px-3 rounded-full py-2">
                Chatbot
              </li>
            </Link>
            <Link href="/ngos">
              <li className="hover:font-bold hover:text-white hover:bg-[#efb008] px-3 rounded-full py-2">
                NGOs
              </li>
            </Link>
            <Link href="/contact">
              <li className="hover:font-bold hover:text-white hover:bg-[#efb008] px-3 rounded-full py-2">
                Contact
              </li>
            </Link>
            <Link href="/signup">
              <li className="hover:font-bold hover:text-white hover:bg-[#efb008] px-3 rounded-full py-2">
                Sign Up
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
