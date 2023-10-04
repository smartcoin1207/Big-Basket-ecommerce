import { Box, Button, FormControl, Heading, Input, SimpleGrid, useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateAdminData } from "../../../Redux/Admin/action";


const initialstate = {
    image:"",
    title1: "",
    title2: "",
    title3: "",
    title4:"",
    offer:"",
    price:"",
}

export const Form = ()=>{
    const [data,setData]=useState(initialstate);
    const toast = useToast();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
        ...data,
        [name]: value,
        });
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://dark-rose-gharial-vest.cyclic.cloud/product",data);
      if (response.status === 201) {
        // alert("Product added successfully!");
        toast({
            size: "500",
            position: "top-center",
            title: "Done.",
            description: "Product Added.",
            status: "success",
            duration: 4000,
            isClosable: true,
        });
        setData(initialstate);
        window.location.reload();
      }
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Error adding product. Please try again.");
    }
  };

    return(
        <Box className="blurr" zIndex={'1'} position={'absolute'} left={'0%'} right={'0'} transition={'all ease-in-out 2s'} w={'70%'} p={'5'} alignItems={'center'} textAlign={'center'} m={'auto'}>
            <Heading>ADD PRODUCT</Heading>
            <SimpleGrid columns={[1, 1, 1, 2]} >
                <form onSubmit={handleSubmit}>
                    <Input mb={'3'}   
                        type="url" 
                        id="image"
                        name="image"
                        value={data.image}
                        onChange={handleChange}
                        required
                        placeholder="enter image url" />
                    <Input mb={'3'} id="title1"
                        name="title1"
                        value={data.title1}
                        onChange={handleChange}
                        required  type="text"  
                        placeholder="enter title1"  />
                    <Input mb={'3'} id="title2"
                        name="title2"
                        value={data.title2}
                        onChange={handleChange}
                        required  
                        type="text"
                        placeholder="enter title2"  />
                    <Input mb={'3'}  id="title3"
                        name="title3"
                        value={data.title3}
                        onChange={handleChange}
                        required type="text"
                        placeholder="enter title3"  />
                    <Input mb={'3'}  id="title4"
                        name="title4"
                        value={data.title4}
                        onChange={handleChange}
                        required     
                        type="text"
                        placeholder="enter title4"  />
                    <Input mb={'3'}  id="offer"
                        name="offer"
                        value={data.offer}
                        onChange={handleChange}
                        required type="text" 
                        placeholder="Offer"  />
                    <Input mb={'3'}   id="price"
                        name="price"
                        value={data.price}
                        onChange={handleChange}
                        required type="number" 
                        placeholder="enter price"  />
                    <Button type="submit" _hover={{bgColor:'blue.400'}} bgColor={'blue.300'} w={'100%'} >ADD</Button>
                </form>
            </SimpleGrid>
        </Box>
    )
}


export const EditForm = (id)=>{
    const [edit,setEdit] = useState(initialstate);
    const toast = useToast();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEdit({...edit,[name]: value,});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          // Make a PATCH request to the API endpoint with the product ID
          const response = await axios.patch(
            `https://dark-rose-gharial-vest.cyclic.cloud/product/${id.id}`,edit
          );
          if (response.status === 200 || response.status === 204) {
            // alert("Product updated successfully!");
            toast({
                size: "500",
                position: "top-center",
                title: "Done.",
                description: "Product Edited Successfully!.",
                status: "success",
                duration: 4000,
                isClosable: true,
            });
            setEdit(initialstate);
            window.location.reload();
          }
        } catch (error) {
          console.error("Error updating product:", error);
          alert("Error updating product. Please try again.");
        }
      };

    return(
        <Box bgColor={'#fff'} className="blurr content" zIndex={'5'} position={'fixed'} left={'30%'} top={'4%'} w={'40%'} p={'5'} alignItems={'center'} textAlign={'center'} m={'auto'}>
            <Heading>Edit Product</Heading>
            <form onSubmit={handleSubmit}>
                <Input required mb={'3'} value={edit.image} placeholder="Enter image url.." type="url" name="image" onChange={handleChange}/>
                <Input required mb={'3'} value={edit.title1} placeholder="enter title1.." type="text" name="title1" onChange={handleChange}/>
                <Input required mb={'3'} value={edit.title2} placeholder="enter title2" type="text" name="title2" onChange={handleChange}/>
                <Input required mb={'3'} value={edit.title3} placeholder="enter title3" type="text" name="title3" onChange={handleChange}/>
                <Input required mb={'3'} value={edit.title4} placeholder="enter title4" type="text" name="title4" onChange={handleChange}/>
                <Input required mb={'3'} value={edit.offer} placeholder="Enter offer" type="text" name="offer" onChange={handleChange}/>
                <Input required mb={'3'} value={edit.price} placeholder="Enter price" type="number" name="price" onChange={handleChange}/>
                <Button type="submit" _hover={{bgColor:'blue.400'}} bgColor={'blue.300'} w={'100%'} >Edit</Button>
            </form>
        </Box>
    )
}

















// /import React, { useState } from "react";
// import axios from "axios";
// const AddProduct = () => {
//   const [productData, setProductData] = useState({
//     title1: "",
//     title2: "",
//     title3: "",
//   });
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProductData({
//       ...productData,
//       [name]: value,
//     });
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Make a POST request to the API endpoint
//       const response = await axios.post(
//         "http://localhost:8080/product",
//         productData
//       );
//       // Check if the request was successful (status code 201)
//       if (response.status === 201) {
//         alert("Product added successfully!");
//         // Clear the form
//         setProductData({
//           title1: "",
//           title2: "",
//           title3: "",
//         });
//       }
//     } catch (error) {
//       console.error("Error adding product:", error);
//       alert("Error adding product. Please try again.");
//     }
//   };
//   return (
//     <div>
//       <h2>Add Product</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="title1"
//             name="title1"
//             value={productData.title1}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="price">Price:</label>
//           <input
//             type="text"
//             id="title3"
//             name="title2"
//             value={productData.title2}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="description">Description:</label>
//           <textarea
//             id="title3"
//             name="title3"
//             value={productData.title3}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <button type="submit">Add Product</button>
//         </div>
//       </form>
//     </div>
//   );
// };
// export default AddProduct;