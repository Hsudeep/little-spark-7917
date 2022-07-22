import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import React from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useState } from "react";
import { getCartData } from "../axiosApi";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
const CartPage = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const cartData = () => {
    getCartData()
      .then((r) => setData(r.data))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    cartData();
  }, []);
  return (
    <Box>
      <Navbar/>
      <Box margin="3%" padding="20px 20px">
        {/* <TOP></TOP> */}
        <Box>
          <Flex justifyContent="space-between">
            <Box>
              <Heading fontWeight="400">Your Cart</Heading>
            </Box>
            <Box>
              <Button
                onClick={() => {
                  navigate("/checkout");
                }}
                fontWeight="400"
                color="white"
                backgroundColor="#333333"
                borderRadius="none"
              >
                <Flex>
                  <LockOutlinedIcon />
                  <Text>CHECKOUT SECURELY NOW</Text>
                </Flex>
              </Button>
            </Box>
          </Flex>
        </Box>

        {/* <TOpEND></TOpEND> */}
        {/* <Products></Products> */}
        <Box marginTop="5%" borderTop="1px solid lightgrey">
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Items</Th>
                  <Th>Price</Th>
                  <Th>Quantity</Th>
                  <Th>Subtotal</Th>
                  <Th color="white">jaadu</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.map((e) => (
                  <Tr>
                    <Td>
                      <Box>
                        <Flex gap="20px">
                          <Image
                            height="70px"
                            width="70px"
                            src={e.productImage}
                          ></Image>
                          <Box>
                            <Text fontSize="15px" fontWeight="300">
                              {e.productName}
                            </Text>
                          </Box>
                        </Flex>
                      </Box>
                    </Td>
                    {/* <Price></Price> */}
                    <Td>${e.productPrice}</Td>
                    {/* <Price></Price> */}
                    {/* <Quantity></Quantity> */}
                    <Td>
                      <Box>
                        <Flex gap="10%">
                          <Button
                            borderRadius="none"
                            bgColor="#ebebeb"
                            fontSize="20px"
                            height="30px"
                            width="5px"
                          >
                            -
                          </Button>
                          <Text>1</Text>
                          <Button
                            bgColor="#ebebeb"
                            borderRadius="none"
                            fontSize="20px"
                            height="30px"
                            width="5px"
                          >
                            +
                          </Button>
                        </Flex>
                      </Box>
                    </Td>

                    {/* <Quantity></Quantity> */}

                    {/* <Sutotal></Sutotal> */}

                    <Td>
                      <Text fontWeight="500">${e.productPrice}</Text>
                    </Td>

                    {/* <Sutotal></Sutotal> */}

                    {/* <Delete></Delete> */}
                    <Td>
                      <Button borderRadius="50%">X</Button>
                    </Td>
                    {/* <Delete></Delete> */}
                  </Tr>
                ))}
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th color="white">To convert</Th>
                  <Th color="white">into</Th>
                  <Th>Cart Subtotal:</Th>
                  <Th>$573.99</Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </Box>
        {/* <Products></Products> */}

        <Box marginTop="5%" borderTop="1px solid lightgrey">
          <Flex marginTop="2%" justifyContent="space-between">
            <Button
              onClick={() => {
                navigate("/skincare");
              }}
              fontWeight="400"
              backgroundColor="white"
              borderRadius="none"
            >
              CONTINUE SHOPPING
            </Button>
            <Button
              onClick={() => {
                navigate("/checkout");
              }}
              fontWeight="400"
              color="white"
              backgroundColor="#333333"
              borderRadius="none"
            >
              <Flex>
                <LockOutlinedIcon />
                <Text>CHECKOUT SECURELY NOW</Text>
              </Flex>
            </Button>
          </Flex>
        </Box>
      </Box>
      <Footer/>
    </Box>
  );
};

export default CartPage;
