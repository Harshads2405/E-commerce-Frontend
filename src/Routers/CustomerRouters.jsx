import { Route, Routes } from "react-router-dom";
import Footer from "../customer/components/Footer/Footer";
import Navigation from "../customer/components/Navigation/Navigation";
import Cart from "./../customer/components/Cart/Cart";
import Checkout from "./../customer/components/Checkout/Checkout";
import Product from "./../customer/components/Product/Product";
import ProductDetails from "./../customer/components/ProductDetails/ProductDetails";
import HomePage from "./../customer/pages/HomePage/HomePage";
import Order from './../customer/components/Order/Order';
import OrderDetails from './../customer/components/Order/OrderDetails';
import ProductCard from "../customer/components/Product/ProductCard";
import DeliveryAddressForm from "../customer/components/Checkout/DeliveryAddressForm";

const CustomerRouters = () => {
  return (
    <div>
      <Navigation />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/delivery-address" element={<DeliveryAddressForm />} />
        <Route path="/account/order" element={<Order />} />
        <Route path="/account/order/:orderId" element={<OrderDetails />} />

        {/* If you want ProductCard to have its own route, add like this: */}
        <Route path="/product-card" element={<ProductCard />} />
      </Routes>
      
      <Footer />
    </div>
  );
};

export default CustomerRouters;
