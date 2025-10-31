import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-row mt-20 w-3/4 items-center justify-between mx-auto pb-10">
        {/* Footer Left Section */}
        <div className="flex flex-col items-start">
          <img src={assets.logo} alt="Footer Logo" className="w-32 mb-4" />
          <p className="text-sm w-[300px] text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* Footer Center Section */}
        <div className="flex flex-col items-start">
          <h1 className="text-lg font-semibold mb-4">COMPANY</h1>
          <ul className="text-sm text-gray-600">
            <li className="my-2">Home</li>
            <li className="my-2">About us</li>
            <li className="my-2">Delivery</li>
            <li className="my-2">Privacy Policy</li>
          </ul>
        </div>

        {/* Footer Right Section */}
        <div className="flex flex-col items-start">
          <h1 className="text-lg font-semibold mb-4">GET IN TOUCH</h1>
          <p className="text-gray-600 text-sm my-2">+1-123-456-7890</p>
          <p className="text-gray-600 text-sm my-2">contact@foreveryou.com</p>
        </div>
      </div>

      {/* Footer Copyright Section */}
      <div>
        <hr className="text-gray-400" />
        <p className="text-gray-500 text-sm text-center my-5">
          Copyright 2024@ forever.com - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
