
import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center space-y-4 py-6 bg-gradient-to-r from-[#fff8e1] to-[#fff8e1] text-[#4B0082]">
      {/* Navigation Links */}
      <nav className="flex justify-center space-x-6 text-black-300">
        <a className="hover:text-cyan-500 transition" href="#">Home</a>
        <a className="hover:text-cyan-500 transition" href="#">About</a>
        <a className="hover:text-cyan-500 transition" href="#">Delivery</a>
        <a className="hover:text-cyan-500 transition" href="#">Contact</a>
      </nav>

      {/* Social Media Links */}
      <div className="flex space-x-5">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/?size=100&id=118497&format=png" alt="Facebook" className="w-8 h-8" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/?size=100&id=13930&format=png" alt="LinkedIn" className="w-8 h-8" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png" alt="Instagram" className="w-8 h-8" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/?size=100&id=13963&format=png" alt="Twitter" className="w-8 h-8" />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-sm">&copy; 2025 Laiba Imran. All Rights Reserved.</p>
    </footer>
  );
}
