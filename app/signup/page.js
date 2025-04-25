'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup functionality here
    console.log('Sign up attempt with:', formData);
  };

  useEffect(() => {
    // Ensure smooth transitions are applied on the client side
    const links = document.querySelectorAll('a');
    links.forEach(link => {
      link.style.scrollBehavior = 'smooth';
    });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#212A2D] p-4 font-[family-name:var(--font-outfit)]">
      <div className="w-full max-w-4xl flex flex-row">
        {/* Left section with welcome text */}
        <div className="text-white p-10 w-2/5 flex flex-col justify-between">
          <div className="mb-16">
            <h1 className="text-[30px] font-bold mb-3 tracking-wide">WELCOME TO</h1>
            <h1 className="text-[30px] font-bold mb-3 tracking-wide">MyEVENTS</h1>
            <p className="text-white text-xs">
              A world where you discover events<br />
              and concerts at ur approval
            </p>
          </div>
          
          <div className="text-xs text-white/62 mt-auto">
            ©2025 MyEVENTS alrights reserved
          </div>
        </div>

        {/* Right section with signup form */}
        <div className="border border-[#FFEC5D75] rounded-lg shadow-lg shadow-yellow-900/40 p-8 w-3/6 min-h-[500px] flex flex-col justify-center">
          <div className="max-w-sm mx-auto w-full">
            <div className="mb-8">
              <h2 className="text-[44px] font-medium text-white">Sign Up</h2>
              <div className="h-[0.1px] w-37 bg-white/62 mt-2 rounded-full"></div>
            </div>
            
            <form onSubmit={handleSubmit} className="w-full">
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm text-white mb-2">
                  Names
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name.."
                  className="w-full px-3 py-3 bg-gray-800 border border-gray-700 rounded-[10px] text-white text-sm focus:outline-none hover:border-[#FFEC5D75] focus:border-[#FFEC5D75]"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@domain.com"
                  className="w-full px-3 py-3 bg-gray-800 border border-gray-700 rounded-[10px] text-white text-sm focus:outline-none hover:border-[#FFEC5D75] focus:border-[#FFEC5D75]"
                  required
                />
              </div>
              
              <div className="mb-8">
                <label htmlFor="password" className="block text-sm text-white mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="w-full px-3 py-3 bg-gray-800 border border-gray-700 rounded-[10px] text-white text-sm focus:outline-none hover:border-[#FFEC5D75] focus:border-[#FFEC5D75]"
                  required
                />
              </div>
              
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-[#FFEC5D46] hover:bg-[#FFEC5D75] text-white text-[18px] py-2 px-6 rounded-[10px] border-radius-[10px] border border-[#FFEC5D75] shadow-lg shadow-yellow-900/40 transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Sign Up
                </button>
                
                <div className="text-[15px] text-gray-400">
                  Have an account?{" "}
                  <Link href="/login" className="text-[#FFEC5D] hover:text-yellow-500 transition-all duration-300 ease-in-out">
                    Log in
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}