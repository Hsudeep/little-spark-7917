import React from "react";
import {
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
const AdressForm = () => {
  return (
    <Box >
      <Box marginBottom="20px">
        <Text fontSize="25px" fontWeight="600">1. Shipping Address</Text>
      </Box>

      <Box>
        <FormControl>
          <FormLabel marginBottom="10px">*Country/Region</FormLabel>
          <Select marginBottom="10px">
            <option>India(India)</option>
            <option>USA</option>
            <option>Japan</option>
            <option>Korea</option>
          </Select>

          <FormLabel marginBottom="10px">* Full Name</FormLabel>
          <Input type="text" />

          <FormLabel marginBottom="10px">* Zip Code/Postcode</FormLabel>
          <Input type="text" />

          <FormLabel marginBottom="10px">Company Name</FormLabel>
          <Input type="text" />

          <FormLabel marginBottom="10px">Address</FormLabel>
          <Input type="text" />

          <FormLabel marginBottom="10px">Address2</FormLabel>
          <Input type="text" />

          <FormLabel marginBottom="10px">* Apartment/Suite number</FormLabel>
          <Input type="text" />

          <FormLabel marginBottom="10px">* Town/City</FormLabel>
          <Input type="text" />

          <FormLabel marginBottom="10px">* County</FormLabel>
          <Input type="text" placeholder="Start typing your country" />

          <FormLabel marginBottom="10px">* Contact Number</FormLabel>
          <Input type="text" />

          <FormHelperText marginBottom="10px" textAlign="center" textDecoration="underline">
            Why do we need your number?
          </FormHelperText>
        </FormControl>
      </Box>
    </Box>
  );
};

export default AdressForm;
