import { Box, Button, FormControl, Heading, Input, SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
const Form = ()=>{
    const [data,setData] = useState([]);
    const [url,setUrl] = useState('');
    const [title1,setTitle1] = useState('');
    const [title2,setTitle2] = useState('');
    const [title3,setTitle3] = useState('');
    const [title4,setTitle4] = useState('');
    const [offer,setOffer] = useState('');
    const [quantity,setQuantity] = useState('');
    const handleChangeInput = (e)=>{
        e.preventDefault()
        const inputs = {url,title1,title2,title3,title4,offer,quantity};
        setData(inputs);
    }
    // console.log(data);
    const postData = ()=>{
        axios.post('http://localhost:8080/adminproduct',{
            headers:{
                Authorization: `Bearer ${localStorage.getItem('token')||""}`
            },
            body: JSON.stringify(data)
        }).catch((err)=>console.log(err));
    }
    return(
        <Box className="blurr" zIndex={'1'} position={'absolute'} left={'0%'} right={'0'} transition={'all ease-in-out 2s'} w={'40%'} p={'5'} alignItems={'center'} textAlign={'center'} m={'auto'}>
            <Heading>ADD PRODUCT</Heading>
            <SimpleGrid columns={[1, 1, 1, 1]} >
                <form onSubmit={handleChangeInput}>
                    <Input mb={'3'} type="url"  value={url} onChange={(e)=>setUrl(e.target.value)} placeholder="enter image url" />
                    <Input mb={'3'} value={title1} onChange={(e)=>setTitle1(e.target.value)} type="text" placeholder="enter title1"  />
                    <Input mb={'3'} value={title2} onChange={(e)=>setTitle2(e.target.value)} type="text" placeholder="enter title2"  />
                    <Input mb={'3'} value={title3} onChange={(e)=>setTitle3(e.target.value)} type="text" placeholder="enter title3"  />
                    <Input mb={'3'} value={title4} onChange={(e)=>setTitle4(e.target.value)} type="text" placeholder="enter title4"  />
                    <Input mb={'3'} value={offer} onChange={(e)=>setOffer(e.target.value)} type="text" placeholder="Offer"  />
                    <Input mb={'3'} value={quantity} onChange={(e)=>setQuantity(e.target.value)} type="number" placeholder="enter quantity"  />
                    <Button _hover={{bgColor:'blue.400'}} bgColor={'blue.300'} w={'100%'} type="submit">ADD</Button>
                </form>
            </SimpleGrid>
        </Box>
    )
}

export default Form;