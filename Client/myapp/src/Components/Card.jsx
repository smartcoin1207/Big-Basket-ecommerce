import { Box, Button, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Card = ({image,title1,title2,title3,title4,offer,price,_id})=>{
    const navigate = useNavigate();
    
    const addCart = ()=>{
        navigate(`/product/${_id}`);

    }

    return(
        <Box data-aos="fade-up" data-aos-duration="1000"  display={'block'} m={'auto'} alignItems={'center'} textAlign={'left'}
        fontWeight={'bold'}
        height={'-webkit-fit-content'} 
        lineHeight={'1'}
        margin={"20px"}
        padding={"20px"}
        bgColor={'rgb(245, 243, 243)'}
        borderRadius={"20px"}
        _hover={
            {
                boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",
            }
        }
        >
            <Image w={'100%'} h={'50%'} mb={'9%'}  src={image}/>
            <Text>{title1}</Text>
            <Text>{title2}</Text>
            <Text>{title3}</Text>
            <Text>{title4}</Text>
            <Text color={'yellow.500'}>{offer}</Text>
            <Text>Price: <span style={{color:'red'}}>₹{price}</span> </Text>
            <Button _hover={{bgColor:'#4a84d5'}} bgColor={'#90b7ee'} onClick={()=>addCart()} w={'100%'} textAlign={'center'}>ORDER NOW</Button>
        </Box>
    )
}

export default Card;