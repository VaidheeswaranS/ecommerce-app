import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Title from "../components/Title";
import { products } from "../assets/frontend_assets/assets";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [typeFilter, setTypeFilter] = useState([]);

  const toggleCategoryFilter = (event) => {
    if (categoryFilter.includes(event.target.value)) {
      setCategoryFilter(
        categoryFilter.filter((item) => item !== event.target.value)
      );
    } else {
      setCategoryFilter([...categoryFilter, event.target.value]);
    }
  };
  const toggleTypeFilter = (event) => {
    if (typeFilter.includes(event.target.value)) {
      setTypeFilter(typeFilter.filter((item) => item !== event.target.value));
    } else {
      setTypeFilter([...typeFilter, event.target.value]);
    }
  };

  const filterProducts = () => {
    let updatedProducts = products;

    if (categoryFilter.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        categoryFilter.includes(product.category)
      );
    }

    if (typeFilter.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        typeFilter.includes(product.subCategory)
      );
    }

    setFilteredProducts(updatedProducts);
  };

  useEffect(() => {
    filterProducts();
  }, [categoryFilter, typeFilter]);

  return (
    <div>
      <div className="border border-t border-gray-200"></div>
      <div className="flex flex-row gap-6">
        {/* Left Side Filters Section */}
        <div className="flex flex-col my-10 w-[15%]">
          <p className="text-xl mb-8">FILTERS</p>
          {/* Categories Filter */}
          <div className="border border-gray-200 pl-5 py-3 mb-5">
            <p className="text-sm font-medium mb-3">CATEGORIES</p>
            <div className="flex flex-col text-gray-700">
              <p className="mb-1">
                <input
                  type="checkbox"
                  className="mr-2"
                  value={"Men"}
                  onChange={toggleCategoryFilter}
                />
                Men
              </p>
              <p className="mb-1">
                <input
                  type="checkbox"
                  className="mr-2"
                  value={"Women"}
                  onChange={toggleCategoryFilter}
                />
                Women
              </p>
              <p className="mb-1">
                <input
                  type="checkbox"
                  className="mr-2"
                  value={"Kids"}
                  onChange={toggleCategoryFilter}
                />
                Kids
              </p>
            </div>
          </div>
          {/* Type Filter */}
          <div className="border border-gray-200 pl-5 py-3 mb-2">
            <p className="text-sm font-medium mb-3">TYPE</p>
            <div className="flex flex-col text-gray-700">
              <p className="mb-1">
                <input
                  type="checkbox"
                  className="mr-2"
                  value={"Topwear"}
                  onChange={toggleTypeFilter}
                />
                Topwear
              </p>
              <p className="mb-1">
                <input
                  type="checkbox"
                  className="mr-2"
                  value={"Bottomwear"}
                  onChange={toggleTypeFilter}
                />
                Bottomwear
              </p>
              <p className="mb-1">
                <input
                  type="checkbox"
                  className="mr-2"
                  value={"Winterwear"}
                  onChange={toggleTypeFilter}
                />
                Winterwear
              </p>
            </div>
          </div>
        </div>

        {/* Right Side All Collections Section */}
        <div className="flex-1 ml-12 my-10">
          <div className="flex flex-row justify-between mb-6">
            <div className="text-2xl">
              <Title heading1="ALL" heading2="COLLECTIONS" />
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
            {filteredProducts.map((product) => {
              return <ProductItem key={product._id} product={product} />;
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Collection;
