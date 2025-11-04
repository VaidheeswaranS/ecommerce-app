import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  const { _id, image, name, price } = product;
  const imageId = image[0];
  return (
    <Link to={`/product/${_id}`} className="flex flex-col gap-2 cursor-pointer">
      <div className="overflow-hidden">
        <img
          src={imageId}
          alt={name}
          className="w-[300px] h-[380px] object-cover mb-4 hover:scale-110 transition-ease-in-out duration-200"
        />
      </div>
      <p className="text-sm">{name}</p>
      <p className="text-sm font-bold">${price}</p>
    </Link>
  );
};

export default ProductItem;
