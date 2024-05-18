import React from 'react';
import { FaYoutube, FaInstagram, FaTiktok, FaLinkedin } from 'react-icons/fa';
import { FaUpwork } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 pt-32 text-white">
      <div className="flex md:flex-row flex-col justify-between items-center mx-auto container">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="mb-2 font-bold text-2xl">Emma Chamberlain</h2>
          <p>Exploring life, fashion, and inspiration through Emma's lens.</p>
        </div>
        <div className="flex space-x-6">
          <a href="https://www.youtube.com/@emmachamberlain" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/emmachamberlain/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="w-6 h-6" />
          </a>
          <a href="https://www.tiktok.com/@emmachamberlain" target="_blank" rel="noopener noreferrer">
            <FaTiktok className="w-6 h-6" />
          </a>
        </div>
      </div>
      <div className="border-gray-700 mx-auto mt-4 pt-4 border-t text-center container">
        <p>&copy; {new Date().getFullYear()} Emma Chamberlain. All rights reserved.</p>
        <p className="mt-2">
          Created by 
          <a href="https://www.linkedin.com/in/adelsherif8" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline"> adelsherif8</a>
          <a href="https://www.linkedin.com/in/adelsherif8" target="_blank" rel="noopener noreferrer" className="inline-block ml-2">
            <FaLinkedin className="w-5 h-5 text-blue-400" />
          </a>
          <a href="https://www.upwork.com/freelancers/~01e8bb5b9c72e5f100" target="_blank" rel="noopener noreferrer" className="inline-block ml-2">
            <FaUpwork className="w-5 h-5 text-green-500" />
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
