import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Select,
  SimpleGrid,
  Text,
  useToast,
} from "@chakra-ui/react";
import ProductWithStar from "../../Components/ProductWithStar";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { getData, setCartData } from "../axiosApi";
import SkinCareLeftFilters from "./SkinCareLeftFilters";
import SkinCareProducts from "./SkinCareProducts";
import SkincareFormatFilter from "./SkincareFormatFilter";
const SkinCarePage = () => {
  const [page, setPage] = useState(1);
  const [sorting, setsorting] = useState("asc");
  const toast = useToast();
  const handleOrder = (e) => {
    setsorting(e.target.value);
    console.log(sorting);
  };
  const [beta, setBeta] = useState([]);

  const productData = (page) => {
    getData(page)
      .then((r) => setBeta(r.data))
      .catch((e) => console.log(e));
  };

  const handleAddCartData = (
    productImage,
    productName,
    productOffer,
    productPrice,
    id,
    count,
    subTotal
  ) => {
    setCartData({
      productImage,
      productName,
      productOffer,
      productPrice,
      id,
      count,
      subTotal,
    }).then(() => productData());

    toast({
      title: "Item Added to Cart",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
  };
  useState(() => {
    productData(page);
  }, [page]);
  return (
    <Box>
      <Navbar />
      {/* Box1 */}
      <Box marginTop="5%">
        <Text>Home / Skin Care / View All Skincare</Text>
      </Box>
      <Box padding="10px 10px">
        <Flex gap="2%">
          {/* Box1 */}
          <Box padding="10px 10px" width="40%">
            <Box marginBottom="5%">
              <SkinCareLeftFilters />
            </Box>
            <Box marginBottom="5%">
              <SkincareFormatFilter />
            </Box>
            <Box marginBottom="5%">
              <SkinCareProducts />
            </Box>
            <Box marginBottom="5%">
              <SkinCareLeftFilters />
            </Box>
            <Box marginBottom="5%">
              <SkinCareProducts />
            </Box>
            <Box marginBottom="5%">
              <SkincareFormatFilter />
            </Box>
          </Box>
          {/* Box2 */}
          <Box>
            {/* Top BOx 1 */}
            <Box>
              <Heading>View All Skincare</Heading>
              <Text fontSize="12px">`4145 Results`</Text>
              <Box marginTop="20px" fontSize="12px" marginBottom="3%">
                <Text>
                  Radiant skin starts with effective skincare, and here at
                  SkinStore we’ve curated the very best skincare brands. Shop
                  with the peace of mind of our 20 years experience as an
                  authorized retailer for brands such as Arcona, Caudalie,
                  Dermalogica, Elizabeth Arden, First Aid Beauty, Murad, Obagi,
                  SkinCeuticals, SkinMedica, StriVectin & many more! Take your
                  pick from cleansers, moisturizers, masks, serums and more to
                  teat all your skincare concerns from anti-aging to acne.
                </Text>
              </Box>
            </Box>

            {/* TOp box 1 End */}

            {/* Pagination and sort box */}

            <Box>
              <Flex justifyContent="space-between">
                {/* <Box1></Box1> */}
                <Box>
                  <Flex gap="20px">
                    <Text>Sort by</Text>
                    <Box>
                      <Select
                        onClick={handleOrder}
                        placeholder="Default"
                        borderRadius="none"
                        border="1px solid black"
                        width="100%"
                      >
                        <option>Priority</option>
                        <option>Popularity</option>
                        <option>Price: High to Low</option>
                        <option>Price: Low to High</option>
                        <option value="desc">A-Z</option>
                        <option>Newest Arrivals</option>
                        <option>Percentage Discount</option>
                      </Select>
                    </Box>
                  </Flex>
                </Box>
                {/* <Box1END></Box1END> */}

                {/* <Box2></Box2> */}
                <Box opacity="0.8">
                  <Flex gap="2px">
                    <Button
                      disabled={page === 1}
                      onClick={() => {
                        setPage(page - 1);
                        productData(page);
                      }}
                      bgColor="white"
                      borderRadius="none"
                      border="1px solid grey"
                      w="30%"
                      textAlign="center"
                    >
                      Prev
                    </Button>
                    <Box
                      height="100%"
                      border="1px solid"
                      w="30%"
                      textAlign="center"
                    >
                      <Text
                        fontSize="25px"
                        height="100%"
                        backgroundColor="#333333"
                        color="white"
                      >
                        {page}
                      </Text>
                    </Box>
                    <Button
                      onClick={() => {
                        setPage(page + 1);
                        productData(page);
                      }}
                      bgColor="white"
                      borderRadius="none"
                      border="1px solid grey"
                      w="30%"
                      textAlign="center"
                    >
                      Next
                    </Button>
                  </Flex>
                </Box>

                {/* <Box2END></Box2END> */}
              </Flex>
            </Box>
            {/* Pagination and sort box  END*/}

            {/* <ProductsSTARAT></ProductsSTARAT> */}
            <Box>
              <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
                {beta.map((e) => (
                  <ProductWithStar
                    image={e.productImage}
                    text={e.productName}
                    off={e.productOffer}
                    id={e.id}
                    price={e.productPrice}
                    count={1}
                    subTotal={e.productPrice}
                    handleAddCartData={handleAddCartData}
                  />
                ))}
              </SimpleGrid>
            </Box>
            {/* <ProductsENDDD></ProductsENDDD> */}
          </Box>
        </Flex>
      </Box>
      <Footer />
    </Box>
  );
};

export default SkinCarePage;
