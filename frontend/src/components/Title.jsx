import React from "react";

const Title = ({ heading1, heading2, description }) => {
  return (
    <div className="text-gray-500">
      <h1 className="mb-3">
        {heading1}
        <span className="text-black ml-2">{heading2}</span>
      </h1>
      <p className="text-lg">{description}</p>
    </div>
  );
};

export default Title;
