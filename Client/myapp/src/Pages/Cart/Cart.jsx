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

import React, { useEffect, useState } from 'react';
import './style.css';
import {useSelector,useDispatch} from 'react-redux';
import { getCartData } from '../../Redux/cartReducer/action';
import Shopping from '../Shopping';
import { Box, Button, Heading } from '@chakra-ui/react';
import Crousel from '../../Components/Crousel';

const Cart = () => {
  
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 19.99, quantity: 2 },
    { id: 2, name: 'Product 2', price: 24.99, quantity: 1 },
  ]);
const dispatch = useDispatch();
  const {data} = useSelector((store)=>{
    return store.cartReducer
  });
useEffect(()=>{
 dispatch(getCartData())
},[])
  return (
    <>
    <div className="cart-page">

        <Box marginBottom={"30px"}>
          <Crousel/>
        </Box>
    <Heading textAlign={"left"}>Shooping Cart</Heading>
      {
        data.cart&&data.cart.map((ele)=>{
          return(
            <Shopping/>
            )
          })
        }
    </div>
    <Box
          alignItem={"right"}
          justifyContent={"right"}
          width={"40%"}
          margin={"auto"}
          bgColor={"green"}
          borderRadius={"20px"}
          marginTop={"30px"}
        >
          <Button
            padding={"20px"}
            bgColor={"green"}
            width={"100%"}
            borderRadius={"20px"}
          >
            Proceed to pay
          </Button>
        </Box>
  </>
  );
};

const calculateTotal = (cartItems) => {
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
};

export default Cart;
