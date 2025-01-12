import React from 'react';
import { FaPizzaSlice } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaBoltLightning } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import Image from 'next/image'; // Import Image component from Next.js

export default function Navbar() {
  return (
    <div className="bg-[#ffeb3b] shadow-md px-10 py-5">
      <div className="flex justify-between items-center">
        {/* Left Section */}
        <div className="flex items-center gap-8">
          <FaPizzaSlice className="w-10 h-10 text-[#4e342e] hover:text-white transition duration-300" />

          <div className="relative hidden lg:block">
            <input
              className="rounded-full py-3 px-7 w-[400px] pr-10 border border-gray-300 focus:ring focus:ring-[#333333] bg-white placeholder-gray-600"
              placeholder="Search your favorite pizzas from the menu!"
              aria-label="Search bar"
            />
            <FaSearch className="absolute w-5 h-5 text-[#333333] right-3 top-1/2 transform -translate-y-1/2" />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-8">
          <div className="hidden lg:flex items-center gap-2 text-sm text-[#4e342e]">
            <FaBoltLightning className="w-5 h-5 text-[#333333]" />
            <p style={{ fontSize: '20px' }}>
              Order now and get it within <span style={{ fontSize: '20px', color: 'red-900' }}>15 minutes!</span>
            </p>
          </div>
          <FaCartShopping className="w-7 h-7 text-[#333333] hover:text-gray-900 transition duration-300" />
          <Image
            className="w-10 h-10 rounded-full ring-2 ring-[#333333]"
            src="https://i.pinimg.com/736x/7d/58/1b/7d581b7a1fdb2041d3008600074fe9f5.jpg"
            alt="User Avatar"
            width={40} // Width of the image
            height={40} // Height of the image
          />
        </div>
      </div>
    </div>
  );
}
