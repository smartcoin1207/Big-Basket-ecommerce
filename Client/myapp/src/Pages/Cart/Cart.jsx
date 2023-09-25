// import { Box } from "@chakra-ui/react";
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";


// const Cart = ()=>{
//     const params = useParams();
//     console.log(params.id);
//     const [data,setData] = useState([]);
//     const fetchData = ()=>{
//         return(
//             axios.get(`http://localhost:4000/product/${params.id}`)
//             .then((data)=>setData(data.data)).catch(err=>console.log(err))
//         )
//     }
// useEffect(()=>{
//     fetchData();
// },[]);
//     console.log('data',data);
//     return(
//         <Box>
//             Cart
//             {/* {
//                 data&&data.map((ele)=>{
//                     return(
//                         <Box>

//                         </Box>
//                     )
//                 })
//             } */}
//         </Box>
//     )
// }

// export default Cart;



// CartPage.js

import React, { useState } from 'react';
import CartItem from './CartItem';
import './style.css';
// import CartItem from './CartItem'; // Create a CartItem component

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 19.99, quantity: 2 },
    { id: 2, name: 'Product 2', price: 24.99, quantity: 1 },
    // Add more items as needed
  ]);

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="cart-summary">
        <p>Total: $ {calculateTotal(cartItems)}</p>
        <button>Checkout</button>
      </div>
    </div>
  );
};

const calculateTotal = (cartItems) => {
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
};

export default Cart;
