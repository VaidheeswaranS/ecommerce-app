import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Hero = () => {
  return (
    <div className="border border-gray-400 flex flex-row items-center justify-center w-full h-full">
      {/* Left Section */}
      <div className="w-1/2 h-1/2 text-center flex flex-col text-gray-500">
        <div>
          <p className="text-center">OUR BESTSELLERS</p>
        </div>
        <h1 className="font-[prata-regular] text-4xl leading-relaxed">
          Latest Arrivals
        </h1>
        <div>
          <p className="font-semibold text-sm">SHOP NOW</p>
        </div>
      </div>

      {/* Right Section */}
      <img
        src={assets.hero_img}
        alt="Hero"
        className="w-1/2 h-1/2 object-cover"
      />
    </div>
  );
};

export default Hero;
