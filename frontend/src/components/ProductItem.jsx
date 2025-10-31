import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  const { _id, image, name, price } = product;
  const imageId = image[0];
  return (
    <Link to={`/product/${_id}`} className="flex flex-col gap-2 cursor-pointer">
      <div>
        <img
          src={imageId}
          alt={name}
          className="w-full h-64 object-cover mb-4"
        />
      </div>
      <p className="text-sm">{name}</p>
      <p className="text-sm font-bold">${price}</p>
    </Link>
  );
};

export default ProductItem;
