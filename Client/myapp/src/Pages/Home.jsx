import React, { useEffect, useState } from "react";
import {Box, Image, SimpleGrid} from '@chakra-ui/react';
import axios from 'axios';
import Card from "../Components/Card";
import Aos from "aos";
import "aos/dist/aos.css";
import Crousel from "../Components/Crousel";
const Home = ()=>{

    const [data,setData] = useState([]);
    const fetchData = async ()=>{
        return(
       axios.get(`http://localhost:4000/product`).
       then((data)=>setData(data.data)).catch((err)=>console.log(err))
        )
    }
    useEffect(()=>{
        fetchData();
        Aos.init()
    },[]);
    
    return(
        <Box>
            <Crousel/>
                 <Box  width={"90%"} m={"auto"} >
                <SimpleGrid columns={[1.1,2,3]}>
                {
                    data&&data.map((ele)=>(
                        
                        <Card key={ele._id} {...ele} />
                        
                        ))
                    }
                    </SimpleGrid>
        </Box>
                    </Box>
    )
}

export default Home;