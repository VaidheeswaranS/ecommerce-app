import React from "react";
import { useSelector } from "react-redux";
import { products } from "../assets/frontend_assets/assets";
import { Link } from "react-router-dom";

const Orders = () => {
  const cartItems = useSelector((store) => store.cart.items);

  console.log("Orders Cart Items:", cartItems);

  if (cartItems.length === 0) {
    return (
      <>
        <div className="border border-t border-gray-200"></div>
        {/* Title Section */}
        <div className="text-2xl text-center my-10">
          <h1 className="font-bold">YOUR ORDERS</h1>
        </div>
        {/* Orders Items Section */}
        <div className="text-center text-lg text-gray-500 my-10">
          You have not placed any orders yet.
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="border border-t border-gray-200"></div>
        {/* Title Section */}
        <div className="text-2xl text-center my-10">
          <h1 className="font-bold">YOUR ORDERS</h1>
        </div>
        {/* Orders Items Section */}
        <div className="mx-auto w-[1200px] flex flex-col gap-6">
          {cartItems.map((item, index) => {
            const product = products.find(
              (prod) => prod._id === item.productId
            );
            return (
              <div
                key={index}
                className="flex flex-row border border-gray-200 p-4 items-center justify-between"
              >
                {/* Product Image */}
                <div className="flex flex-row">
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
                      <p>
                        Name:{" "}
                        <span className="text-gray-600">{product.name}</span>
                      </p>
                      <p>
                        Size: <span className="text-gray-600">{item.size}</span>
                      </p>
                      <p className="text-gray-600">Quantity: {item.quantity}</p>
                      <p>
                        Date: <span className="text-gray-500"></span>
                      </p>
                      <p>
                        Payment: <span className="text-gray-500">COD</span>
                      </p>
                    </div>
                    <p className="font-semibold text-xl">
                      ${product.price * item.quantity}
                    </p>
                  </div>
                </div>

                {/* Order Status */}
                <div className="flex flex-row gap-3 items-center">
                  <p className="w-2.5 h-2.5 rounded-full bg-green-500"></p>
                  <p>Order Placed</p>
                </div>

                {/* Track Order section */}
                <div>
                  <button className="border border-gray-400 text-black px-4 py-2 cursor-pointer hover:bg-gray-100">
                    Track Order
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
};

export default Orders;
