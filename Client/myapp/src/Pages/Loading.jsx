import {
    Box,
    Flex,
    Grid,
    Skeleton,
    SkeletonCircle,
    SkeletonText, SimpleGrid
  } from "@chakra-ui/react";
  import React from "react";
  
  const Loading = () => {
    return (
      <>
      <Box boxShadow="lg" bg="white" h={'50%'} mb={'20px'} width={'100%'} m={'auto'}>
        <Skeleton h={'300px'} mb={'20px'} />
      </Box>
      <Flex w={'90%'} display={'block'} m={'auto'}>
        <SimpleGrid columns={[1.1,2,3]}
          mt={"30px"}
          marginLeft={"40px"}
          paddingLeft={"15px"}
          width={"80%"}
          gap={6}
          >
          <Box height={"auto"}>
            <Skeleton height="250px " mb={"10px"} />
  
            <Skeleton height="20px" mb={"10px"} />
            <Skeleton height="20px" mb={"10px"} />
            <Skeleton height="20px" mb={"10px"} />
  
            <Skeleton height="50px" w={"50%"} mb={"10px"} margin="auto" />
            <Skeleton height="20px" mt={"10px"} mb={"10px"} />
          </Box>
  
          <Box height={"auto"}>
            <Skeleton height="250px " mb={"10px"} />
  
            <Skeleton height="20px" mb={"10px"} />
            <Skeleton height="20px" mb={"10px"} />
            <Skeleton height="20px" mb={"10px"} />
  
            <Skeleton height="50px" w={"50%"} mb={"10px"} margin="auto" />
            <Skeleton height="20px" mt={"10px"} mb={"10px"} />
          </Box>
  
          <Box height={"auto"}>
            <Skeleton height="250px " mb={"10px"} />
  
            <Skeleton height="20px" mb={"10px"} />
            <Skeleton height="20px" mb={"10px"} />
            <Skeleton height="20px" mb={"10px"} />
  
            <Skeleton height="50px" w={"50%"} mb={"10px"} margin="auto" />
            <Skeleton height="20px" mt={"10px"} mb={"10px"} />
          </Box>
  
          <Box height={"auto"}>
            <Skeleton height="250px " mb={"10px"} />
  
            <Skeleton height="20px" mb={"10px"} />
            <Skeleton height="20px" mb={"10px"} />
            <Skeleton height="20px" mb={"10px"} />
  
            <Skeleton height="50px" w={"50%"} mb={"10px"} margin="auto" />
            <Skeleton height="20px" mt={"10px"} mb={"10px"} />
          </Box>
          <Box height={"auto"}>
            <Skeleton height="250px " mb={"10px"} />
  
            <Skeleton height="20px" mb={"10px"} />
            <Skeleton height="20px" mb={"10px"} />
            <Skeleton height="20px" mb={"10px"} />
  
            <Skeleton height="50px" w={"50%"} mb={"10px"} margin="auto" />
            <Skeleton height="20px" mt={"10px"} mb={"10px"} />
          </Box>
  
          <Box height={"auto"}>
            <Skeleton height="250px " mb={"10px"} />
  
            <Skeleton height="20px" mb={"10px"} />
            <Skeleton height="20px" mb={"10px"} />
            <Skeleton height="20px" mb={"10px"} />
  
            <Skeleton height="50px" w={"50%"} mb={"10px"} margin="auto" />
            <Skeleton height="20px" mt={"10px"} mb={"10px"} />
          </Box>
        </SimpleGrid>
      </Flex>
            </>
    );
  };
  
  export default Loading;