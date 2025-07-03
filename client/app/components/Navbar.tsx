import React from 'react';
import { UserIcon } from 'lucide-react';
export const Navbar: React.FC = () => {
  return <nav className="bg-[#0F1421] border-b border-[#2A2F3E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] text-transparent bg-clip-text">
                EML
              </span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a href="#" className="border-[#4F46E5] text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Home
              </a>
              <a href="#" className="border-transparent text-gray-300 hover:text-white hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                My Cards
              </a>
              <a href="#" className="border-transparent text-gray-300 hover:text-white hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                My Profile
              </a>
              <a href="#" className="border-transparent text-gray-300 hover:text-white hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Contact Us
              </a>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
            <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Login
            </button>
            <button className="bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90">
              Register
            </button>
          </div>
          <div className="flex items-center sm:hidden">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#1A1F2E] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#4F46E5]">
              <UserIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>;
};