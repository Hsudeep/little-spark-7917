import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
const Product = ({ image, heading, price, id }) => {
  return (
    <Box key={id} textAlign="center">
      <Image height="70%" marginBottom="10px" src={image}></Image>
      <Box h="20%">
        <Text marginBottom="10px">{heading}</Text>
        <Text marginBottom="10px">{price}</Text>
      </Box>

      <Button
        _hover={{ backgroundColor: "none" }}
        width="100%"
        borderRadius="none"
        backgroundColor="#333333"
        color="white"
        fontWeight="400"
      >
        <Flex gap="10px">
          <Box>
            <LocalMallOutlinedIcon base={{ fontSize: 30 }} />
          </Box>
          <Text>SHOP NOW</Text>
        </Flex>
      </Button>
    </Box>
  );
};

export default Product;
