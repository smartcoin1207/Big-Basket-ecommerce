import React from "react";
import {Routes,Route} from 'react-router-dom';
import Home from "../Pages/Home";
import Cart from '../Pages/Cart/Cart';
import Checkout from "../Pages/Checkoutpage";
import Shopping from "../Pages/Shopping";
const AllRoutes  =()=>{
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/cart" element={<Cart/>}></Route>
                <Route path="/shopping" element={<Shopping/>}> </Route>
                <Route path="/checkout" element={<Checkout/>}></Route>
            </Routes>
        </div>
    )
}

export default AllRoutes;