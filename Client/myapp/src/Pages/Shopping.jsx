import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Heading,
  Button,
  Image,
  useToast,
} from "@chakra-ui/react";
import { DeleteIcon } from '@chakra-ui/icons';
import { useDispatch } from "react-redux";
import { deleteCartData } from "../Redux/cartReducer/action";

const Shopping = ({_id,price,offer,image,title1,title2,title3,quantity}) => {
  const dispatch = useDispatch();
  const toast = useToast();
  console.log(image);
  return (
    <>
              <Tr border={'2px solid black'} mb={'10px'}>
                <Td><Image h={'100%'} w={'100%'} src={image}/></Td>
                <Td> {`${title1} || ${title2} `} </Td>
                <Td>₹{price}</Td>
                <Td>{quantity?quantity:1}</Td>
                <Td>{quantity?quantity*price:price}</Td>
                <Td><Button onClick={()=>{
                  (dispatch(deleteCartData(_id)));
                  toast({
                    size: "500",
                    position: "top-center",
                    title: "Done.",
                    description: "Item removed from your cart.",
                    status: "success",
                    duration: 4000,
                    isClosable: true,
            });
                }} 
                  bgColor={'red'}><DeleteIcon/></Button></Td>
              </Tr>      
            
    </>
  );
};

export default Shopping;