import React from "react";
import { Box, Heading, Text, SimpleGrid, Image } from "@chakra-ui/react";

const Coniform = () => {
  return (
    <>
      <Box
        width={"80%"}
        margin={"auto"}
        // boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px"
        marginTop={"50px"}
        // padding={"15px"}
        textAlign={"left"}
        // backgroundColor={"teal.300"}
      >
        <SimpleGrid columns={[1, 1, 1, 2]} gap={"30px"}>
          <Box backgroundColor={"teal.300"} padding={"20px"}>
            {" "}
            <Heading> Thank You For visiting our Site</Heading>
            <Text> Hope You Like Our Products</Text>
            <Text>
              If You Want download our website in your Mobile You can download
              from below{" "}
            </Text>
          </Box>
          <Box width={"100%"}>
            <Image
              width={"100%"}
              height={"300px"}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7xlQ7CiOhHKMDHm5XgxD9fQTwjNxS-yxR_QevfjaTPyLB4mXCQMsTlGRumbJP7DnUU3A&usqp=CAU"
            ></Image>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Coniform;
