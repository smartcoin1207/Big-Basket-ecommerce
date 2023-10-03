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
import { getAdminData } from "../Redux/Admin/action";
const Home = ()=>{
    const {adminData,isLoading} = useSelector((store)=>{return store.adminReducer});
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getAdminData)
        Aos.init()
    },[]);
    
    return( isLoading?<Loading/> :
        <Box>
            <Crousel/>
                 <Box width={"90%"} m={"auto"} >
                <SimpleGrid columns={[1.1,2,3]}>
                {
                    adminData&&adminData.map((ele)=>(
                        
                        <Card key={ele._id} {...ele} />
                        
                        ))
                    }
                    </SimpleGrid>
        </Box>
                    </Box>
    )
}

export default Home;