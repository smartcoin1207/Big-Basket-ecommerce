// CartPage.js
import React, { useEffect, useRef, useState } from 'react';
import './style.css';
import {useSelector,useDispatch} from 'react-redux';
import { getCartData } from '../../Redux/cartReducer/action';
import Shopping from '../Shopping';
import { Box, Button, Heading, Table, TableContainer, Tbody, Th, Thead, Tr } from '@chakra-ui/react';
import Crousel from '../../Components/Crousel';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {data,isLoading} = useSelector((store)=>{
    return store.cartReducer
  });
  let length = data.cart?.length;
  let totalCost=data.cart?.map((ele)=>(ele.price*(ele.quantity?ele.quantity:1))).reduce((acc,i)=>acc+i,0);
  console.log(data);
  useEffect(()=>{
    dispatch(getCartData())
  },[])
  return ( isLoading ? <Heading alignItems={'center'} textAlign={'center'}>Loading...</Heading>:
    <>
    <Box marginBottom={"30px"}>
      <Crousel/>
    </Box>
    <div className="cart-page">
      <Heading textAlign={"left"}>Shopping Cart <span style={{color:'red'}}>{` (${length} Items)`}</span> </Heading>
      <Box width={"95%"} margin="auto">
        <TableContainer>
          <Table
            bgColor={'rgb(250, 247, 247)'}
            w={'100%'}
            padding={"20px"}
            border={"1px solid grey"}
            height={"auto"}
            marginTop={"20px"} alignItems={'center'} textAlign={'center'}
          >
            <Thead  mb={'20px'} border={'2px solid black'}  alignItems={'center'} textAlign={'center'}>
              <Tr alignItems={'center'} textAlign={'center'}>
                <Th p={'9'} fontSize={'l'} fontWeight={'extrabold'}>Image</Th>
                <Th fontSize={'l'} fontWeight={'extrabold'}>Product</Th>
                <Th fontSize={'l'} fontWeight={'extrabold'}>Basic Price</Th>
                <Th fontSize={'l'} fontWeight={'extrabold'}> Quanity</Th>
                <Th fontSize={'l'} fontWeight={'extrabold'}>Total Price</Th>
                <Th fontSize={'l'} fontWeight={'extrabold'}>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>  
              {
                data.cart?.map((ele)=>{
                  return(
                    <Shopping key={ele._id} {...ele} />
                    )
                  })
                }
            </Tbody>      
          </Table>
        </TableContainer>
      </Box>
    </div>
    <Heading textAlign={'right'} mr={'10%'} fontStyle={'italic'} size={'lg'}>Total Price = ₹{totalCost}</Heading>
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
            bgColor={"green.500"}
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
