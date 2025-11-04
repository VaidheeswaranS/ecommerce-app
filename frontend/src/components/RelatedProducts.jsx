import React, { useEffect, useState } from "react";
import Title from "./Title";
import { products } from "../assets/frontend_assets/assets";
import ProductItem from "./ProductItem";

const RelatedProducts = ({ category, subCategory }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);

  const fetchRelatedProducts = () => {
    let productsCopy = products.slice();

    productsCopy = productsCopy.filter(
      (product) =>
        product.category === category && product.subCategory === subCategory
    );

    setRelatedProducts(productsCopy.slice(0, 4));
  };

  // useEffect will be called whenever the 'products' data changes
  useEffect(() => {
    fetchRelatedProducts();
  }, [products]);

  return (
    <>
      <div className="text-2xl text-center my-10">
        <Title heading1="RELATED" heading2="PRODUCTS" />
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
        {relatedProducts.map((product) => {
          return <ProductItem key={product._id} product={product} />;
        })}
      </div>
    </>
  );
};

export default RelatedProducts;
