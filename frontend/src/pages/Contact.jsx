import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      {/* Title Section */}
      <div className="text-2xl text-center my-10">
        <Title heading1="CONTACT" heading2="US" />
      </div>

      {/* About Us Content */}
      <div className="mx-auto w-[900px] h-[500px] flex items-center justify-center">
        {/* Left side content */}
        <img
          src={assets.contact_img}
          alt="about-us"
          className="w-1/2 h-full object-cover"
        />
        {/* Right side content */}
        <div className="w-1/2 h-full p-13 flex flex-col justify-center text-gray-700">
          <p className="font-bold text-xl">Our Store</p>
          <br />
          <p>54709 Willms Station</p>
          <p>Suite 350, Washington, USA</p>
          <br />

          <p>Tel: +1-123-456-7890</p>
          <p>Email: admin@forever.com</p>
          <br />

          <p className="font-bold text-xl">Careers at Forever</p>
          <br />
          <p>Learn more about our teams and job openings</p>
          <br />
          <button className="border border-black px-5 py-3 text-sm w-[150px] hover:bg-black hover:text-white duration-400 cursor-pointer">
            Explore Jobs
          </button>
        </div>
      </div>

      {/* Newsletter Subscription Section */}
      <NewsLetterBox />

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default Contact;
