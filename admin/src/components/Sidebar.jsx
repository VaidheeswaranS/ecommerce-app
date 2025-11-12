import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/admin_assets/assets";

const Sidebar = () => {
  return (
    <div className="border-r-2 border-gray-300 h-screen w-[350px]">
      <div className="flex flex-col gap-5 my-10">
        <Link
          to="/add"
          className="flex flex-row items-center gap-3 px-5 border border-gray-300 border-r-0 rounded-l-lg py-2 ml-10 focus:bg-pink-100 focus:border-pink-500 outline-none"
        >
          <img src={assets.add_icon} alt="Add" className="w-5 cursor-pointer" />
          <p>Add Items</p>
        </Link>

        <Link
          to="/list"
          className="flex flex-row items-center gap-3 px-5 border border-gray-300 border-r-0 rounded-l-lg py-2 ml-10 focus:bg-pink-100 focus:border-pink-500 outline-none"
        >
          <img
            src={assets.order_icon}
            alt="List"
            className="w-5 cursor-pointer"
          />
          <p>List Items</p>
        </Link>

        <Link
          to="/orders"
          className="flex flex-row items-center gap-3 px-5 border border-gray-300 border-r-0 rounded-l-lg py-2 ml-10 focus:bg-pink-100 focus:border-pink-500 outline-none"
        >
          <img
            src={assets.order_icon}
            alt="Order"
            className="w-5 cursor-pointer"
          />
          <p>Orders</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
