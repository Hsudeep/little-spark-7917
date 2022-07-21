import React from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Spacer,
  Text,
} from "@chakra-ui/react";
import SearchIcon from "@mui/icons-material/Search";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import StayCurrentPortraitOutlinedIcon from "@mui/icons-material/StayCurrentPortraitOutlined";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const pages = [
    { to: "/skincare", pagesLink: "Brands" },
    { to: "/skincare", pagesLink: "Summer Shop" },
    { to: "/skincare", pagesLink: "Sale" },
    { to: "/skincare", pagesLink: "Build a Routine" },
    { to: "/skincare", pagesLink: "Skin Care" },
    { to: "/skincare", pagesLink: "Hair" },
    { to: "/skincare", pagesLink: "Makeup" },
    { to: "/skincare", pagesLink: "Tools" },
    { to: "/skincare", pagesLink: "Bath & Body" },
    { to: "/skincare", pagesLink: "Self Care" },
    { to: "/skincare", pagesLink: "Fragrance" },
    { to: "/skincare", pagesLink: "News & Trending" },
    { to: "/skincare", pagesLink: "Advice" },
  ];

  const extras = [
    { icon: <LocalShippingIcon />, text: "FREE US Shipping Over $49" },
    { icon: <AcUnitIcon />, text: "Refer a Friend, Get $15" },
    {
      icon: <AssignmentTurnedInOutlinedIcon />,
      text: "New Customers Save 20% - Use Code NEWBIE",
    },
    {
      icon: <StayCurrentPortraitOutlinedIcon />,
      text: "FREE US Shipping Over $49",
    },
  ];
  return (
    <Box color="#333333">
      {/* Navbar Top */}
      <Box padding="30px 30px " borderBottom="2px solid black">
        <Flex justifyContent="space-between">
          <Box>
            <Image
              width="65%"
              src="https://seeklogo.com/images/S/skinstore-logo-5281C41BD3-seeklogo.com.png"
              alt="Logo"
            />
          </Box>
          <Spacer />
          {/* 2 */}
          <Box width="35%">
            <Flex>
              <Input
                _hover={{ bgColor: "none" }}
                borderRadius="none"
                borderBlockStartColor="black"
                borderBlockEndColor="black"
                borderLeftColor="black"
                width="100%"
                placeholder="Search for a product or a brand"
              />
              <Spacer />
              <Button
                _hover={{ bgColor: "none" }}
                borderRadius="none"
                borderBlockStartColor="black"
                borderBlockEndColor="black"
                borderRightColor="black"
                bgColor="none"
              >
                <SearchIcon />
              </Button>
            </Flex>
          </Box>
          <Spacer />
          {/* 3 */}
          <Box marginRight="5%">
            <Flex gap="30%">
              <Box>
                <Flex gap="10%">
                  <Box fontSize="28px">
                    <ManageAccountsOutlinedIcon fontSize="inherit" />
                  </Box>
                  <Text fontSize="20px">
                    <NavLink to="/signup">Account</NavLink>
                  </Text>
                </Flex>
              </Box>
              <Box>
                <NavLink to="/cart">
                  <Flex gap="10%">
                    <Box fontSize="28px">
                      <ShoppingCartOutlinedIcon fontSize="inherit" />
                    </Box>
                    <Text fontSize="20px">Cart</Text>
                  </Flex>
                </NavLink>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
      {/* Navbar Mid */}
      <Box padding="10px 10px">
        <Flex justifyContent="space-between">
          {pages.map((elem) => (
            <Box _hover={{ backgroundColor: "#333333", color: "white" }}>
              <NavLink
                // style={(isActive) => ({
                //   color: isActive ? "green" : "white",
                //   bgColor: isActive ? "white" : "#333333",
                // })}
                to={elem.to}
              >
                {elem.pagesLink}
              </NavLink>
            </Box>
          ))}
        </Flex>
      </Box>

      {/* Navbar End */}

      <Box padding="20px 20px" bgColor="#f2f2f2">
        <Box>
          <Flex justifyContent="space-evenly">
            {extras.map((elem) => (
              <Box>
                <Flex gap="10px">
                  <Box>{elem.icon}</Box>
                  <Text>{elem.text}</Text>
                </Flex>
              </Box>
            ))}
          </Flex>
        </Box>
      </Box>

      {/* Navbar End part 2 */}

      <Box
        padding="5px 5px"
        textAlign="center"
        marginTop="10px"
        background="#333333"
      >
        <Text color="white" fontWeight="600" fontSize="20px">
          15% off with code SS15 + 12-Piece Beauty Bag (Worth $104) @ $150 |
          Shop now
        </Text>
      </Box>
    </Box>
  );
};

export default Navbar;
