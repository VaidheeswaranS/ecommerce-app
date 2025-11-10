import React, { useState } from "react";
import Footer from "../components/Footer";

const Login = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Handle login or signup logic here
  };

  return (
    <div>
      <form
        className="w-[500px] h-[300px] mx-auto my-20 flex flex-col items-center"
        onSubmit={handleFormSubmit}
      >
        {/* Title Section */}
        <div className="text-3xl text-center my-5">
          <h1 className="prata-regular">{isLoginForm ? "Login" : "Sign Up"}</h1>
        </div>

        {/* Form Section */}
        <div className="flex flex-col gap-4 w-[80%] mb-20">
          {!isLoginForm && (
            <input
              type="text"
              placeholder="Name"
              className="border border-black px-3 py-2 mb-1"
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="border border-black px-3 py-2 mb-1"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-black px-3 py-2 mb-1"
            required
          />
          <div className="flex flex-row justify-between mb-2">
            <p className="text-sm text-black cursor-pointer">
              Forgot your password?
            </p>
            <p
              className="text-sm text-black cursor-pointer"
              onClick={() => setIsLoginForm(!isLoginForm)}
            >
              {isLoginForm ? "Create Account" : "Login Here"}
            </p>
          </div>

          <button className="w-[120px] bg-black text-white px-3 py-2 cursor-pointer hover:bg-gray-800 mx-auto">
            {isLoginForm ? "Sign In" : "Sign Up"}
          </button>
        </div>
      </form>
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Login;
