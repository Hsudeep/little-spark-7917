import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";

const ProductWithStar = ({ image, text, off, id, price }) => {
  return (
    <Box height="100%" key={id} textAlign="left" marginRight="10px">
      <Image marginBottom="10px" height="60%" src={image} />
      <Box  height="30%">
        <Text marginBottom="10px">{text}</Text>
        <Box width="70%" marginBottom="10px" border="1px solid red">
          <Text fontSize="15px" fontWeight="400">{off}</Text>
        </Box>
        <Text marginBottom="10px">{price}</Text>
      </Box>
      <Box height="10%">
        <Button
          _hover={{ backgroundColor: "none" }}
          width="100%"
          borderRadius="none"
          backgroundColor="#333333"
          color="white"
          fontWeight="400"
        >
          SHOP NOW
        </Button>
      </Box>
    </Box>
  );
};

export default ProductWithStar;
