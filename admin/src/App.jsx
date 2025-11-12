import React from "react";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <>
      <NavBar />
      <hr className="mt-3 text-gray-200" />
      <div className="flex flex-row w-full">
        <Sidebar />
      </div>
    </>
  );
};

export default App;
