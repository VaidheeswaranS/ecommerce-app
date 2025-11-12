import React from "react";
import { assets } from "../assets/admin_assets/assets";
import { Link } from "react-router-dom";

const NavBar = ({ setIsAdmin }) => {
  const handleLogout = () => {
    // removing the token from the localstorage
    setIsAdmin("");
    localStorage.removeItem("adminToken");
  };

  return (
    <>
      <div className="flex flex-row w-full justify-between px-20 py-3 items-center">
        <Link to="/">
          <img src={assets.logo} alt="Logo" className="w-48" />
        </Link>
        <button
          className="bg-gray-600 rounded-full px-7 py-2 text-white text-sm cursor-pointer hover:bg-gray-800"
          onClick={() => handleLogout()}
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default NavBar;
