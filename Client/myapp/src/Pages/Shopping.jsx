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
} from "@chakra-ui/react";
import Crousel from "../Components/Crousel";
import { Link } from "react-router-dom";

const Shopping = () => {
  return (
    <>
    <Box marginBottom={"30px"}>
        <Crousel/>
    </Box>
      <Box width={"90%"} margin="auto">
        <Heading textAlign={"left"}>Shooping Cart</Heading>

        <TableContainer>
          <Table
            padding={"20px"}
            border={"1px solid grey"}
            height={"auto"}
            borderRadius={"20px"}
            marginTop={"20px"}
          >
            {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
            <Thead border={"1px solid black"}>
              <Tr border={"1px solid black"}>
                <Th>Product</Th>
                <Th>Basic Price</Th>
                <Th> Quanity</Th>
                <Th>Total Price</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Total Product offer: ! kg Daal 1 kg ghee 1 kg kaaju</Td>
                <Td>356</Td>
                <Td>2</Td>
                <Td>785</Td>
              </Tr>
             
            </Tbody>
            <Tfoot>
              <Tr>
                {/* <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th> */}
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
        <Link to="/checkout">
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
        </Link>
      </Box>
    </>
  );
};

export default Shopping;