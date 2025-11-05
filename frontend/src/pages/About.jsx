import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      {/* Title Section */}
      <div className="text-2xl text-center my-10">
        <Title heading1="ABOUT" heading2="US" />
      </div>

      {/* About Us Content */}
      <div className="mx-auto w-[1300px] h-[500px] flex items-center justify-center">
        {/* Left side content */}
        <img
          src={assets.about_img}
          alt="about-us"
          className="w-1/2 h-full object-cover"
        />
        {/* Right side content */}
        <div className="w-1/2 h-full p-8 flex flex-col justify-center text-gray-700">
          <p>
            Forever was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes.
          </p>
          <br />
          <p>
            Since our inception, we've worked tirelessly to curate a diverse
            selection of high-quality products that cater to every taste and
            preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>
          <br />
          <p className="font-bold text-black"> Our Mission</p>
          <br />
          <p>
            Our mission at Forever is to empower customers with choice,
            convenience, and confidence. We're dedicated to providing a seamless
            shopping experience that exceeds expectations, from browsing and
            ordering to delivery and beyond.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      {/* Title Section */}
      <div className="text-2xl my-10 ml-20">
        <Title heading1="WHY CHOOSE" heading2="US" />
      </div>

      {/* Features Grid */}
      {/* Feature 1 */}
      <div className="flex flex-row p-6 border border-gray-200 w-[1300px] mx-auto gap-10 text-gray-700">
        <div className="flex flex-col px-10 py-10 w-1/3 gap-4 border-r border-gray-200 text-sm">
          <p className="font-bold">Quality Assurance:</p>
          <p className="">
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col px-10 py-10 w-1/3 gap-4 border-r border-gray-200 text-sm">
          <p className="font-bold">Convenience:</p>
          <p className="">
            With our user-friendly interface and hassle-free ordering process,
            shopping has never been easier.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col px-10 py-10 w-1/3 gap-4 border-gray-200 text-sm">
          <p className="font-bold">Exceptional Customer Service:</p>
          <p className="">
            Our team of dedicated professionals is here to assist you the way,
            ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>

      {/* Newsletter Subscription Section */}
      <NewsLetterBox />

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default About;
