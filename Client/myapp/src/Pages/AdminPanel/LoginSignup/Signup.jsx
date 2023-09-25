import React, { useState } from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Select,
  Option,
} from "@chakra-ui/react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    gender: "male", // Default gender
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/admin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setFormData({
          name: "",
          email: "",
          password: "",
          phoneNumber: "",
          gender: "",
        });
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      console.error(error);
      setMessage("An error occurred.");
    }
  };

  return (
    <>
      <Box
        maxW="400px"
        mx="auto"
        p="7"
        border="1px solid #e2e8f0"
        borderRadius="lg"
        boxShadow="md"
        bg="white"
        marginTop="30px"
      >
        <Heading>Admin Register</Heading>
        <form onSubmit={handleSubmit}>
          <FormControl mt="3">
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormControl>

          <FormControl mt="3">
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormControl>

          <FormControl mt="3">
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </FormControl>

          <FormControl mt="3">
            <FormLabel htmlFor="phoneNumber">Phone Number</FormLabel>
            <Input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </FormControl>

          <FormControl mt="3">
            <FormLabel htmlFor="gender">Gender</FormLabel>
            <Select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Select>
          </FormControl>

          <Button mt="5" mb="5" colorScheme="blue" type="submit">
            Register
          </Button>
          <Text>If Already register please Login ?</Text>
        </form>

        {message && <p>{message}</p>}
      </Box>
    </>
  );
};

export default SignUp;
