import React from 'react';

const Connect = () => {
  return (
    <div className="flex md:flex-row flex-col h-screen" id='connect'>
      <div className="flex flex-col flex-1 justify-center items-center bg-cover p-4 md:p-0 text-white backunderhead1">
        <h2 className="mb-4 text-5xl md:text-7xl fonthead">YouTube</h2>
        <a href='https://www.youtube.com/@emmachamberlain' className="z-10 text-xl md:text-2xl">@emmachamberlain</a>
      </div>
      <div className="flex flex-col flex-1 justify-center items-center bg-cover p-4 md:p-0 text-white backunderhead2">
        <h2 className="mb-4 text-5xl md:text-7xl fonthead">IG</h2>
        <a href='https://www.instagram.com/emmachamberlain' className="text-xl md:text-2xl">@emmachamberlain</a>
      </div>
      <div className="flex flex-col flex-1 justify-center items-center bg-cover p-4 md:p-0 text-white backunderhead3">
        <h2 className="mb-4 text-5xl md:text-7xl fonthead">TikTok</h2>
        <a href='https://www.tiktok.com/@emmachamberlain' className="z-10 text-xl md:text-2xl">@emmachamberlain</a>
      </div>
    </div>
  );
};

export default Connect;
