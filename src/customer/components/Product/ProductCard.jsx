import { useNavigate } from "react-router-dom";
import "./ProductCard.css";
<<<<<<< HEAD

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="productCard w-[15rem] m-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer overflow-hidden"
    >
      {/* Product Image */}
      <div className="h-[20rem]">
        <img
          className="h-full w-full object-cover"
          src={product.imageUrl}
=======
const ProductCard = ({ product }) => {
  const navigate=useNavigate();
  return (
    <div onClick={()=>navigate(`/product/${5}`)} className="productCard w-[15rem] m-3 transition-all cursor-pointer">
      <div className="h-[20rem]">
        <img
          className="h-full w-full object-cover object-left-top"
          src={product.image}
>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e
          alt={product.title}
        />
      </div>

<<<<<<< HEAD
      {/* Product Info Section */}
      <div className="textPart p-3 space-y-2">
        {/* Brand Name */}
        <p className="text-sm font-semibold text-gray-500">{product.brand}</p>

        {/* Product Title */}
        <h3 className="text-base font-medium line-clamp-2">{product.title}</h3>

        {/* Price Section */}
        <div className="flex items-center space-x-2">
          <p className="text-lg font-bold">₹{product.discountedPrice}</p>
          <p className="text-sm line-through text-gray-400">₹{product.price}</p>
          <p className="text-sm text-green-600 font-semibold">
            {product.discountPersent}% Off
          </p>
        </div>
=======
      <div className="textPart bg-white p-3"></div>
      <p className="font-bold opacity-60">{product.brand}</p>
      <p>{product.title}</p>

      <div className="flex item-center space-x-2">
        <p className="font-semibold">{product.selling_price}</p>
        <p className="line-through  opacity-50">{product.price}</p>
        <p className="text-green-600 font-semibold">{product.disscount}</p>
>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e
      </div>
    </div>
  );
};

export default ProductCard;
