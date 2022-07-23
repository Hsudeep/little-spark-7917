import { Box, Button, Flex, Image, useToast } from "@chakra-ui/react";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import AdressForm from "./AdressForm";
import PaymentForm from "./PaymentForm";

const CheckoutPage = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const handleSubmit = () => {
    toast({
      title: "Order Placed",
      status: "success",
      duration: 2000,
      isClosable: true,
    });

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };
  return (
    <Box>
      <Box marginBottom="5%" height="10%" width="20%">
        <Image
          marginLeft="30%"
          marginTop="10%"
          onClick={() => Navigate("/")}
          src="https://seeklogo.com/images/S/skinstore-logo-5281C41BD3-seeklogo.com.png"
          alt="Logo"
        />
      </Box>

      <Box bgColor="#ebebeb" padding="2% 2%" margin="auto">
        <Box>
          <Flex gap="10%">
            <Box padding="20px 20px" bgColor="white" width="40%">
              <AdressForm />
              <PaymentForm />
              <Box height="4%">
                <Button
                  onClick={handleSubmit}
                  width="100%"
                  color="white"
                  fontWeight="400"
                  bgColor="#333333"
                  borderRadius="none"
                >
                  Submit
                </Button>
              </Box>
            </Box>

            <Box bgColor="white" width="30%"></Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default CheckoutPage;
