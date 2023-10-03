import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  IconButton,
  InputRightElement,
  InputGroup,
  Heading,
  useToast,
  Text,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
const LoginForm = () => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      //   console.log(data);
      //   console.log(data.token);

      if (response.ok) {
        // Login successful, store the JWT token in localStorage or a state variable
        localStorage.setItem("token", data.token);
        setMessage(data.message);
        console.log(data);
        toast({
          size: "500",
          position: "top-center",
          title: "Done.",
          description: "Login Successfull!.",
          status: "success",
          duration: 4000,
          isClosable: true,
  });

      } else {
        setMessage(data.message);
        toast({
          size: "500",
          position: "top-center",
          title: "Done.",
          description: "Error while logging In!.",
          status: "warning",
          duration: 4000,
          isClosable: true,
        });
      }
    } catch (error) {
      setMessage("An error occurred.");
      console.error(error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <Box
      maxW="400px"
      mx="auto"
      p="4"
      border="1px solid #e2e8f0"
      borderRadius="lg"
      boxShadow="md"
      bg="white"
    >
      <Heading>Admin Login</Heading>
      <form onSubmit={handleSubmit}>
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
          <InputGroup>
            <Input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <InputRightElement>
              <IconButton
                variant="ghost"
                icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                onClick={togglePasswordVisibility}
                aria-label={showPassword ? "Hide Password" : "Show Password"}
              />
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <Button mt="4" colorScheme="blue" type="submit">
          Login
        </Button>
      </form>

      {message && <p>{message}</p>}
      <Link to={'/admin/signup'}>
        <Text textAlign={'left'} mt={'5'} color={'blue.400'}>Don't have an account? Sign Up</Text>
      </Link>
    </Box>
  );
};

export default LoginForm;