import { Box, Button, Collapse, Flex, Image, ScaleFade, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AddIcon } from '@chakra-ui/icons'
import axios from "axios";
import './Dashboard.css';
import Form from "./PopForm";

const Dashboard=()=>{
    const [adminData,setAdmin] = useState([]);
    const fetchData = async ()=>{
        return(
       axios.get(`http://localhost:8080/product`).
       then((data)=>{setAdmin(data.data) })
         .catch((err)=>{console.log(err);
        })
        )
    }
    let i = 1;
    const { isOpen, onToggle } = useDisclosure();
    useEffect(()=>{
        fetchData();
    },[]);

    useEffect(() => {
        if (isOpen) {
          document.body.style.overflow = 'auto';
        } else {
          document.body.style.overflow = 'unset';
        }
      }, [isOpen]);

    return(
        <>
        <Box>
            <Flex position={'sticky'} top={'9'} p={'6'} zIndex={'1'} bgColor={'#3a7bd5'} h={'80px'} alignItems={'center'} textAlign={'center'} justifyContent={'space-between'} fontWeight={'bold'}>
                <Button disabled fontWeight={'bold'}> PRODUCTS</Button>
                <Button onClick={onToggle} fontWeight={'bold'}><AddIcon mr={'2'} boxSize={4} color={'blue.600'} /> ADD PRODUCT</Button>
            </Flex>
            <ScaleFade initialScale={1} in={isOpen}>
                <Box>
                    <Form/>
                </Box>
            </ScaleFade>
        <div className='AdminProdcutCard'>
        <div className={isOpen?'blurrd':""} style={{background:'fixed'}} >

        <br />
        <TableContainer >
          <Table variant="striped" colorScheme="cyan">
            <Thead  w={"100%"} bgColor={"blue.400"}>
              <Tr>
                <Th color="white">S. No.</Th>
                <Th color="white">Product</Th>
                <Th color="white" isNumeric>
                  Price
                </Th>
                <Th color="white">Image</Th>
                <Th color="white">Offer</Th>
                <Th  textAlign={"center"} color="white">Quantity</Th>
                <Th color="white">EDIT</Th>
                <Th color="white">DELETE</Th>
              </Tr>
            </Thead>
            {adminData.length > 0 &&
              adminData.map((el) => {
                  return (
                      <Tbody>
                    <Tr >
                      <Td>{i>=1?i++:i} </Td>
                      <Td > {el.title1}</Td>
                      <Td isNumeric> ₹{el.price} </Td>
                      <Td>
                        <Image src={el.image} />
                      </Td>
                      <td>{el.offer}</td>
                      <td>{el.quantity}</td>
                      <Td>
                        <Button border={"1px solid gray"}>EDIT</Button>
                      </Td>
                      <Td>
                        <Button border={"1px solid gray"}>
                          DELETE
                        </Button>
                      </Td>
                    </Tr>
                  </Tbody>
                );
              })}
          </Table>
        </TableContainer>
                </div>
      </div>

    </Box>
    </>
    )
}

export default Dashboard;