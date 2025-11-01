import React, { useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSellers = () => {
  const [bestSellerProducts, setBestSellerProducts] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter(
      (product) => product.bestseller === true
    );
    setBestSellerProducts(bestProduct);
  }, []);

  if (bestSellerProducts.length === 0) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="my-10">
        {/* Title Section */}
        <div className="text-center text-3xl py-5">
          <Title heading1="BEST" heading2="SELLERS" />
          <p className="text-lg text-gray-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the
          </p>
        </div>

        {/* Products Grid */}
        <div className="flex flex-row flex-wrap gap-4 mt-3">
          {bestSellerProducts.map((product) => {
            return <ProductItem key={product._id} product={product} />;
          })}
        </div>
      </div>
    );
  }
};

export default BestSellers;
