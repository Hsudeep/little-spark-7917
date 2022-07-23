import { Box, Checkbox, Text } from "@chakra-ui/react";
import React from "react";
const SkinCareProducts = () => {
  const Skincare_Product_Type= [
    "Moisturizers (695)",
    "Serums (670)",
    "Cleansers (468)",
    "Moisturisers (462)",
    "Masks (358)",
    "Eye Care (324)",
    "Exfoliators & Scrubs (195)",
  ]
  return (
    <Box borderBottom="1px solid lightgrey" h="5%">
      <Text
        fontWeight="700"
        fontSize="18px"
        borderBottom="1px solid lightgrey"
        paddingBottom="5%"
      >
        Skincare Product Type
      </Text>
      <Box h="75%" overflow="auto" overflowS>
        {Skincare_Product_Type.map((e) => (
          <Box display="flex">
            <Checkbox marginRight="5%" />
            <Text>{e}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SkinCareProducts;
