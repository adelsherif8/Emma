import React from 'react';
import Hamburger from './hamburger';

const Navbar = () => {
  return (
    <div className="h-full" id='home'>
      <div className="flex justify-between items-center">
        <Hamburger />
      </div>

      <div className="bg-black bg-cover mx-auto mt-0 mb-20 rounded-b-3xl bgimage" style={{ width: '90%', height: '80vh' }}>
        <div className="flex flex-col justify-center items-center gap-4 px-4 h-full text-white" style={{ zIndex: '2' }}>
          <p className="text-2xl text-center md:text-6xl fonthead" style={{ zIndex: '2' }}>Dive into Emma's World</p>
          <p className="text-center text-sm md:text-base" style={{ zIndex: '2' }}>Exploring Life, Fashion, and Inspiration Through Emma's Lens</p>
          <a href="#connect" className="inline-block z-10">
          <button
          className="p-4 md:p-6 rounded-xl text-sm md:text-2xl transition duration-300 buttonHead fonthead"
          style={{ zIndex: '2' }}
          >
          EXPLORE MORE
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
