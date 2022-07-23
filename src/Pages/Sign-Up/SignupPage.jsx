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
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
const SignupPage = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [signupData, setsignupData] = useState({});

  const handleSignupData = (e) => {
    let { name, value } = e.target;

    setsignupData({
      ...signupData,
      [name]: value,
    });
  };

  const handleSignupClick = (e) => {
    e.preventDefault();
    // localStorage.setItem(signupData);
    console.log(signupData);
    toast({
      title: "Account created.",
      description: "We've created your account for you.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });

    setTimeout(() => {
      navigate("/signin");
    }, 1000);
  };
  return (
    <Box>
      {/* Box1 */}
      <Box height="10%" width="20%">
        <Image
          onClick={() => navigate("/")}
          src="https://seeklogo.com/images/S/skinstore-logo-5281C41BD3-seeklogo.com.png"
          alt="Logo"
        />
      </Box>
      {/* Box2 */}

      <Box padding="20px 20px" backgroundColor="#f2f2f2" textAlign="left">
        <Box
          padding="20px 20px"
          width="50%"
          margin="auto"
          backgroundColor="white"
        >
          {/* boz1 */}
          <Box>
            <Text marginBottom="5%" fontSize="25px" fontWeight="600">
              About You
            </Text>
          </Box>
          {/* boz2  Start*/}
          <Box>
            <Text marginBottom="5%" fontSize="25px" fontWeight="600">
              Sign Up With
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

          {/* boz3 Start */}
          <Box>
            <Text marginBottom="5%" fontSize="25px" fontWeight="600">
              Or create an email account
            </Text>
            <FormControl>
              <FormLabel marginBottom="3%">*Full Name</FormLabel>
              <Input
                name="fullName"
                onChange={handleSignupData}
                marginBottom="3%"
                border="1px solid grey"
                type="name"
              />
              <FormLabel marginBottom="3%">*Email address</FormLabel>
              <Input
                name="email"
                onChange={handleSignupData}
                marginBottom="3%"
                border="1px solid grey"
                type="email"
              />
              <FormLabel marginBottom="3%">*Confirm Email address</FormLabel>
              <Input marginBottom="3%" border="1px solid grey" type="email" />
              <FormLabel marginBottom="3%">*Password</FormLabel>
              <Input
                name="password"
                onChange={handleSignupData}
                marginBottom="3%"
                border="1px solid grey"
                type="password"
              />
              <FormHelperText>
                Include a minimum of 6 characters, and contain at least 1 number
              </FormHelperText>
              <FormLabel marginBottom="3%">*Confirm Password</FormLabel>
              <Input
                marginBottom="3%"
                border="1px solid grey"
                type="password"
              />
              <FormLabel marginBottom="3%">
                Cell Phone Number (Optional)
              </FormLabel>
              <Input marginBottom="3%" border="1px solid grey" type="number" />
              <FormHelperText>
                We will use this number to send occasional promotional messages.
              </FormHelperText>

              <Box
                marginBottom="3%"
                padding="10px 10px"
                backgroundColor="#f2f2f2"
              >
                <FormLabel marginBottom="3%">
                  Referral Code (Optional)
                </FormLabel>
                <Input
                  backgroundColor="white"
                  marginBottom="3%"
                  border="1px solid grey"
                  type="number"
                />
                <FormHelperText>
                  * Your referrals discount is automatically applied at cart
                </FormHelperText>
              </Box>

              <Button
                onClick={handleSignupClick}
                width="100%"
                background="#333333"
                borderRadius="none"
                color="white"
              >
                Sign Up
              </Button>
            </FormControl>
          </Box>
          {/* boz3 End */}

          <Text>
            By proceeding, you are confirming that you agree to our Terms and
            Conditions and Privacy Policy
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default SignupPage;
