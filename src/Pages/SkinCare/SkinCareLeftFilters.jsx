import { Box, Checkbox, Text } from "@chakra-ui/react";
import React from "react";
const SkinCareLeftFilters = () => {
  const Brands = [
    "111SKIN (49)",
    "3LAB (20)",
    "Aesop (26)",
    "African Botanics (1)",
    "AHAVA (34)",
    "Alchimie Forever (7)",
    "Algenist (26)",
    "ALGENIST (3)",
    "Alo (3)",
    "Alpha-H (19)",
  ];
  return (
    <Box borderBottom="1px solid lightgrey">
      <Text
        fontWeight="700"
        fontSize="18px"
        borderBottom="1px solid lightgrey"
        paddingBottom="5%"
      >
        Brands
      </Text>
      <Box h="75%" overflow="auto" overflowS>
        {Brands.map((e) => (
          <Box display="flex">
            <Checkbox marginRight="5%" />
            <Text>{e}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SkinCareLeftFilters;
