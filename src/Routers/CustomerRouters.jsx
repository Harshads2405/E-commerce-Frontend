<<<<<<< HEAD
import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../customer/pages/HomePage/HomePage";
import Cart from "../customer/components/Cart/Cart";
import Navigation from "../customer/components/Navigation/Navigation";
import Footer from "../customer/components/Footer/Footer";
import Product from "../customer/components/Product/Product";
import ProductDetails from "../customer/components/ProductDetails/ProductDetails";
import Order from "../customer/components/Order/Order";
import OrderDetails from "../customer/components/Order/OrderDetails";
import Checkout from "../customer/components/Checkout/Checkout";
import PaymentSuccess from "../customer/components/Payment/PaymentSuccess";
=======
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
>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e

const CustomerRouters = () => {
  return (
    <div>
<<<<<<< HEAD
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/login" element={<HomePage />}></Route>
        <Route path="/register" element={<HomePage />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route
          path="/:levelOne/:levelTwo/:levelThree"
          element={<Product />}
        ></Route>
        <Route path="/product/:productId" element={<ProductDetails />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/account/order" element={<Order />}></Route>
        <Route
          path="/account/order/:orderId"
          element={<OrderDetails />}
        ></Route>
        <Route path="/payment/:orderId" element={<PaymentSuccess />}></Route>
      </Routes>
      <div>
        <Footer />
      </div>
=======
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
>>>>>>> 0d76d507592fbaea1b7e9ae3d05a395549579c7e
    </div>
  );
};

export default CustomerRouters;
