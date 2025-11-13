import React, { useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Login = ({ setIsAdmin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = async (event) => {
    try {
      event.preventDefault();
      // hitting the backend for admin login
      const response = await axios.post(
        backendUrl + "/api/user/admin/login",
        {
          email: email,
          password: password,
        },
        {
          withCredentials: true,
        }
      );

      if (response.data.success === "Invalid admin credentials.") {
        toast.error(response.data.message);
      } else {
        setIsAdmin(response.data.token);
        toast.success("Admin logged in successfully!");
      }
    } catch (error) {
      toast.error("Invalid admin credentials.");
      console.error("Error during admin login:", error);
    }
  };

  return (
    <div>
      <form
        className="w-[400px] h-[300px] mx-auto my-80 flex flex-col items-center shadow-lg bg-gray-100"
        onSubmit={handleFormSubmit}
      >
        {/* Title Section */}
        <div className="text-3xl text-center my-5">
          <h1>Admin Panel</h1>
        </div>

        {/* Form Section */}
        <div className="flex flex-col gap-4 w-[80%] mb-20">
          <input
            type="email"
            placeholder="Email"
            className="border border-black px-3 py-2 mb-1"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-black px-3 py-2 mb-1"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            required
          />

          <button className="w-full bg-black text-white px-3 py-2 cursor-pointer hover:bg-gray-800 mx-auto">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
