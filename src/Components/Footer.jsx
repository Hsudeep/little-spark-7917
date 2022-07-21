import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import CallIcon from "@mui/icons-material/Call";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import CookieIcon from "@mui/icons-material/Cookie";
const Footer = () => {
  const helpAndInfo = [
    { icon: <CallIcon />, text: "Customer Service" },
    { icon: <LocalShippingIcon />, text: "Delivery Information" },
    { icon: <AutorenewIcon />, text: "Returns & Refunds" },
    { icon: <QuestionMarkIcon />, text: "Help Center" },
    { icon: <GpsFixedIcon />, text: "Track my order" },
  ];

  const AboutList = [
    "Key Workers Discount",
    "About Us",
    "Affiliate Program",
    "Brand Directory",
    "Coupon Codes",
    "Refer A Friend",
    "Student Discount",
    "Join SkinStore Experts",
  ];

  const LegalList = [
    "Cookie Information",
    "Privacy Policy",
    "Terms & Conditions",
    "Modern Slavery Statement",
  ];
  return (
    <Box marginTop="5%" borderTop="1px solid #333333" padding="20px 20px">
      <Flex justifyContent="space-between">
        {/* MainBox1 */}
        <Box width="40%">
          {/* Box1 */}
          <Box>
            <Box>
              <Text fontWeight="600">
                Sign up to our email list and receive 20% off your next order
              </Text>
            </Box>
            <Box marginTop="10px">
              <Button
                _hover={{ bgColor: "none" }}
                fontWeight="400"
                borderRadius="none"
                color="white"
                bgColor="#333333"
              >
                SIGN UP
              </Button>
            </Box>
          </Box>

          {/* Box2 */}
          <Box
            padding="10px 10px"
            borderTop="1px solid #333333"
            marginTop="20px"
          >
            <Text marginBottom="10px" fontWeight="600">
              Help & Information
            </Text>
            {helpAndInfo.map((elem) => (
              <Box marginBottom="10px">
                <Flex gap="10px">
                  <Box>{elem.icon}</Box>
                  <Text>{elem.text}</Text>
                </Flex>
              </Box>
            ))}
          </Box>

          {/* Box3 */}
          <Box>
            <Text marginBottom="10px">Accessibilty</Text>
            <Flex gap="10px">
              <Box>
                <CookieIcon />
              </Box>
              <Text>Cookie Settings</Text>
            </Flex>
          </Box>
        </Box>
        {/* MainBox2 */}
        <Box width="55%">
          {/* Box1 */}
          <Box>
            <Box marginBottom="10px">
              <Text>Connect with us</Text>
            </Box>
            <Box fontSize="40px">
              <FacebookRoundedIcon fontSize="inherit" />
              <InstagramIcon fontSize="inherit" />
              <TwitterIcon fontSize="inherit" />
              <PinterestIcon fontSize="inherit" />
              <AddReactionIcon fontSize="inherit" />
            </Box>
          </Box>

          <Box>
            <Flex justifyContent="space-between">
              {/* Box2 */}
              <Box padding="10px 10px" borderTop="1px solid #333333">
                <Text marginBottom="10px" fontWeight="600">
                  About SkinStore
                </Text>
                {AboutList.map((elem) => (
                  <Text marginBottom="10px">{elem}</Text>
                ))}
              </Box>
              {/* Box3 */}

              <Box padding="10px 10px" borderTop="1px solid #333333">
                <Text marginBottom="10px" fontWeight="600">
                  Legal
                </Text>
                {LegalList.map((elem) => (
                  <Text marginBottom="10px">{elem}</Text>
                ))}
              </Box>
              {/* Box4 */}

              <Box padding="10px 10px" borderTop="1px solid #333333">
                <Text marginBottom="10px" fontWeight="600">
                  How to Contact Us
                </Text>
                <Text marginBottom="10px">Message Us</Text>
                <Text marginBottom="10px">Free Beauty Consultations</Text>
              </Box>
              {/* Box4 End */}
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
