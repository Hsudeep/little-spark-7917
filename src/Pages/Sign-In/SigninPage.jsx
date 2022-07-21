import React from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GoogleIcon from "@mui/icons-material/Google";
const SigninPage = () => {
  return (
    <Box>
      {/* Box1 */}
      <Box height="10%" width="20%">
        <Image
          src="https://seeklogo.com/images/S/skinstore-logo-5281C41BD3-seeklogo.com.png"
          alt="Logo"
        />
      </Box>
      {/* Box2 */}

      <Box padding="20px 20px" backgroundColor="#f2f2f2" textAlign="left">
        <Box
          padding="20px 20px"
          width="40%"
          margin="auto"
          backgroundColor="white"
        >
          {/* boz3 Start */}
          <Box>
            <Text marginBottom="5%" fontSize="25px" fontWeight="600">
              Existing Customers
            </Text>
            <FormControl>
              <FormLabel marginBottom="3%">*Email address</FormLabel>
              <Input marginBottom="3%" border="1px solid grey" type="email" />
              <FormLabel marginBottom="3%">*Password</FormLabel>
              <Input
                marginBottom="3%"
                border="1px solid grey"
                type="password"
              />
              <FormHelperText marginBottom="3%" textDecoration="underline">
                FORGOTTEN YOUR PASSWORD?
              </FormHelperText>
              <Button
                width="100%"
                background="#333333"
                borderRadius="none"
                color="white"
              >
                Sign In
              </Button>
            </FormControl>
          </Box>
          {/* boz3 End */}
          {/* boz2  Start*/}
          <Box marginTop="5%">
            <Text marginBottom="5%" fontWeight="300">
              Or, Continue with
            </Text>
            <Box>
              <Flex justifyContent="space-evenly">
                <Button
                  _hover={{ backgroundColor: "lightgrey" }}
                  borderRadius="none"
                  backgroundColor="white"
                  border="1px solid #333333"
                  width="40%"
                  padding="10px 10px"
                >
                  <Flex>
                    <FacebookRoundedIcon />
                    <Text>Facebook</Text>
                  </Flex>
                </Button>
                <Button
                  _hover={{ backgroundColor: "lightgrey" }}
                  borderRadius="none"
                  backgroundColor="white"
                  border="1px solid #333333"
                  width="40%"
                  padding="10px 10px"
                >
                  <Flex>
                    <GoogleIcon />
                    <Text>Google</Text>
                  </Flex>
                </Button>
              </Flex>
            </Box>
          </Box>
          {/* boz2  End*/}
        </Box>
      </Box>
    </Box>
  );
};

export default SigninPage;
