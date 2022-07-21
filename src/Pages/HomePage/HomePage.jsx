import {
  Box,
  Heading,
  Image,
  Text,
  Button,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import SimpleImageSlider from "react-simple-image-slider";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import Product from "../../Components/Product";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductWithStar from "../../Components/ProductWithStar";
const HomePage = () => {
  const images = [
    {
      url: "https://static.thcdn.com/images/xlarge/webp/widgets/121-us/04/0712-STDCRE-38046-SS-MH-Photography-July-22-REMAINING-BATCHING-Shot2-1180x450-021804.png",
    },
    {
      url: "https://static.thcdn.com/images/xlarge/webp/widgets/121-us/16/0701-STDCRE-38244-SS-BME-Skinstore-July-4-Assets-Shot_01-1180x450-095516.jpg",
    },
    {
      url: "https://static.thcdn.com/images/xlarge/webp/widgets/121-us/38/1180x450-082838.jpg",
    },
  ];

  const trendingOffersPart = [
    {
      id: 1,
      image:
        "https://static.thcdn.com/images/small/webp/widgets/121-us/39/1224-STDCRE-28425-WC-SS-SkinStore-January-Photography-2022-BATCHING_Shot17-600x600-053341-095839.jpg",
      head: "$21 SkinCeuticals Gift",
      description:
        "SkinCeuticals Retexturing Activator 4ml (worth $21) when you spend $150 or more on the brand.",
    },
    {
      id: 2,
      image:
        "https://static.thcdn.com/images/small/webp/widgets/121-us/27/LF-EF-US-Comps-REN-380x312-091127.jpg",
      head: "25% off sun care",
      description:
        "Pamper your summer skin with 25% off select sun care on SkinStore.",
    },
    {
      id: 3,
      image:
        "https://static.thcdn.com/images/small/webp/widgets/121-us/21/0807-STDCRE-38045-SS-AM-Photography-Shot_10-500x500-052921.jpg",
      head: "Brand of the Month: Elemis + Gift",
      description:
        "Plus, receive an Elemis RIXO Gift Set (Worth $75) when you spend $100 or more on the brand.",
    },
    {
      id: 4,
      image:
        "https://static.thcdn.com/images/small/webp/widgets/121-us/15/decorte.products-082615.jpeg",
      head: "30% off select Decorté",
      description:
        "Enjoy 30% off select Decorté, and experience the wisdom of traditional Japanese skincare, powered by unparalleled techno-innovation to transform your skin.",
    },
    {
      id: 5,
      image:
        "https://static.thcdn.com/images/small/webp/widgets/121-us/11/original-Shop_the_Range_0002_Skincare-053111.jpg",
      head: "$24 PÜR Gift",
      description:
        "Receive a PUR Best Sellers Set (worth $24) when you spend $60 or more on the brand.",
    },
    {
      id: 6,
      image:
        "https://static.thcdn.com/images/small/webp/widgets/121-us/26/SkinMedica.products-092426.jpg",
      head: "10% off SkinMedica + extra 20% off with Auto Replenishment",
      description:
        "Receive a Free SkinMedica Instant Bright Eye Cream .07oz (worth $14) when you spend $130 or more on the brand. Plus, receive an EXTRA 20% off when you subscribe to your favorite SkinMedica products.",
    },
  ];

  const categoryPart = [
    {
      image:
        "https://static.thcdn.com/images/small/webp/widgets/121-us/01/Page-001-025201.png",
    },
    {
      image:
        "https://static.thcdn.com/images/small/webp/widgets/121-us/09/Page-002-025209.png",
    },
    {
      image:
        "https://static.thcdn.com/images/small/webp/widgets/121-us/17/Page-003-025217.png",
    },
    {
      image:
        "https://static.thcdn.com/images/small/webp/widgets/121-us/21/Page-004-025221.png",
    },
    {
      image:
        "https://static.thcdn.com/images/small/webp/widgets/121-us/40/Page-005-025240.png",
    },
    {
      image:
        "https://static.thcdn.com/images/small/webp/widgets/121-us/58/Page-006-025258.png",
    },
  ];

  const famousProducts = [
    {
      id: 1,
      image:
        "https://static.thcdn.com/images/small/webp//productimg/480/480/11289609-1174892770940184.jpg",
      heading:
        "SkinCeuticals C E Ferulic with 15% L-Ascorbic Acid Vitamin C Serum 30ml",
      price: "$169.00",
    },
    {
      id: 2,
      image:
        "https://static.thcdn.com/images/small/webp//productimg/480/480/11588281-8764882139037003.jpg",
      heading:
        "Sunday Riley GOOD GENES All-In-One Lactic Acid Treatment (0.5oz)",
      price: "$122.00",
    },
    {
      id: 3,
      image:
        "https://static.thcdn.com/images/small/webp//productimg/480/480/13547814-8054931654720532.jpg",
      heading: "Borghese Borghese Acqua Ristorativo Hydrating Concentrate 30ml",
      price: "$96.00",
    },
    {
      id: 4,
      image:
        "https://static.thcdn.com/images/small/webp//productimg/480/480/11523630-6274891243712913.jpg",
      heading: "Elemis Pro-Collagen Cleansing Balm 100g",
      price: "$66.00",
    },
  ];

  const BrandImage = [
    "https://static.thcdn.com/images/small/webp/widgets/121-us/26/180x72_4_233548301_CA_SS_Logo_Amend_BAU_THG0030424-041301-124116-063126.png",
    "https://static.thcdn.com/images/small/webp/widgets/121-us/18/original-logo-1024x383-035229-063318.png",
    "https://static.thcdn.com/images/small/webp/widgets/121-us/11/Revision_Skincare_Logo_without_Tag_Line-052511.png",
    "https://static.thcdn.com/images/small/webp/widgets/121-us/46/original-NF_Skinstore_Banner_Logo_Color_320x140-01-011402-010546.png",
    "https://static.thcdn.com/images/small/webp/widgets/121-us/27/220322-ELTAMD-LOGO-RGB-01-065127.png",
    "https://static.thcdn.com/images/small/webp/widgets/121-us/07/original-LOGO-2022_SkinStore_Landing_Page-BLACK-060107.png",
  ];

  const trendCarousel = [
    {
      id: 1,
      image:
        "https://static.thcdn.com/images/xsmall/webp//productimg/original/11289134-1244967222706465.jpg",
      text: "Peter Thomas Roth Instant FirmX Eye",
      off: "15% off with code SS15 + Gift",
      price: "$38.00",
      rating: 4,
    },
    {
      id: 2,
      image:
        "https://static.thcdn.com/images/xsmall/webp//productimg/1600/1600/12538013-4764765050522444.jpg",
      text: "EltaMD UV Clear SPF46 Broad-Spectrum Duo (Worth $72)",
      off: "12-Piece Beauty Bag (Worth $104) @ $150",
      price: "$70.00",
      rating: 3,
    },
    {
      id: 3,
      image:
        "https://static.thcdn.com/images/xsmall/webp/productimg/1600/1600/11428984-1564528377683031.jpg",
      text: "La Roche-Posay Hydraphase Intense Eyes 15ml",
      off: "12-Piece Beauty Bag (Worth $104) @ $150",
      price: "$35.99",
      rating: 5,
    },
    {
      id: 4,
      image:
        "https://static.thcdn.com/images/xsmall/webp//productimg/original/11429304-1984938699383949.jpg",
      text: "The Ordinary AHA 30% + BHA 2% Peeling Solution 30ml",
      off: "12-Piece Beauty Bag (Worth $104) @ $150",
      price: "$8",
      rating: 3,
    },
    {
      id: 5,
      image:
        "https://static.thcdn.com/images/xsmall/webp//productimg/original/11805644-1424900827409197.jpg",
      text: "Murad Outsmart Acne Clarifying Treatment",
      off: "Murad Gift",
      price: "$46.60",
      rating: 4,
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const Blog = [
    {
      image:
        "https://static.thcdn.com/images/small/webp/widgets/121-us/10/original-0328-STDCRE-33849-WC-SS-April-Photography-Batching-Shot07-500x500-030310.jpg",
      head: "SkinCeuticals: Vitamin C Beyond the Face",
      desc: "SkinCeuticals believes in celebrating the skin-protective and rejuvenating powers of vitamin C every day, but this year they’re making sure your eyes and lips get in on the antioxidant action (and benefits).",
    },
    {
      image:
        "https://static.thcdn.com/images/small/webp/widgets/121-us/51/original-0224-STDCRE-32153-SS-BME-Skinstore-March-2022-Photography-Batching-Shot_13-500x500-023351.jpg",
      head: "Which TriPollar Device is Right for You?",
      desc: "In 2008, TriPollar launched themselves into the home beauty sphere with an aim to innovate the technology behind at-home treatments and devices.",
    },
    {
      image:
        "https://static.thcdn.com/images/small/webp/widgets/121-us/53/2004_THG0034749_SS_MAY_2022_SHOT_33_MAIN-071653.jpg",
      head: "The HairStore at SkinStore: What Your Routine Needs",
      desc: "Give your hair the same love and care you give your skin by shopping The HairStore at SkinStore.",
    },
  ];
  return (
    <Box>
      <Navbar />
      <Box>
        {/* Image Carousel / HomePage Top Content */}
        <Box marginTop="10px">
          <SimpleImageSlider
            width="100%"
            height={504}
            images={images}
            showBullets={true}
            showNavs={true}
            autoPlay={true}
          />
        </Box>
        {/* Image Carousel / HomePage Top Content EENNDD */}

        {/* Homepage Trending Offers at top Start */}
        <Box padding="10px 10px">
          <Heading marginTop="20px" textAlign="center">
            Trending Offers
          </Heading>
          <SimpleGrid columns={3} spacing={5}>
            {trendingOffersPart.map((elem) => (
              <Box
                marginTop="20px"
                key={elem.id}
                padding="10px 10px"
                textAlign="center"
              >
                <Link to="/skincare">
                  <Image borderRadius="50%" src={elem.image}></Image>
                </Link>
                <Text fontWeight="500" fontSize="20px">
                  {elem.head}
                </Text>
                <Text fontWeight="300" fontSize="13px">
                  {elem.description}
                </Text>
                <Box marginTop="5px " h="70%">
                  <Button
                    background="white"
                    borderRadius="none"
                    height="10%"
                    width="28%"
                    fontSize="15px"
                    fontWeight="300"
                    border="1px solid"
                  >
                    SHOP NOW
                  </Button>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
        {/* Homepage Trending Offers at top End */}
        {/* Homepage Category Offers at mid START */}
        <Box>
          <Heading marginTop="20px" textAlign="center">
            Shop by Category
          </Heading>
          <Box padding="20px 20px">
            <Flex gap="30px" textAlign="center">
              {categoryPart.map((elem) => (
                <Link to="/skincare">
                  <Image
                    _hover={{ opacity: "10" }}
                    opacity="0.7"
                    src={elem.image}
                  ></Image>
                </Link>
              ))}
            </Flex>
          </Box>
        </Box>
        {/* Homepage Category Offers at mid END */}

        {/* Homepage People Buying at mid START */}

        <Box padding="20px 20px">
          <Heading textAlign="center" marginTop="10px">
            What People Are Buying Right Now
          </Heading>
          <Flex marginTop="10px" gap="20px">
            {famousProducts.map((elem) => (
              <Product
                id={elem.id}
                image={elem.image}
                heading={elem.heading}
                price={elem.price}
              />
            ))}
          </Flex>
        </Box>
        {/* Homepage People Buying at mid END */}

        {/* Homepage Brands at mid Start */}

        <Box marginTop="10px" padding="20px 20px">
          <Flex justifyContent="space-between">
            {BrandImage.map((elem) => (
              <Image h="100px" w="200px" src={elem}></Image>
            ))}
          </Flex>
        </Box>
        {/* Homepage Brands at mid END */}

        {/* Homepage Trending  Now at bottom START */}
        <Box padding="10px 10px">
          <Heading marginBottom="10px" textAlign="center">
            Trednding Now
          </Heading>

          <Flex gap="20px">
            {/* box 1  */}
            <Box width="40%">
              <Image src="https://static.thcdn.com/images/medium/webp/widgets/121-us/09/4P-Goop-with-bottle-and-bubbles-600x600-100209.jpg"></Image>
            </Box>
            {/* box 2 */}

            <Box width="60%">
              <Carousel responsive={responsive}>
                {trendCarousel.map((elem) => (
                  <ProductWithStar
                    image={elem.image}
                    text={elem.text}
                    id={elem.id}
                    price={elem.price}
                    off={elem.off}
                  />
                ))}
              </Carousel>
            </Box>
          </Flex>
        </Box>

        {/* Homepage Trending  Now at bottom END */}

        {/* HomePage Over The Blog Start */}

        <Box padding="10px 10px">
          <Heading marginTop="20px" textAlign="center">
            Trending Offers
          </Heading>
          <SimpleGrid columns={3} spacing={5}>
            {Blog.map((elem) => (
              <Box
                marginTop="20px"
                key={elem.id}
                padding="10px 10px"
                textAlign="center"
              >
                <Link to="/skincare">
                  <Image borderRadius="50%" src={elem.image}></Image>
                </Link>
                <Text fontWeight="400" fontSize="20px">
                  {elem.head}
                </Text>
                <Text fontWeight="300" fontSize="13px">
                  {elem.desc}
                </Text>
                <Box marginTop="10px " h="70%">
                  <Button
                    background="white"
                    borderRadius="none"
                    height="10%"
                    width="28%"
                    fontSize="15px"
                    fontWeight="300"
                    border="1px solid"
                  >
                    READ MORE
                  </Button>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
        {/* HomePage Over The Blog End */}
      </Box>
      <Footer />
    </Box>
  );
};

export default HomePage;
