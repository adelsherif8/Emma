'use client';
import React, { useState } from 'react';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="top-0 z-50 fixed flex justify-between items-center bg-transparent px-4 md:px-28 py-4 w-full">
      {/* Logo */}
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="mr-2 h-20" />
      </div>

      {/* Hamburger Menu */}
      <button className="bg-transparent border-none cursor-pointer focus:outline-none" onClick={toggleMenu}>
        <div className={`hamburger-icon ${isOpen ? 'open' : ''}`}>
          <span className="block bg-[#F9F6EE] mb-1 rounded-lg w-6 h-1"></span>
          <span className="block bg-[#F9F6EE] mb-1 rounded-lg w-6 h-1"></span>
          <span className="block bg-[#F9F6EE] mb-1 rounded-lg w-6 h-1"></span>
        </div>
      </button>

      {/* Menu Items */}
      <div className={`fixed top-0 right-0 h-full w-full md:w-96 bg-[#F9F6EE] shadow-lg transform transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-end p-4">
          <button className="text-3xl text-black focus:outline-none" onClick={toggleMenu}>
            &times;
          </button>
        </div>
        <div className="mt-8 p-4">
          <a href="#home" className="block hover:bg-black py-4 border-b border-black font-bold text-black text-center text-xl md:text-2xl hover:text-white uppercase transition duration-300 fonthead">HOME</a> 
          <a href="#connect" className="block hover:bg-black py-4 border-b border-black font-bold text-black text-center text-xl md:text-2xl hover:text-white uppercase transition duration-300 fonthead">CONNECT</a>
          <a href="#about" className="block hover:bg-black py-4 border-b border-black font-bold text-black text-center text-xl md:text-2xl hover:text-white uppercase transition duration-300 fonthead">ABOUT</a>
          <a href="#achievement" className="block hover:bg-black py-4 border-b border-black font-bold text-black text-center text-xl md:text-2xl hover:text-white uppercase transition duration-300 fonthead">achievement</a>
          <a href="#shop" className="block hover:bg-black py-4 border-b border-black font-bold text-black text-center text-xl md:text-2xl hover:text-white uppercase transition duration-300 fonthead">SHOP</a>
          <a href="#contact" className="block hover:bg-black py-4 font-bold text-black text-center text-xl md:text-2xl hover:text-white uppercase transition duration-300 fonthead">CONNECT</a>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
