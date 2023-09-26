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
} from "@chakra-ui/react";
import { Checkbox } from "@chakra-ui/react";
import Crousel from "../Components/Crousel";

const Checkout = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    from_name: "",
    phone_number: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    to_name: "",

    // message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can add the logic to send the email with formData
    console.log("Form data:", formData);
    const userId = "";
    const serviceId = "service_te1vs2e";

    // emailjs.sendForm(serviceId, "template_id", e.target, userId).then(
    //   (result) => {
    //     console.log(result.text);
    //     alert("Email sent successfully!");
    //   },
    //   (error) => {
    //     console.log(error.text);
    //     alert("Error sending email. Please try again later.");
    //   }
    // );

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
  };

  return (
    <Box>
        <Box marginBottom={"40px"}>
        <Crousel/>
        </Box>
      <form
        onSubmit={handleSubmit}
        style={{
          width: "80%",
          margin: "auto",
        
          // textalign: "left",
          // bgGradient="linear(to-t, green.200, pink.500)"
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

            {/* <Box marginTop={"50px"}>
              <Heading>Payment Options</Heading>
              <Box fontWeight={"medium"}>
                <Checkbox defaultChecked>Credit Card</Checkbox> <br />
                <Checkbox>Debit Card</Checkbox> <br />
                <Checkbox> Cash on Delivery</Checkbox>
              </Box>
              <Box border={"2px solid grey"} marginTop="30px" padding="10px">
                <Flex
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
                </Flex>

                <Box padding="10px">
                  <Text fontWeight="bold">CARD NUMBER</Text>
                  <Input
                    type="text"
                    placeholder="Valid Card NUmber"
                    border="1px solid black"
                  ></Input>

                
                  <Box marginTop="10px">
                    <Flex gap="30px">
                      <Box fontWeight="bold">
                        EXPIRY DATE
                        <Flex gap="20px">
                          <Input placeholder="Month"></Input>
                          <Input placeholder="year "></Input>
                        </Flex>
                      </Box>
                      <Box fontWeight="bold">
                        {" "}
                        CVV
                        <Input placeholder="CVV"></Input>
                      </Box>
                    </Flex>
                  </Box>
                </Box>
              </Box>
            </Box> */}
          </Box>

          {/* image for shopping cart */}
          <Box
            width={"100%"}
            height={"470px"}
            // border="2px solid blue"
            bgGradient="radial(gray.300, yellow.400, pink.200)"
          >
            <Image
              width="100%"
              padding="20px"
              height={"450px"}
              objectFit="cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVV4JDooUUm00Tg-5Xf-3S84F8RJe5YduTZp4etMAXKyeb3d68DNdox-kWYHYABRhiunQ&usqp=CAU"
            ></Image>
          </Box>
        </SimpleGrid>

        <Box
          _hove={{ backgroundColor: "green" }}
          style={{
            width: "70%",
            backgroundColor: "green",
            borderRadius: "20px",
            margin: "auto",
            marginTop: "50px",
          }}
        >
          <Button
            width="100%"
            backgroundColor="green"
            type="submit"
            margin="auto"
          >
            Pay
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Checkout;