import { Box } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Cart = ()=>{
    const params = useParams();
    console.log(params.id);
    const [data,setData] = useState([]);
    const fetchData = ()=>{
        return(
            axios.get(`http://localhost:4000/product/${params.id}`)
            .then((data)=>setData(data.data)).catch(err=>console.log(err))
        )
    }
useEffect(()=>{
    fetchData();
},[]);
    console.log('data',data);
    return(
        <Box>
            Cart
            {/* {
                data&&data.map((ele)=>{
                    return(
                        <Box>

                        </Box>
                    )
                })
            } */}
        </Box>
    )
}

export default Cart;