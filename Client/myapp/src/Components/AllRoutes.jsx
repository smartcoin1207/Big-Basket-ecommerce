import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Cart from "../Pages/Cart/Cart";
import Checkout from "../Pages/Checkoutpage";
import Shopping from "../Pages/Shopping";
import MensProductsCard from "../Pages/SingleProduct";
import Dashboard from "../Pages/AdminPanel/Dashboard/Dashboard";
import LoginForm from "../Pages/AdminPanel/LoginSignUp/Login";
import SignUp from "../Pages/AdminPanel/LoginSignUp/SignUp";
import Coniform from "../Pages/Coniform";


const AllRoutes  =()=>{
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/cart" element={<Cart/>}></Route>
                <Route path="/product/:id" element={<MensProductsCard/>}></Route>
                <Route path="/shopping" element={<Shopping/>}> </Route>
                <Route path="/checkout" element={<Checkout/>}></Route>
                <Route path="/dashboard" element={<Dashboard/>}></Route>
                <Route path="/admin/signup" element={<SignUp/>}></Route>
                <Route path="/admin/login" element={<LoginForm/>}></Route>
                <Route path="/confirm" element={<Coniform/>}></Route>
                
            </Routes>
        </div>
    )
}
export default AllRoutes;

