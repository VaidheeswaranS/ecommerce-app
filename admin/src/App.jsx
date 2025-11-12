import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";
import Login from "./components/Login";
import { ToastContainer } from "react-toastify";

export const backendUrl = import.meta.env.VITE_BACKEND_URL;

const App = () => {
  const [isAdmin, setIsAdmin] = useState(
    localStorage.getItem("adminToken") || ""
  );

  useEffect(() => {
    localStorage.setItem("adminToken", isAdmin);
  }, [isAdmin]);

  return (
    <>
      <ToastContainer />
      {isAdmin === "" ? (
        <Login setIsAdmin={setIsAdmin} />
      ) : (
        <>
          <NavBar setIsAdmin={setIsAdmin} />
          <hr className="mt-3 text-gray-200" />
          <div className="flex flex-row w-full">
            <Sidebar />
            <div className="w-[70%] mx-auto">
              <Routes>
                <Route path="/" element={<Add setIsAdmin={setIsAdmin} />} />
                <Route path="/add" element={<Add setIsAdmin={setIsAdmin} />} />
                <Route
                  path="/list"
                  element={<List setIsAdmin={setIsAdmin} />}
                />
                <Route
                  path="/orders"
                  element={<Orders setIsAdmin={setIsAdmin} />}
                />
              </Routes>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default App;
