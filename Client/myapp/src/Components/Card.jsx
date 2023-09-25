import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({image,title1,title2,title3,title4,offer,price,_id})=>{
    const navigate = useNavigate();
    const addCart = ()=>{
        navigate(`/cart/${_id}`);
    }

    return(
        <Box data-aos="fade-up" data-aos-duration="1000" display={'block'} m={'auto'} alignItems={'center'} textAlign={'left'}
        fontWeight={'bold'}
        height={"470px"}
        lineHeight={'0.5'}
        margin={"20px"}
        padding={"20px"}
        bgColor={'rgb(245, 243, 243)'}
        borderRadius={"20px"}
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        // _hover={
        // }
        >
            <Image w={'100%'} h={'50%'} mb={'9%'}  src={image}/>
            <Text>{title1}</Text>
            <Text>{title2}</Text>
            <Text>{title3}</Text>
            <Text>{title4}</Text>
            <Text>{offer}</Text>
            <Text>Price: <span style={{color:'red'}}>{price}</span> </Text>
            <Button bgColor={'#4a84d5'} onClick={()=>addCart()} w={'100%'} textAlign={'center'}>ORDER NOW</Button>
        </Box>
    )
}

export default Card;