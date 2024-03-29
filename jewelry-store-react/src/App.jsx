import "./App.css";
import React from "react";
import Header from "./components/header/header";
import Main from "./components/main/main";
import Products from "./components/products/products";
import ProductDetails from "./components/products/ProductDetails";
import Footer from "./components/footer/footer";
import Login from "./components/login/login";
import Signup from "./components/singup/signup";
import AddProduct from "./components/add-product/add-product";
import Cart from "./components/cart/cart";
import Checkout from "./components/checkout/checkout";
import Order from "./components/order/order";


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route index element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Main />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productID" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order" element={<Order />} />

          
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
