// CartPage.js

import React, { useEffect, useRef, useState } from 'react';
import './style.css';
import {useSelector,useDispatch} from 'react-redux';
import { getCartData } from '../../Redux/cartReducer/action';
import Shopping from '../Shopping';
import { Box, Button, Heading } from '@chakra-ui/react';
import Crousel from '../../Components/Crousel';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {data} = useSelector((store)=>{
    return store.cartReducer
  });
  // const inputFile = useRef(null);
  // const openFile = ()=>{
  //   inputFile.current.click();
  // }
  // console.log(data.cart);

  let length = data.cart?.length;
  let totalCost=data.cart?.map((ele)=>(ele.price)).reduce((acc,i)=>acc+i,0);

  
  useEffect(()=>{
    dispatch(getCartData())
  },[])
  return (
    <>
    {/* <div>
      <input type="file" id="file" ref={inputFile} style={{display:'none'}} />
      <button onClick={()=>openFile()} style={{color:'black'}}>OPen file</button>
    </div> */}

    <div className="cart-page">

        <Box marginBottom={"30px"}>
          <Crousel/>
        </Box>
      <Heading textAlign={"left"}>Shopping Cart <span style={{color:'red'}}>{` (${length} Items)`}</span> </Heading>
      {
        data.cart&&data.cart.map((ele)=>{
          return(
            <Shopping/>
            )
          })
        }
    </div>
    <Heading textAlign={'right'} mr={'10%'} size={'lg'}>Total Price = {totalCost}</Heading>
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
            onClick={()=>{
              navigate('/checkout')
              localStorage.setItem('total',totalCost);
            }}
          >
            Proceed to pay
          </Button>
        </Box>
  </>
  );
};


export default Cart;
