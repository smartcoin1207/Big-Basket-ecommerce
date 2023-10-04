import { Box, Button, Collapse, Flex,Heading, Image, ScaleFade, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr,Tfoot,TableCaption, useDisclosure, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AddIcon } from '@chakra-ui/icons'
import { useDispatch, useSelector } from "react-redux";
import './Dashboard.css';
import {EditForm, Form} from "./PopForm";
import { deleteAdminData, getAdminData } from "../../../Redux/Admin/action";

const Dashboard=()=>{
    const {adminData,isLoading} = useSelector((store)=>{return store.adminReducer});
    const dispatch = useDispatch();
    const toast = useToast();
    let i = 1;
    const { isOpen, onToggle } = useDisclosure();
    const [open,setOpen] = useState(false);
    const [id,setId] = useState('');

    const openForm = (id)=>{
        setOpen(!open);
        setId(id);
    }
    
    useEffect(() => {
        dispatch(getAdminData)
        if (open) {
          document.body.style.overflow = 'auto';
        } else {
          document.body.style.overflow = 'unset';
        }
      }, [open]);

      const deleteProduct = (id)=>{
        dispatch(deleteAdminData(id)).then(() => {
            dispatch(getAdminData);
          }).then(()=>{
            toast({
                size: "500",
                position: "top-center",
                title: "Done.",
                description: "Item removed.",
                status: "success",
                duration: 4000,
                isClosable: true,
        });
          }).catch(()=>{
            toast({
                size: "500",
                position: "top-center",
                title: "Done.",
                description: "Something went wrong !",
                status: "warning",
                duration: 4000,
                isClosable: true,
        });
          })
      }

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
            <Box>
                {open?<EditForm id={id} />:null}
            </Box>
        <div className='AdminProdcutCard'>
        <div className={isOpen?'blurrd':""} >

        <br />
        <Box width={"95%"} margin={"auto"}>
        <TableContainer>
          <Table variant="striped"
           colorScheme="cyan"  
           w={'100%'}
            padding={"20px"}
            border={"1px solid grey"}
            height={"auto"}
            marginTop={"20px"} alignItems={'center'} 
            textAlign={'center'}>
            <Thead bgColor={"blue.400"}>
              <Tr alignItems={'center'} textAlign={'center'}>
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
            {adminData.length&&
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
                        <Button onClick={()=>openForm(el._id)} border={"1px solid gray"}>EDIT</Button>
                      </Td>
                      <Td>
                        <Button onClick={()=>deleteProduct(el._id)} border={"1px solid gray"}>
                          DELETE
                        </Button>
                      </Td>
                    </Tr>
                  </Tbody>
                );
              })}
          </Table>
        </TableContainer>
        </Box>
        </div>
      </div>

    </Box>
    </>
    )
}

export default Dashboard;