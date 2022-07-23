import { Box, Checkbox, Text } from "@chakra-ui/react";
import React from "react";
const SkincareFormatFilter = () => {
  const Skincare_Format = [
    "Cream (880)",
    "Fluid (725)",
    "Sheet (377)",
    "Clay (321)",
    "Gel (309)",
    "Serum (201)",
    "Oil (160)",
    "Foam (140)",
    "Water (136)",
    "Balm (114)",
  ];
  return (
    <Box borderBottom="1px solid lightgrey" h="5%">
      <Text
        fontWeight="700"
        fontSize="18px"
        borderBottom="1px solid lightgrey"
        paddingBottom="5%"
      >
        Skincare Format
      </Text>
      <Box h="75%" overflow="auto" overflowS>
        {Skincare_Format.map((e) => (
          <Box display="flex">
            <Checkbox marginRight="5%" />
            <Text>{e}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SkincareFormatFilter;
