'use client';
import React, { useState } from 'react';

const About = () => {
  const [hoveredImage, setHoveredImage] = useState(1);


  const getContent = (imageNumber) => {
    switch (imageNumber) {
      case 1:
        return {
          header: "How Emma Chamberlain Started:",
          text: "Emma Chamberlain, a San Francisco native, started her journey to fame by creating candid and relatable YouTube vlogs in 2017. Her unfiltered content quickly resonated with audiences, propelling her to become a leading figure in digital media.",
          additionalImages: ["/emmafame/youTubes.png"]
        };
      case 2:
        return {
          header: "Emma Chamberlain's Modeling Career:",
          text: "Emma Chamberlain's modeling career took off as her popularity grew. Her unique style and personality caught the attention of fashion brands, leading to collaborations and modeling opportunities in the industry.",
          additionalImages: [
            "/emmafame/LV.png",
            "/emmafame/ck.png",
            "/emmafame/hollister.png"
          ]
        };
      case 3:
        return {
          header: "Rapid Rise to Fame:",
          text: "Emma Chamberlain's rapid rise to fame can be attributed to her authentic storytelling and genuine personality. Her content not only resonated with viewers but also sparked trends and conversations, solidifying her position as a digital media sensation.",
          additionalImages: [
            "/emmafame/instagram.png",
            "/emmafame/youTubes.png",
            "/emmafame/tiktok.png"
          ]
        };
      case 4:
        return {
          header: "Chamberlain Coffee and Sustainability:",
          text: "Aside from her digital presence, Emma Chamberlain has ventured into entrepreneurship with Chamberlain Coffee. Her commitment to sustainability and ethical practices reflects her values and influence beyond social media.",
          additionalImages: ["/emmafame/ccoffee.png"]
        };
      default:
        return {
          header: "How Emma Chamberlain Started:",
          text: "Emma Chamberlain, a San Francisco native, started her journey to fame by creating candid and relatable YouTube vlogs in 2017. Her unfiltered content quickly resonated with audiences, propelling her to become a leading figure in digital media.",
          additionalImages: ["/emmafame/youTube.png"]
        };
    }
  };

  
  const handleImageHover = (imageNumber) => {
    setHoveredImage(imageNumber);
  };

  
  const handleMouseLeave = () => {
    setHoveredImage(1); 
  };

  return (
    <div className="flex md:flex-row flex-col h-screen" id='about'>
      <div className="flex md:flex-col flex-wrap w-full md:w-1/2 h-1/2 md:h-full overflow-hidden">
        {/* Left container with 4 small images */}
        <div className="grid grid-cols-2 w-full h-full">
          {[1, 2, 3, 4].map((imageNumber) => (
            <div
              key={imageNumber}
              className={`relative cursor-pointer w-full h-full transition-transform ${hoveredImage === imageNumber ? 'scale-110' : ''}`}
              onMouseEnter={() => handleImageHover(imageNumber)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={`/emmafame/${imageNumber}.jpeg`}
                alt={`Image ${imageNumber}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex justify-center items-center md:mt-0 w-full md:w-1/2 h-1/2 md:h-full">
        {/* Right container with header and text */}
        {hoveredImage && (
          <div className="relative w-full h-full">
            <img
              src={`/emmafame/${hoveredImage}.jpeg`}
              alt={`Hovered Image`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-col justify-center p-4 md:p-12">
              <h2 className="mb-4 text-[#F9F6EE] text-2xl text-center md:text-4xl md:text-left lg:text-5xl fonthead">{getContent(hoveredImage).header}</h2>
              <p className="text-base text-center text-white md:text-lg md:text-left">{getContent(hoveredImage).text}</p>
              {getContent(hoveredImage).additionalImages.length > 0 && (
                <div className="flex flex-wrap justify-center md:justify-center items-center mt-4">
                  {getContent(hoveredImage).additionalImages.map((image, index) => (
                    <img key={index} src={image} alt={`Additional Image ${index + 1}`} className="mx-2 my-2" style={{ height: '70px', width: '' }} />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
