import React from "react";
import { assets, products } from "../assets/frontend_assets/assets";
import Title from "../components/Title";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { removeFromCart } from "../utils/cartSlice";
import { toast } from "react-toastify";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatcher = useDispatch();
  const navigate = useNavigate();

  const handleDeleteItems = (index) => {
    // Updating the redux store by removing the item
    dispatcher(removeFromCart(cartItems[index]));
    toast.success("Product removed from cart");
  };

  if (cartItems.length === 0) {
    return (
      <>
        <div className="border border-t border-gray-200"></div>
        {/* Title Section */}
        <div className="text-2xl my-10">
          <Title heading1="YOUR" heading2="CART" />
        </div>
        {/* Cart Items Section */}
        <div className="text-center text-lg text-gray-500">
          Your cart is empty. Please add the items from{" "}
          <Link to="/collection">
            <span className="text-blue-500">here</span>
          </Link>
        </div>
        {/* Footer Section */}
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <div className="border border-t border-gray-200"></div>
        {/* Title Section */}
        <div className="text-2xl text-center my-10">
          <Title heading1="YOUR" heading2="CART" />
        </div>
        {/* Cart Items Section */}
        <div className="mx-auto w-[900px] flex flex-col gap-6">
          {cartItems.map((item, index) => {
            const product = products.find(
              (prod) => prod._id === item.productId
            );
            return (
              <div
                key={index}
                className="flex flex-row border border-gray-200 p-4"
              >
                {/* Product Image */}
                <Link to={`/product/${product._id}`}>
                  <img
                    src={product.image[0]}
                    alt={product.name}
                    className="w-[150px] h-[200px] object-cover"
                  />
                </Link>
                {/* Product Details */}
                <div className="ml-6 flex flex-col justify-between">
                  <div>
                    <p className="font-bold text-lg">{product.name}</p>
                    <p className="text-gray-600">Size: {item.size}</p>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                  <p className="font-semibold text-xl">
                    ${product.price * item.quantity}
                  </p>
                </div>
                <img
                  src={assets.bin_icon}
                  alt="delete"
                  className="w-6 h-6 ml-auto cursor-pointer"
                  onClick={() => {
                    handleDeleteItems(index);
                  }}
                />
              </div>
            );
          })}
          <div className="flex flex-row justify-end mt-6">
            <div>
              <p className="font-bold text-xl">
                Total Price: $
                {cartItems.reduce((total, item) => {
                  const product = products.find(
                    (prod) => prod._id === item.productId
                  );
                  return total + product.price * item.quantity;
                }, 0)}
              </p>
            </div>
          </div>
          <button
            className="bg-black text-white px-6 py-3 ml-auto mt-1 hover:bg-gray-800 duration-300 cursor-pointer"
            onClick={() => navigate("/place-order")}
          >
            Proceed to Checkout
          </button>
        </div>

        {/* Footer Section */}
        <Footer />
      </>
    );
  }
};

export default Cart;
