import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../assets/frontend_assets/assets";
import { assets } from "../assets/frontend_assets/assets";
import Footer from "../components/Footer";
import RelatedProducts from "../components/RelatedProducts";
import { useDispatch } from "react-redux";
import { addToCart } from "../utils/cartSlice";

const Product = () => {
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState("");

  const dispatcher = useDispatch();

  const handleImageClick = (image) => {
    setMainImage(image);
  };

  const { productId } = useParams();
  const productAssets = products.filter((product) => product._id === productId);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size before adding to cart.");
      return;
    }

    const cartItem = {
      productId: productId,
      size: selectedSize,
      quantity: quantity,
    };

    console.log("Cart Item:", cartItem);
    dispatcher(addToCart(cartItem));
  };

  return (
    <>
      <div>
        <div className="border border-t border-gray-200"></div>
        {/* Product Details Section */}
        <div className="flex flex-row">
          {/* Product Small Images */}
          <div className="flex flex-col gap-4 my-10">
            {productAssets[0]?.image.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Product Small ${index + 1}`}
                className="w-[100px] h-[120px] cursor-pointer object-cover"
                onClick={() => {
                  handleImageClick(image);
                }}
              />
            ))}
          </div>
          {/* Product Main Image */}
          <div className="flex justify-center my-10 ml-3">
            <img
              src={mainImage || productAssets[0]?.image[0]}
              alt="Product Main"
              className="w-[530px] h-[530px] object-cover"
            />
          </div>
          {/* Product Info Section */}
          <div className="w-[40%] ml-10 my-10">
            <h2 className="text-3xl font-semibold mb-4">
              {productAssets[0]?.name}
            </h2>
            <div className="flex flex-row mb-8 items-center">
              <img
                src={assets.star_icon}
                alt="Star Icon"
                className="w-4 h-4 mr-1"
              />
              <img
                src={assets.star_icon}
                alt="Star Icon"
                className="w-4 h-4 mr-1"
              />
              <img
                src={assets.star_icon}
                alt="Star Icon"
                className="w-4 h-4 mr-1"
              />
              <img
                src={assets.star_icon}
                alt="Star Icon"
                className="w-4 h-4 mr-1"
              />
              <img
                src={assets.star_dull_icon}
                alt="Star Dull Icon"
                className="w-4 h-4 mr-1"
              />
              <p className="w-3.5 pl-2">(122)</p>
            </div>
            <p className="text-gray-700 mb-6 text-3xl font-bold">
              ${productAssets[0]?.price.toFixed(0)}
            </p>
            <p className="text-gray-600 mb-6">
              {productAssets[0]?.description}
            </p>
            <p className="mb-4">Select Size</p>
            <div>
              {productAssets[0]?.sizes.map((size, index) => (
                <button
                  key={index}
                  className={`border px-4 py-2 mr-3 mb-3 hover:border-black cursor-pointer ${
                    selectedSize === size ? "border-red-500" : "border-gray-400"
                  }`}
                  onClick={() => handleSizeClick(size)}
                >
                  {size}
                </button>
              ))}
            </div>

            {/* Quantity Dropdown */}
            <div className="mt-6">
              <p className="mb-4">Select Quantity</p>
              <select
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="border border-gray-400 px-4 py-2 cursor-pointer hover:border-black"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>

            <button
              className="bg-black text-white px-6 py-3 mt-6 hover:bg-gray-800 active:bg-gray-500 w-[200px] cursor-pointer mb-10"
              onClick={() => {
                handleAddToCart();
              }}
            >
              Add to Cart
            </button>
            <div className="border border-t border-gray-200"></div>
            <div className="mt-6 text-gray-600 space-y-2 text-sm">
              <p>100% Original product</p>
              <p>Cash on delivery is available on this product.</p>
              <p>Easy return and exchange policy within 7 days.</p>
            </div>
          </div>
        </div>

        {/* Description and Reviews Section */}
        <div className="my-10">
          <div className="inline-block border border-gray-200 px-4 py-2 font-bold">
            Description
          </div>
          <div className="inline-block border border-gray-200 px-4 py-2">
            Reviews (122)
          </div>
          <div className="border border-gray-200 px-6 py-5 text-sm text-gray-500">
            <p>
              An e-commerce website is an online platform that facilitates the
              buying and selling of products or services over the internet. It
              serves as a virtual marketplace where businesses and individuals
              can showcase their products, interact with customers, and conduct
              transactions without the need for a physical presence. E-commerce
              websites have gained immense popularity due to their convenience,
              accessibility, and the global reach they offer.
            </p>
            <br />
            <p>
              E-commerce websites typically display products or services along
              with detailed descriptions, images, prices, and any available
              variations (e.g., sizes, colors). Each product usually has its own
              dedicated page with relevant information.
            </p>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="my-10">
          <RelatedProducts
            category={productAssets[0]?.category}
            subCategory={productAssets[0]?.subCategory}
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Product;
