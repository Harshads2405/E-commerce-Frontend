import { Route, Routes } from "react-router-dom";
import "./App.css";
import CustomerRouters from "./Routers/CustomerRouters";
import HomePage from "./customer/pages/HomePage/HomePage";
import Product from "./customer/components/Product/Product";
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/*" element={<CustomerRouters />}></Route>
      </Routes>

      <div>
        {/* <HomePage />
        <Product />
        <ProductCard />
        <ProductDetails />
        <Cart />
        <Checkout />
        <DeliveryAddressForm />
        <Order />
        <OrderDetails /> */}
      </div>
    </div>
  );
}

export default App;
