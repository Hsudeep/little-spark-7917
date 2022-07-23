import React from "react";
import {
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Text,
  Flex,
  Image,
  Checkbox,
} from "@chakra-ui/react";
const PaymentForm = () => {
  const cardImages = [
    {
      id: 1,
      image:
        "https://s1.thcdn.com/checkout/resources/images/3c2e42cbf9d0b0df0d3b3bb81aa41d6a.svg",
    },
    {
      id: 2,
      image:
        "https://s1.thcdn.com/checkout/resources/images/57987be4eb98b4c77644d93d92df80fa.svg",
    },
    {
      id: 3,
      image:
        "https://s1.thcdn.com/checkout/resources/images/932e82ef072c7df18e91e66b96dfdf5d.svg",
    },
    {
      id: 4,
      image:
        "https://s1.thcdn.com/checkout/resources/images/6732c0137a7dab50b23daf1337fe2f30.svg",
    },
    {
      id: 5,
      image:
        "https://s1.thcdn.com/checkout/resources/images/0528692e7541ff3755880b3408793969.svg",
    },
    {
      id: 6,
      image:
        "https://s1.thcdn.com/checkout/resources/images/8ba3dc816042268141a2205e3bfc3971.svg",
    },
    {
      id: 7,
      image:
        "https://s1.thcdn.com/checkout/resources/images/248074ffdeeeaeffed9c5db35f35fe45.svg",
    },
  ];
  return (
    <Box >
      <Box marginBottom="20px">
        <Text fontSize="25px" fontWeight="600">2. Payment Method</Text>
      </Box>

      <Box>
        <FormControl>
          <FormLabel>Credit/Debit Card</FormLabel>

          <Box marginBottom="10px">
            <Flex gap="2%">
              {cardImages.map((e) => (
                <Box key={e.id}>
                  <Image h="50px" w="50px" src={e.image} />
                </Box>
              ))}
            </Flex>
          </Box>
          <FormLabel marginBottom="10px">*Card Number</FormLabel>
          <Input marginBottom="10px" type="text" />

          <FormLabel marginBottom="10px">* Name on card</FormLabel>
          <Input marginBottom="10px" type="text" />

          <FormLabel marginBottom="10px">* Zip Code/Postcode</FormLabel>
          <Input marginBottom="10px" type="text" />

          <FormLabel marginBottom="10px">* Expiry Date</FormLabel>
          <Flex justifyContent="space-between">
            <Input type="text" placeholder="Month" />
            <Input type="text" placeholder="Year" />
          </Flex>
          <FormLabel marginBottom="10px">Security Code (CV2)</FormLabel>
          <Input marginBottom="10px"type="text" />

          <Box marginBottom="10px">
            <Checkbox defaultChecked>
              <FormHelperText>
                Use my shipping address as my cardholder address
              </FormHelperText>
            </Checkbox>
          </Box>
        </FormControl>
      </Box>
    </Box>
  );
};

export default PaymentForm;
