import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const OurPolicy = () => {
  return (
    <div className="flex flex-row justify-between w-3/4 mx-auto">
      {/* Exchange Policy Section */}
      <div className="flex flex-col items-center mt-20">
        <img
          src={assets.exchange_icon}
          alt="Exchange Icon"
          className="w-12 mb-2"
        />
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="text-gray-500">We Offer hassle free exchange policy</p>
      </div>

      {/* Return Policy Section */}
      <div className="flex flex-col items-center mt-20">
        <img
          src={assets.quality_icon}
          alt="Quality Icon"
          className="w-12 mb-2"
        />
        <p className="font-semibold">7 Days Return Policy</p>
        <p className="text-gray-500">We provide 7 days free return policy</p>
      </div>

      {/* Customer Support Section */}
      <div className="flex flex-col items-center mt-20">
        <img
          src={assets.support_img}
          alt="Support Icon"
          className="w-12 mb-2"
        />
        <p className="font-semibold">Best customer support</p>
        <p className="text-gray-500">We provide 24/7 customer support</p>
      </div>
    </div>
  );
};

export default OurPolicy;
