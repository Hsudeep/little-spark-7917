import { Box } from "@chakra-ui/react";
import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";

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
      </Box>
      <Footer />
    </Box>
  );
};

export default HomePage;
