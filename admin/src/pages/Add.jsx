import React, { useState } from "react";
import { assets } from "../assets/admin_assets/assets";
import { toast } from "react-toastify";
import axios from "axios";
import { backendUrl } from "../App";

const Add = () => {
  const [productImage1, setProductImage1] = useState(false);
  const [productImage2, setProductImage2] = useState(false);
  const [productImage3, setProductImage3] = useState(false);
  const [productImage4, setProductImage4] = useState(false);
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productSubCategory, setProductSubCategory] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productSizes, setProductSizes] = useState([]);
  const [isBestSeller, setIsBestSeller] = useState(false);

  const handleAddProduct = async (event) => {
    event.preventDefault();
    console.log("Product name: ", productName);
    console.log("Product description: ", productDescription);
    console.log("Product category: ", productCategory);
    console.log("Product subcategory: ", productSubCategory);
    console.log("Product price: ", productPrice);
    console.log("Product sizes: ", productSizes);
    console.log("Is Best Seller: ", isBestSeller);

    try {
      const formData = new FormData();

      productImage1 && formData.append("image1", productImage1);
      productImage2 && formData.append("image2", productImage2);
      productImage3 && formData.append("image3", productImage3);
      productImage4 && formData.append("image4", productImage4);
      formData.append("name", productName);
      formData.append("description", productDescription);
      formData.append("price", productPrice);
      formData.append("category", productCategory);
      formData.append("subCategory", productSubCategory);
      formData.append("sizes", JSON.stringify(productSizes));
      formData.append("bestSeller", isBestSeller);

      // calling the backend to add the product data to DB
      const response = await axios.post(
        backendUrl + "/api/product/add",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      console.log("Add Product Response: ", response.data);
      toast.success("Product added successfully!");

      // resetting the form fields
      setProductImage1(false);
      setProductImage2(false);
      setProductImage3(false);
      setProductImage4(false);
      setProductName("");
      setProductDescription("");
      setProductPrice("");
      setProductCategory("");
      setProductSubCategory("");
      setProductSizes([]);
      setIsBestSeller(false);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <form className="my-10 ml-10 text-gray-700" onSubmit={handleAddProduct}>
      <div className="flex flex-col gap-4 w-[80%]">
        {/* Image Upload Section */}
        <p>Upload Image</p>
        <div className="flex flex-row gap-4">
          <label htmlFor="image1" className="cursor-pointer">
            <img
              src={
                productImage1
                  ? URL.createObjectURL(productImage1)
                  : assets.upload_area
              }
              alt="Upload"
              className="w-[100px] h-[100px] object-cover"
            />
            <input
              type="file"
              onChange={(event) => setProductImage1(event.target.files[0])}
              id="image1"
              className="hidden"
            />
          </label>

          <label htmlFor="image2" className="cursor-pointer">
            <img
              src={
                productImage2
                  ? URL.createObjectURL(productImage2)
                  : assets.upload_area
              }
              alt="Upload"
              className="w-[100px] h-[100px] object-cover"
            />
            <input
              type="file"
              id="image2"
              onChange={(event) => setProductImage2(event.target.files[0])}
              className="hidden"
            />
          </label>

          <label htmlFor="image3" className="cursor-pointer">
            <img
              src={
                productImage3
                  ? URL.createObjectURL(productImage3)
                  : assets.upload_area
              }
              alt="Upload"
              className="w-[100px] h-[100px] object-cover"
            />
            <input
              type="file"
              id="image3"
              onChange={(event) => setProductImage3(event.target.files[0])}
              className="hidden"
            />
          </label>

          <label htmlFor="image4" className="cursor-pointer">
            <img
              src={
                productImage4
                  ? URL.createObjectURL(productImage4)
                  : assets.upload_area
              }
              alt="Upload"
              className="w-[100px] h-[100px] object-cover"
            />
            <input
              type="file"
              id="image4"
              onChange={(event) => setProductImage4(event.target.files[0])}
              className="hidden"
            />
          </label>
        </div>

        {/* Product Name Input */}
        <p>Product Name</p>
        <input
          type="text"
          placeholder="Name"
          value={productName}
          onChange={(event) => setProductName(event.target.value)}
          className="border border-gray-300 rounded-md p-2 w-[50%]"
          required
        />

        {/* Product Description Input */}
        <p>Product Description</p>
        <textarea
          className="border border-gray-300 rounded-md p-2 w-[50%]"
          placeholder="Description"
          value={productDescription}
          onChange={(event) => setProductDescription(event.target.value)}
          rows="3"
          required
        ></textarea>

        {/* Product Category, SubCategory and Price Input */}
        <div className="flex flex-row gap-4 w-[50%] justify-between items-center">
          {/* Category Input */}
          <div className="flex flex-col gap-2 items-start">
            <p>Product Category</p>
            <select
              className="border border-gray-300 rounded-md p-2 w-full"
              value={productCategory}
              onChange={(e) => setProductCategory(e.target.value)}
            >
              <option value="">Select Category</option>
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
            </select>
          </div>

          {/* SubCategory Input */}
          <div className="flex flex-col gap-2 items-start">
            <p>Product SubCategory</p>
            <select
              className="border border-gray-300 rounded-md p-2 w-full"
              value={productSubCategory}
              onChange={(e) => setProductSubCategory(e.target.value)}
            >
              <option value="">Select SubCategory</option>
              <option value="Topwear">Topwear</option>
              <option value="Bottomwear">Bottomwear</option>
              <option value="Winterwear">Winterwear</option>
            </select>
          </div>

          {/* Price Input */}
          <div className="flex flex-col gap-2 items-start">
            <p>Product Price</p>
            <input
              type="number"
              placeholder="0"
              value={productPrice}
              onChange={(event) => setProductPrice(event.target.value)}
              className="border border-gray-300 rounded-md p-2 w-[50%]"
              required
            />
          </div>
        </div>

        {/* Product Sizes Input */}
        <div className="flex flex-col items-start gap-2">
          <p>Product Sizes</p>
          <div className="flex flex-row gap-3 items-center">
            <p
              className={`rounded-md px-3 py-1 cursor-pointer ${
                productSizes.includes("S") ? "bg-pink-200" : "bg-gray-300"
              }`}
              onClick={() =>
                setProductSizes((prev) =>
                  prev.includes("S")
                    ? prev.filter((size) => size !== "S")
                    : [...prev, "S"]
                )
              }
            >
              S
            </p>
            <p
              className={`rounded-md px-3 py-1 cursor-pointer ${
                productSizes.includes("M") ? "bg-pink-200" : "bg-gray-300"
              }`}
              onClick={() =>
                setProductSizes((prev) =>
                  prev.includes("M")
                    ? prev.filter((size) => size !== "M")
                    : [...prev, "M"]
                )
              }
            >
              M
            </p>
            <p
              className={`rounded-md px-3 py-1 cursor-pointer ${
                productSizes.includes("L") ? "bg-pink-200" : "bg-gray-300"
              }`}
              onClick={() =>
                setProductSizes((prev) =>
                  prev.includes("L")
                    ? prev.filter((size) => size !== "L")
                    : [...prev, "L"]
                )
              }
            >
              L
            </p>
            <p
              className={`rounded-md px-3 py-1 cursor-pointer ${
                productSizes.includes("XL") ? "bg-pink-200" : "bg-gray-300"
              }`}
              onClick={() =>
                setProductSizes((prev) =>
                  prev.includes("XL")
                    ? prev.filter((size) => size !== "XL")
                    : [...prev, "XL"]
                )
              }
            >
              XL
            </p>
            <p
              className={`rounded-md px-3 py-1 cursor-pointer ${
                productSizes.includes("XXL") ? "bg-pink-200" : "bg-gray-300"
              }`}
              onClick={() =>
                setProductSizes((prev) =>
                  prev.includes("XXL")
                    ? prev.filter((size) => size !== "XXL")
                    : [...prev, "XXL"]
                )
              }
            >
              XXL
            </p>
          </div>
        </div>

        {/* Best Seller Checkbox */}
        <div className="flex flex-row items-center gap-2">
          <input
            type="checkbox"
            id="bestSeller"
            checked={isBestSeller}
            onChange={(e) => setIsBestSeller(e.target.checked)}
          />
          <label htmlFor="bestSeller">Add to Best Seller</label>
        </div>

        {/* Submit Button */}
        <button className="bg-black text-white text-lg px-7 py-2 w-[15%] rounded-md hover:bg-gray-800 cursor-pointer">
          ADD
        </button>
      </div>
    </form>
  );
};

export default Add;
