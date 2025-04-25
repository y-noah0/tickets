'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login functionality here
    console.log('Login attempt with:', credentials);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#212A2D] p-4 font-[family-name:var(--font-outfit)]">
      <div className="w-full max-w-4xl flex flex-row">
        {/* Left section with welcome text */}
        <div className=" text-white p-10 w-2/5 flex flex-col justify-between">
          <div className="mb-16">
            <h1 className="text-[30px] font-bold mb-1 tracking-wide">WELCOME BACK</h1>
            <h1 className="text-[30px] font-bold mb-3 tracking-wide">TO MyEVENTS</h1>
            <p className="text-white text-xs">
              A world where you discover events<br />
              and connect that of approved
            </p>
          </div>
          
          <div className="text-xs text-white/62 mt-auto">
            ©2023 MyEVENTS all rights reserved
          </div>
        </div>

        {/* Right section with login form */}
        <div className=" border border-[#FFEC5D75] rounded-lg shadow-lg shadow-yellow-900/40 p-8 w-3/6 min-h-[500px] flex flex-col justify-center">
          <div className="max-w-sm mx-auto w-full">
            <div className="mb-8">
              <h2 className="text-[44px] font-medium text-white">Sign In</h2>
              <div className="h-[0.1px] w-33 bg-white/62 mt-2 rounded-full"></div>
            </div>
            
            <form onSubmit={handleSubmit} className="w-full">
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={credentials.email}
                  onChange={handleChange}
                  placeholder="example@domain.com"
                  className="w-full px-3 py-3 bg-gray-800 border border-gray-700 rounded-[10px] text-white text-sm focus:outline-none hover:border-[#FFEC5D75] focus:border-[#FFEC5D75] "
                  required
                />
              </div>
              
              <div className="mb-8">
                <label htmlFor="password" className="block text-sm text-gray-400 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={credentials.password}
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
                  Sign In
                </button>
                
                <div className="text-xs text-gray-400">
                  No account?{" "}
                  <Link href="/signup" className="text-[#FFEC5D] hover:text-yellow-500">
                    Create one
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
