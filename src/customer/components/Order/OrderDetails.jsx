<<<<<<< HEAD
import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const OrderDetails = () => {
  return (
    <div className="m-10">
      {/* Address */}
      <div className="p-5 rounded-lg bg-white border border-gray-300">
        <h1 className="font-semibold pb-2 text-lg">Delivery Address</h1>
        <AddressCard />
      </div>

      {/* Order Tracker */}
      <div className="py-10">
        <OrderTracker activeStep={3} />
      </div>

      {/* Product Card */}
      {[1, 2, 3, 4, 5].map((item) => (
        <div className="flex mb-5 space-x-5 shadow-xl rounded-md p-5 border border-gray-300 items-center justify-between">
          {/* Product Info Section */}
          <div className="flex items-center">
            <img
              className="w-[8rem] h-[8rem] rounded-lg border border-gray-300 object-cover object-top shadow shadow-gray-300"
              src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg"
              alt=""
            />
            <div className="space-y-2 ml-5">
              <p className="font-semibold">Universal Outfit</p>
              <p className="space-x-5 text-sm">
                <span>Color : Black</span> <span>Size : M</span>
              </p>
              <p className="text-sm">Seller : Kalakar</p>
              <p className="text-sm">₹199</p>
            </div>
          </div>

          {/* Rate & Review Section */}
          <div>
            <Box>
              <div className="flex items-center">
                <StarBorderIcon sx={{ fontSize: "2rem" }} className="px-2" />
                <span>Rate & Review Product</span>
              </div>
            </Box>
          </div>
        </div>
      ))}
=======
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Box } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import AddressCard from "../AddressCard/AddressCard";
import OrderTraker from "./OrderTraker";

const OrderDetails = () => {
  // Array with 5 items to display 5 cards
  const products = [1, 2, 3, 4, 5];

  return (
    <div className="px-5 lg:px-20 pb-5">
      <div className="shadow rounded-lg p-5 mb-10">
        <h1 className="font-bold text-xl py-2">Delivery Address</h1>
        <AddressCard />
      </div>

      <div className="shadow rounded-lg p-5 mb-10">
        <OrderTraker activeStep={3} />
      </div>

      {/* Loop over products */}
      <div className="space-y-5">
        {products.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-lg shadow-xl p-5 border-0.8"
          >
            {/* Left Side: Product Details */}
            <div className="flex items-center space-x-5">
              <img
                className="w-[5rem] h-[5rem] object-cover object-top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGvd-ct4hL1K4oCCLSW8pkrh6rXry4fr9egw&s"
                alt="Product"
              />
              <div className="space-y-1">
                <p className="font-semibold">Men Slim Mid Rise Black Jeans</p>
                <p className="space-x-5 text-sm text-gray-500">
                  <span>Color : Blue</span>
                  <span>Size : M</span>
                </p>
                <p className="text-sm">Seller: linaria</p>
                <p className="font-bold">₹1099</p>
              </div>
            </div>

            {/* Right Side: Rate & Review */}
            <div>
              <Box sx={{ color: deepPurple[500] }}>
                <div className="flex items-center space-x-2 cursor-pointer">
                  <StarBorderIcon sx={{ fontSize: "2rem" }} />
                  <span className="font-semibold">Rate & Review Product</span>
                </div>
              </Box>
            </div>
          </div>
        ))}
      </div>
>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e
    </div>
  );
};

export default OrderDetails;
