import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Cart from "../Pages/Cart/Cart";
import Checkout from "../Pages/Checkoutpage";
import Shopping from "../Pages/Shopping";
import MensProductsCard from "../Pages/SingleProduct";
import SignUp from "../Pages/AdminPanel/LoginSignup/SignUp";
import LoginForm from "../Pages/AdminPanel/LoginSignup/Login";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/product/:id" element={<MensProductsCard />}></Route>
        <Route path="/shopping" element={<Shopping />}>
          {" "}
        </Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/admin/signup" element={<SignUp />}></Route>
        <Route path="/admin/login" element={<LoginForm />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
