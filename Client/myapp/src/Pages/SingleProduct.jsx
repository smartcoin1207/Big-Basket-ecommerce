
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
  useToast,
  Icon,
  Badge,
} from "@chakra-ui/react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { MdLocalShipping } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import SngleProductSkeleton from "./SingleProductLoader";
import { AddToCart } from "../Redux/cartReducer/action";
export default function SingleProduct() {
  const { id } = useParams();
  const [data, setdata] = useState({});
  const [load, setLoad] = useState(false);
  const toast = useToast();
  const dispatch = useDispatch();

  const fetchData = ()=>{
    setLoad(true);
    axios.get(`http://localhost:8080/product/${id}`)
    .then((res)=>{
      setdata(res.data);
      setLoad(false)
    }) 
    .catch((err)=>{
      setLoad(false);
      console.log(err);
    })
}

useEffect(()=>{
    fetchData()
},[]);
const {image,offer,price,title1,title2,title3,rating} = data;
console.log(data);
const addToCartFun = () => {
    dispatch(AddToCart(data))
      .then((res) => {
          return toast({
              title: 'Added to your cart',
              status: "success",
              duration: 2000,
              position: "top",
              isClosable: true,
            }); 
      })
      .catch((err) => {
        return toast({
          title: "Something wen wrong",
          status: "warning",
          duration: 2000,
          position: "top",
          isClosable: true,
        });
      });
  };


return ( load ? <SngleProductSkeleton/> :
      <div>
        <Container maxW={"7xl"}  w={"90%"} margin={"auto"}>
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 18, md: 24 }}
          >
            <Flex>
              <Image
                rounded={"md"}
                alt={"product image"}
                src={image}
                align={"center"}
                w={"100%"}
                height={"auto"}
              />
            </Flex>
            <Stack textAlign={'left'} spacing={{ base: 6, md: 10 }}>
              <Box as={"header"}>
                <Heading
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={{ base: "1xl", sm: "2xl", lg: "3xl" }}
                >
                  {`${title1} || ${title2} || ${title3} `}
                </Heading>
                <Text fontWeight={300} fontSize={"2xl"}>
                  ₹{price}
                </Text>{" "}
                <Flex gap={1}>
                  {rating &&
                    Array(5)
                      .fill("")
                      .map((el, i) => {
                        if (i + 1 < Math.floor(rating)) {
                          return (
                            <Icon
                              key={Math.random() * 100 + 13}
                              as={BsStarFill}
                              color={"yellow.500"}
                            />
                          );
                        } else if (i + 1 == Math.floor(rating)) {
                          return (
                            <Icon
                              key={Math.random() * 100 + 13}
                              as={BsStarHalf}
                              color={"yellow.500"}
                            />
                          );
                        } else {
                          return (
                            <Icon
                              key={Math.random() * 100 + 13}
                              as={BsStar}
                              color={"yellow.500"}
                            />
                          );
                        }
                      })}
                </Flex>
              </Box>

              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={"column"}
                divider={<StackDivider borderColor={"gray.200"} />}
              >
                <Box>
                  <Text
                    fontSize={{ base: "16px", lg: "18px" }}
                    color={"yellow.300"}
                    fontWeight={"500"}
                    textTransform={"uppercase"}
                    mb={"4"}
                  >
                    Features
                  </Text>

                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <Flex gap={"2"}>
                      <Badge p="0.2rem">{`Offer ${offer}`}</Badge>
                      <Badge p="0.2rem">{`Discount ${''}`}</Badge>
                    </Flex>
                  </SimpleGrid>
                </Box>
              </Stack>


              <Button
                rounded={"none"}
                w={"full"}
                mt={8}
                size={"lg"}
                py={"7"}
                bg={"gray.900"}
                color={"white"}
                textTransform={"uppercase"}
                _hover={{
                  transform: "translateY(2px)",
                  boxShadow: "lg",
                }}
                onClick={() => {
                  addToCartFun();
                }}
              >
                Add to cart
              </Button>

              <Stack
                direction="row"
                alignItems="center"
                justifyContent={"center"}
              >
                <MdLocalShipping />
                <Text>2-3 business days delivery</Text>
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
    </div>
  );
}
