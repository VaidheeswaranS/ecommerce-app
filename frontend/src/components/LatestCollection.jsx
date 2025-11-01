import React, { useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 12));
  }, []);

  if (latestProducts.length === 0) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="my-10">
        {/* Title Section */}
        <div className="text-center text-3xl py-5">
          <Title heading1="LATEST" heading2="COLLECTIONS" />
          <p className="text-lg text-gray-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the
          </p>
        </div>

        {/* Products Grid */}
        <div className="flex flex-row flex-wrap gap-4 mt-3">
          {latestProducts.map((product) => {
            return <ProductItem key={product._id} product={product} />;
          })}
        </div>
      </div>
    );
  }
};

export default LatestCollection;
