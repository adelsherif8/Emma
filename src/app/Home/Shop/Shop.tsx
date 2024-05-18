'use client'
import React, { useState } from 'react';

interface ProductProps {
  image: string;
  header: string;
  description: string[];
  price: string;
  link: string;
}

interface CardProps {
  image: string;
  header: string;
  description: string[];
  price: string;
  link: string;
}

const Shop = () => {
  const defaultProduct: ProductProps = {
    image: "/Shop/black.png",
    header: "ANYTHING GOES CREWNECK VINTAGE BLACK",
    description: ["Standard Fit", "9oz 80% ring-spun cotton / 20% polyester blend"],
    price: "$54.00",
    link: "https://shopemmachamberlain.com/products/anything-goes-crewneck-vintage-black"
  };

  const cards: CardProps[] = [
    { image: "/Shop/black.png", header: "ANYTHING GOES CREWNECK VINTAGE BLACK", description: ["Standard Fit", "9oz 80% ring-spun cotton / 20% polyester blend"], price: "$54.00 ", link: "https://shopemmachamberlain.com/products/anything-goes-crewneck-vintage-black" },
    { image: "/Shop/blue.png", header: "ANYTHING GOES CATS CREWNECK", description: ["Oversized fit", "Super-soft, custom garment-dyed hoodie.", "70% cotton / 30% polyester"], price: "$54.00", link: "https://shopemmachamberlain.com/products/anything-goes-cats-crewneck" },
    { image: "/Shop/pink.png", header: "ANYTHING GOES SWEATPANTS", description: ["Embroidered Emma logo on upper right pant leg", "70% cotton / 30% polyester"], price: "$54.00", link: "https://shopemmachamberlain.com/products/anything-goes-sweatpants" }
  ];

  const [selectedCard, setSelectedCard] = useState<ProductProps>(defaultProduct);

  const handleMouseEnter = (card: CardProps) => {
    setSelectedCard(card);
  };

  return (
    <div className="flex md:flex-row flex-col pt-20 w-full h-full md:h-screen" id='shop'>
      {/* Left container */}
      <div className="flex flex-col items-center px-4 md:p-4 md:w-1/2">
        {/* Upper div with image, header, paragraph, price, and button */}
        <div className="flex flex-col items-center md:items-start md:p-8 md:pl-32">
          <div className="relative flex justify-center w-full">
            <div className="absolute inset-0 bg-blue-500 rounded-t-full h-64 md:h-80"></div>
            <img src={selectedCard.image} alt="Product" className="relative z-10 rounded-lg w-2/3 md:w-1/2 object-cover" />
          </div>
          <h2 className="mb-0 md:mb-2 p-2 pt-5 md:pt-0 w-72 md:w-10/12 text-center text-xl md:text-left md:text-4xl fonthead">{selectedCard.header}</h2>
          <ul className="mb-4 pl-10 md:pl-0 text-gray-500 text-left text-sm md:text-base md:text-left list-disc list-inside">
            {selectedCard.description.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>
          <p className="pb-2 font-semibold text-lg md:text-xl fonthead">{selectedCard.price}</p>
          <a href={selectedCard.link} className="bg-blue-500 hover:bg-blue-300 p-2 md:p-4 rounded-xl w-fit text-[#F9F6EE] text-center text-xl transition duration-300 fonthead">Buy Now</a>
        </div>
      </div>

      {/* Right container */}
      <div className="flex flex-col md:pr-10 w-full md:w-1/2">
        {/* Upper div with big head and underhead */}
        <div className="flex flex-col mb-4 p-4 rounded-lg">
          <h1 className="mb-2 pt-4 w-full md:w-8/12 text-3xl text-center md:text-left md:text-7xl fonthead">Shop Emma's Collection</h1>
          <h3 className="mb-4 text-base text-center text-gray-500 md:text-left md:text-xl">Find your perfect fit among the exclusive items.</h3>
        </div>

        {/* Lower div with 3 card divs */}
        <div className="gap-4 grid grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col bg-[#F9F6EE] shadow-lg"
              onMouseEnter={() => handleMouseEnter(card)}
            >
              <div className="bg-blue-500 p-4">
                <img src={card.image} alt={`Card ${index + 1}`} className="w-full" />
              </div>
              <div className="p-4 h-full">
                <h4 className="text-center text-xs md:text-base fonthead">{card.header}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
