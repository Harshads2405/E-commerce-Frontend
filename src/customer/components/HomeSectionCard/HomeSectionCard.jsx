<<<<<<< HEAD
import React from "react";

const HomeSectionCard = ({ product }) => {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white shadow-gray-200 my-5 rounded-lg shadow-lg  overflow-hidden w-[15rem] p-4 border border-gray-200">
      <div className="h-[13rem] w-[11rem]">
        <img
          className="object-cover object-top w-full h-full rounded-lg shadow-lg shadow-gray-400"
          src={product.imageUrl}
          alt=""
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-900">{product.brand}</h3>
=======
const HomeSectionCard = ({ product }) => {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] m-5 hover:shadow-x1 transition-shadow duration-300 ease-in-out">
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full shadow-lg"
          src={product.image}
          alt=""
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">{product.brand}</h3>
>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e
        <p className="mt-2 text-sm text-gray-500">{product.title}</p>
      </div>
    </div>
  );
};
<<<<<<< HEAD

=======
>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e
export default HomeSectionCard;
