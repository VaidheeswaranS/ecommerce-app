import React, { useState } from "react";
import Title from "../components/Title";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { assets, products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";

const PlaceOrder = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("cashOnDelivery");

  const handlePayment = () => {
    if (paymentMethod === "stripe" || paymentMethod === "razorpay") {
      toast.error(
        "Payment gateway not supported. Please use Cash on Delivery."
      );
    } else if (paymentMethod === "cashOnDelivery") {
      navigate("/orders");
    }
  };

  if (cartItems.length === 0) {
    return (
      <>
        <div className="border border-t border-gray-200"></div>
        {/* Title Section */}
        <div className="text-2xl my-10">
          <Title heading1="YOUR" heading2="CART" />
        </div>
        {/* Cart Items Section */}
        <div className="text-center text-lg text-gray-500">
          Your cart is empty. Please add the items from
          <Link to="/collection">
            <span className="text-blue-500">here</span>
          </Link>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="border border-t border-gray-200"></div>
        <div className="flex flex-row gap-10 justify-between mx-auto w-[1200px]">
          {/* Left Section */}
          <div className="w-[600px] h-[400px] flex flex-col my-20 px-7">
            {/* Title Section */}
            <div className="text-2xl mb-7">
              <Title heading1="DELIVERY" heading2="INFORMATION" />
            </div>
            {/* Form Section */}
            <div className="flex flex-row gap-3 my-2">
              <input
                type="text"
                placeholder="First Name"
                className="border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none w-1/2 rounded-md"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none w-1/2 rounded-md"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-300 px-4 py-2 focus:outline-none w-full rounded-md my-2"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Street"
                className="border border-gray-300 px-4 py-2 focus:outline-none w-full rounded-md my-2"
              />
            </div>
            <div className="flex flex-row gap-3 my-2">
              <input
                type="text"
                placeholder="City"
                className="border border-gray-300 px-4 py-2 focus:outline-none w-1/2 rounded-md"
              />
              <input
                type="text"
                placeholder="State"
                className="border border-gray-300 px-4 py-2 focus:outline-none w-1/2 rounded-md"
              />
            </div>
            <div className="flex flex-row gap-3 my-2">
              <input
                type="text"
                placeholder="Zipcode"
                className="border border-gray-300 px-4 py-2 focus:outline-none w-1/2 rounded-md"
              />
              <input
                type="text"
                placeholder="Country"
                className="border border-gray-300 px-4 py-2 focus:outline-none w-1/2 rounded-md"
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Phone"
                className="border border-gray-300 px-4 py-2 focus:outline-none w-full rounded-md my-2"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="w-[800px] h-[400px] flex flex-col my-20 px-7 justify-center">
            {/* Title Section */}
            <div className="text-2xl mb-7">
              <Title heading1="CART" heading2="TOTALS" />
            </div>

            {/* payment Section */}
            {/* Calculate Total Section */}
            <div className="mb-10">
              <p className="font-bold text-xl">
                Total Price: $
                {cartItems.reduce((total, item) => {
                  const product = products.find(
                    (prod) => prod._id === item.productId
                  );
                  return total + product.price * item.quantity;
                }, 0)}
              </p>
              <p className="text-sm text-gray-600">
                want to remove some items?{" "}
                <Link to="/cart">
                  {" "}
                  <span className="text-blue-500 cursor-pointer">
                    Click here
                  </span>
                </Link>
              </p>
            </div>

            {/* Payment Method Section */}
            <div className="flex flex-row gap-3 my-3">
              <button
                className={`border border-gray-300 px-2 py-2 focus:outline-none focus:border-green-500 focus:bg-green-200 w-1/2 rounded-md hover:bg-gray-100 duration-300 cursor-pointer ${
                  paymentMethod === "stripe" ? "bg-green-200" : ""
                }`}
                onClick={() => {
                  setPaymentMethod("stripe");
                }}
              >
                <img
                  src={assets.stripe_logo}
                  className="object-cover"
                  alt="Stripe"
                />
              </button>
              <button
                className={`border border-gray-300 px-2 py-2 focus:outline-none focus:border-green-500 focus:bg-green-200 w-1/2 rounded-md hover:bg-gray-100 duration-300 cursor-pointer ${
                  paymentMethod === "razorpay" ? "bg-green-200" : ""
                }`}
                onClick={() => {
                  setPaymentMethod("razorpay");
                }}
              >
                <img
                  src={assets.razorpay_logo}
                  alt="Razorpay"
                  className="object-cover"
                />
              </button>
              <button
                className={`border border-gray-300 px-4 py-2 focus:outline-none focus:border-green-500 focus:bg-green-200 w-1/2 rounded-md hover:bg-gray-100 duration-300 text-gray-600 cursor-pointer ${
                  paymentMethod === "cashOnDelivery" ? "bg-green-200" : ""
                }`}
                onClick={() => {
                  setPaymentMethod("cashOnDelivery");
                }}
              >
                CASH ON DELIVERY
              </button>
            </div>

            {/* Place Order Button */}
            <button
              className="bg-black text-white px-4 py-2 hover:bg-gray-800 duration-300 cursor-pointer w-1/2 rounded-md mt-3"
              onClick={handlePayment}
            >
              Place Order
            </button>
          </div>
        </div>
      </>
    );
  }
};

export default PlaceOrder;
