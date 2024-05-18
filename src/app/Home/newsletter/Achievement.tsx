"use client";
import React, { useState, useEffect } from 'react';

const Newsletter = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [nextImage, setNextImage] = useState(5);
  const [isMobile, setIsMobile] = useState(false); 
  const cardWidth = 300; 
  const totalCards = 9;

  useEffect(() => {

    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile); 

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isMobile) {
        setCurrentIndex(prevIndex => (prevIndex === 6 ? 1 : prevIndex + 1));
        setNextImage(prevImage => (prevImage === 4 ? 5 : prevImage + 1));
      } else {
        setCurrentIndex(prevIndex => (prevIndex === 4 ? 1 : prevIndex + 1));
        setNextImage(prevImage => (prevImage === 5 ? 5 : prevImage + 1));
      }
    }, 7000);

    return () => clearInterval(interval);
  }, [isMobile]);

  const nextSlide = () => {
    if (isMobile) {
      setCurrentIndex(prevIndex => (prevIndex === 6 ? 1 : prevIndex + 1));
      setNextImage(prevImage => (prevImage === 6 ? 5 : prevImage + 1));
    } else {
      setCurrentIndex(prevIndex => (prevIndex === 4 ? 1 : prevIndex + 1));
      setNextImage(prevImage => (prevImage === 5 ? 5 : prevImage + 1));
    }
  };

  const prevSlide = () => {
    if (isMobile) {
      setCurrentIndex(prevIndex => (prevIndex === 1 ? 1 : prevIndex - 1));
      setNextImage(prevImage => (prevImage === 8 ? 1 : prevImage - 1));
    } else {
      setCurrentIndex(prevIndex => (prevIndex === 1 ? 9 : prevIndex - 1));
      setNextImage(prevImage => (prevImage === 4 ? 1 : prevImage - 1));
    }
  };

  const headers = [
    "YouTube Stardom (2017-Present)",
    "Streamy Award (2018)",
    "Brand Collaborations (2019-Present)",
    "Chamberlain Coffee Launch (2019)",
    "Forbes 30 Under 30 (2020)",
    "Podcast Launch (2019-Present)",
    "Entrepreneurial Ventures (2022)",
    "Met Gala Debut (2023)",
    "Vogue Cover (2024)"
  ];

  const descriptions = [
    "Emma began her YouTube channel in 2017, quickly gaining millions of subscribers. Her unique vlogs, relatable content, and quirky personality catapulted her to internet fame, making her one of the most influential YouTubers of her generation.",
    "In 2018, Emma won the Streamy Award for Breakout Creator. This accolade recognized her rapid rise to prominence on the platform and her impact on online content creation.",
    "Emma has collaborated with numerous major brands, including Louis Vuitton, Calvin Klein, and Hollister, showcasing her influence in the fashion and lifestyle industries.",
    "Emma launched her own coffee brand, Chamberlain Coffee, in 2019. The brand emphasizes sustainability and high-quality coffee beans, reflecting Emma's commitment to environmental responsibility.",
    "Emma was included in Forbes' prestigious 30 Under 30 list in 2020, recognizing her as one of the most influential young people in the world.",
    "In 2019, Emma launched her podcast, 'Anything Goes with Emma Chamberlain.' The podcast features candid conversations with guests on a wide range of topics, further expanding her reach into the podcasting world.",
    "Emma expanded her entrepreneurial endeavors by launching a clothing line in collaboration with a major fashion brand. The collection reflects her personal style and has been well-received by her fans.",
    "Emma Chamberlain debuted at the Met Gala in 2023, a pivotal moment in her career. The Met Gala is renowned as the Oscars of the fashion world, attended by luminaries and influencers. Chamberlain's presence affirmed her influence and established her as a style icon.",
    "Emma appeared on the cover of Vogue in 2024, highlighting her status as a fashion and cultural icon. This milestone showcases her unique style and vibrant personality, earning her widespread acclaim."
  ];

  return (
    <div className="relative newsletter-section" id='achievement'>
      <div className="full-width-image"></div>
      <div className="relative mx-auto w-full sm:w-4/5 overflow-hidden" style={{ marginTop: '-200px' }}>
        <button 
          className="top-1/2 left-2 sm:left-4 z-20 absolute bg-black bg-opacity-50 p-2 rounded-full text-white transform -translate-y-1/2" 
          onClick={prevSlide}
          aria-label="Previous Slide"
        >
          &lt;
        </button>
        <button 
          className="top-1/2 right-2 sm:right-4 z-20 absolute bg-black bg-opacity-50 p-2 rounded-full text-white transform -translate-y-1/2" 
          onClick={nextSlide}
          aria-label="Next Slide"
        >
          &gt;
        </button>
        <div className="relative flex transition-transform duration-1000 carousel-wrapper ease-in-out" style={{ transform: `translateX(-${(currentIndex - 1) * cardWidth}px)` }}>
          {Array.from({ length: totalCards }, (_, index) => (
            <div key={index} className="relative px-2 w-3/4 sm:w-1/2">
              <div className="bg-gray-100 mx-auto rounded-lg" style={{ width: '200px', height: '350px' }}>
                <img src={`/cards/${((index % totalCards) + 1)}.jpeg`} alt={`Card ${((index % totalCards) + 1)}`} className="mb-4 rounded-lg w-full object-cover" style={{ width: '200px', height: '350px '  }} />
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 p-2 rounded-lg transition-opacity duration-300">
                  <h3 className="mb-2 font-semibold text-center text-lg text-white fonthead">{headers[index]}</h3>
                  <p className="text-center text-sm text-white fonthead">{descriptions[index]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
