import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="py-5 flex flex-row items-center justify-between font-medium">
      {/* Left Section */}
      <div>
        <Link to="/">
          <img src={assets.logo} alt="Logo" className="w-36" />
        </Link>
      </div>

      {/* Center Section */}
      <div className="flex flex-row items-center">
        <ul className="flex flex-row items-center text-sm text-gray-700">
          <Link to="/" className="px-3 cursor-pointer hover:underline">
            HOME
          </Link>
          <Link
            to="/collection"
            className="px-3 cursor-pointer hover:underline"
          >
            COLLECTION
          </Link>
          <Link to="/about" className="px-3 cursor-pointer hover:underline">
            ABOUT
          </Link>
          <Link to="/contact" className="px-3 cursor-pointer hover:underline">
            CONTACT
          </Link>
        </ul>
        {/* <button className="rounded-full text-xs border-gray-300 border px-4 py-2">
          Admin Panel
        </button> */}
      </div>

      {/* Right Section */}
      <div className="flex flex-row items-center gap-6">
        <img
          src={assets.search_icon}
          alt="Search"
          className="w-5 cursor-pointer"
        />
        <div className="relative group">
          <Link to="/login">
            <img
              src={assets.profile_icon}
              alt="User"
              className="w-5 cursor-pointer"
            />{" "}
          </Link>
          <div className="absolute group-hover:block hidden dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-4 bg-slate-100 text-gray-500">
              <p className="hover:text-black cursor-pointer">My Profile</p>
              <p className="hover:text-black cursor-pointer">Orders</p>
              <p className="hover:text-black cursor-pointer">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img
            src={assets.cart_icon}
            alt="Cart"
            className="w-5 cursor-pointer"
          />
          <p className="absolute -top-2 -right-2 text-sm bg-red-500 text-white rounded-full px-1.5 cursor-pointer">
            {cartItems.length}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
