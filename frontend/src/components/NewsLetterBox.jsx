import React from "react";

const NewsLetterBox = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="flex flex-col w-2/4 mx-auto items-center">
      {/* Newsletter Heading */}
      <p className="text-2xl font-semibold mt-20 mb-2">
        Subscribe now & get 20% off
      </p>

      {/* Newsletter description */}
      <p className="text-gray-500 mb-2">
        Join our newsletter to stay updated with our latest offers and products.
      </p>

      {/* Input box for subscribing */}
      <form className="flex flex-row w-full mt-2" onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          required
          className="border border-gray-300 px-3 py-2 mr-2 w-3/4"
        />
        <button className="bg-black text-white p-2 w-1/4 ml-[-13px] cursor-pointer">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
