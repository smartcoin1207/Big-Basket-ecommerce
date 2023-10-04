import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FormControl,
  FormLabel,
  Box,
  Input,
  Flex,
  Heading,
  SimpleGrid,
  Image,
  Text,
  Button,
  useToast,
} from "@chakra-ui/react";
import { Checkbox } from "@chakra-ui/react";
import Crousel from "../Components/Crousel";
import axios from "axios";

const Checkout = () => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    from_name: "",
    phone_number: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    cardnumber: "",
    month: "",
    year: "",
    cvv: "",
    to_name: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can add the logic to send the email with formData
    const userId = "";
    const serviceId = "service_te1vs2e";
    emailjs
      .sendForm(serviceId, "template_uc4e7o9", e.target, "co0tG8wnNb-4M9V1U")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      deleteCartData();
  };

  const deleteCartData = async()=>{
   await axios.delete('https://dark-rose-gharial-vest.cyclic.cloud/cart/all/delete')
      .catch(error => {
        console.error('Error deleting resource:', error);
      });
      localStorage.removeItem('total');
      toast({
        size: "500",
        position: "top-center",
        title: "Done.",
        description: "Details has been sent.",
        status: "success",
        duration: 3000,
        isClosable: true,
  });
  }

  return (
    <Box>
      <Box marginBottom={"40px"}>
        <Crousel />
      </Box>
      <form
        onSubmit={handleSubmit}
        style={{
          width: "80%",
          margin: "auto",
          boxShadow:
            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
          padding: "30px",
          borderradius: "10px",
        }}
      >
        {/*  personal details for  payment */}
        <Heading textAlign={"left"}>Personal Details</Heading>

        <SimpleGrid columns={[1, 1, 1, 2]} gap={"40px"}>
          <Box marginTop={"10px"} onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel>Full Name</FormLabel>
              <Input
                required
                type="text"
                border={" 1px solid black"}
                name="from_name"
                placeholder="Name"
                value={formData.from_name}
                onChange={handleChange}
                
              />
            </FormControl>
            <FormControl>
              <FormLabel>Email Address</FormLabel>
              <Input
                required
                type="email"
                border={" 1px solid black"}
                name="user_email"
                placeholder="Email"
                value={formData.user_email}
                onChange={handleChange}

              />
            </FormControl>
            <FormControl>
              <FormLabel>Mobile Number</FormLabel>
              <Input
                required
                type="number"
                border={" 1px solid black"}
                name="phone_number"
                placeholder="enter your number"
                value={formData.phone_number}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Address</FormLabel>
              <Input
                required
                type="text"
                border={" 1px solid black"}
                name="address"
                placeholder="enter your address"
                value={formData.address}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>State</FormLabel>
              <Input
                required
                type="text"
                border={" 1px solid black"}
                name="state"
                placeholder="enter your address"
                value={formData.state}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel>City</FormLabel>
              <Input
                required
                type="text"
                border={" 1px solid black"}
                name="city"
                placeholder="enter your city"
                value={formData.city}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl>
              <FormLabel>PinCode</FormLabel>
              <Input
                required
                type="number"
                border={" 1px solid black"}
                name="pincode"
                placeholder="enter your pin"
                value={formData.pin}
                onChange={handleChange}
                marginBottom="50px"
              />
            </FormControl>

            {/* paymentn detais  */}

            <Box marginTop={"50px"} textAlign={"left"}>
              <Heading>Payment Options</Heading>
              <Box fontWeight={"medium"}>
                <Checkbox defaultChecked>Credit Card</Checkbox> <br />
                <Checkbox>Debit Card</Checkbox> <br />
                <Checkbox disabled> Cash on Delivery</Checkbox>
              </Box>
              <Box border={"2px solid grey"} marginTop="30px" padding="10px">
                <SimpleGrid
                  columns={[1, 1, 2, 2]}
                  style={{
                    justifyContent: "space-between",
                    padding: "10px",
                    backgroundColor: "rgb(228, 202, 202)",
                    border: "1px solid grey",
                  }}
                >
                  <Text fontWeight="bold"> Payment Details </Text>
                  <Text
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                  >
                    <Checkbox>Remember me</Checkbox>
                  </Text>
                </SimpleGrid>

                <Box padding="10px">
                  <Text fontWeight="bold">CARD NUMBER</Text>
                  <Input
                    required
                    type="text"
                    minLength={16}
                    maxLength={16}
                    placeholder="Valid Card NUmber"
                    border="1px solid black"
                    name="cardnumber"
                    value={formData.cardnumber}
                    onChange={handleChange}
                  ></Input>

                  <Box marginTop="10px">
                    <Flex gap="30px">
                      <Box fontWeight="bold">
                        EXPIRY DATE
                        <SimpleGrid columns={[1, 1, 1, 2]} gap="20px">
                          <Input
                            required
                            placeholder="Month"
                            name="month"
                            value={formData.month}
                            onChange={handleChange}
                          ></Input>
                          <Input
                            required
                            placeholder="year"
                            name="year"
                            value={formData.year}
                            onChange={handleChange}
                          ></Input>
                        </SimpleGrid>
                      </Box>
                      <Box fontWeight="bold">
                        {" "}
                        CVV
                        <Input
                          required
                          placeholder="CVV"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleChange}
                        ></Input>
                      </Box>
                    </Flex>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* image for shopping cart */}
          <Box
            width={"100%"}
            height={"470px"}
            bgGradient="radial(gray.300, yellow.400, pink.200)"
          >
            <Image
              width="100%"
              padding="20px"
              height={"450px"}
              objectFit="cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVV4JDooUUm00Tg-5Xf-3S84F8RJe5YduTZp4etMAXKyeb3d68DNdox-kWYHYABRhiunQ&usqp=CAU"
              alt="image"
            ></Image>
          </Box>
        </SimpleGrid>
        <Text textAlign={'left'} mt={'3'} fontStyle={'italic'} fontWeight={'bold'}>Total Amount : ₹{localStorage.getItem('total')} </Text>
        <Box
          style={{
            width: "70%",
            borderRadius: "20px",
            margin: "auto",
            marginTop: "50px",
          }}
        >
          <Button
            width="100%"
            backgroundColor="green.500"
            type="submit"
            _hover={{bgColor:'green.300'}}
            margin="auto"
          >
            PROCEED TO PAY ₹{localStorage.getItem('total')}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Checkout;
