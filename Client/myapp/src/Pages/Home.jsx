import React, { useEffect, useState } from "react";
import {Box, Image, SimpleGrid} from '@chakra-ui/react';
import axios from 'axios';
import Card from "../Components/Card";
import Aos from "aos";
import "aos/dist/aos.css";
import Crousel from "../Components/Crousel";
import { useDispatch, useSelector } from "react-redux";
import { getCartData } from "../Redux/cartReducer/action";
import Loading from "./Loading";
const Home = ()=>{

    const [data,setData] = useState([]);
    const [load,setLoad] = useState(false);
    // const data1 = useSelector((store)=>);
    const dispatch = useDispatch();
    const fetchData = async ()=>{
        setLoad(true);
        return(
       axios.get(`http://localhost:8080/product`).
       then((data)=>{setData(data.data)
         setLoad(false) })
         .catch((err)=>{console.log(err);
            setLoad(false);
        })
        )
    }
    useEffect(()=>{
        fetchData();
        Aos.init()
        dispatch(getCartData())
    },[]);
    
    return( load?<Loading/> :
        <Box>
            <Crousel/>
                 <Box width={"90%"} m={"auto"} >
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