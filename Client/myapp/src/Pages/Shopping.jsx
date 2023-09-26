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
} from "@chakra-ui/react";
import Crousel from "../Components/Crousel";
import { Link } from "react-router-dom";

const Shopping = ({price,offer,image,title1,title2,title3,quantity}) => {
  return (
    <>
      
              <Tr border={'2px solid black'} mb={'10px'}>
                <Td><Image h={'25%'} w={'25%'} src={image}/></Td>
                <Td> {`${title1} || ${title2} `} </Td>
                <Td>{price}</Td>
                <Td>{quantity?quantity:1}</Td>
                <Td>{quantity?quantity*price:price}</Td>
              </Tr>      
            
    </>
  );
};

export default Shopping;