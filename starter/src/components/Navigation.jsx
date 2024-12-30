import { Link } from "react-router-dom";
import { Box, Text, Flex, Image, Stack } from "@chakra-ui/react";
// import { CurrentUser } from "./CurrentUser";

const logo = "/img/red_logo_smaller2.png";
export const Navigation = () => {
  //FONT ORBITRON
  const orbitronFontFamily = "Orbitron, sans-serif";
  const orbitronWeight = {
    fontWeights: {
      normal: 400,
      medium: 600,
      semibold: 700,
      bold: 900,
    },
  };

  return (
    <Box
      borderBottom={"1px"}
      borderColor="#d5d1bf"
      minW={"100%"}
      bgColor={"#051622"}
      position="relative"
      zIndex={1000} // Set a high zIndex to ensure it stays on top
      p={4}
    >
      <Flex
      display={"flex"}
        direction={{ base: "row", sm: "row", md: "row" }}
        wrap={"wrap"}
        align={{ base: "center", sm: "center", md: "center" }}
        position={"relative"}
        justifyContent={"space-around"}
        gap={{base:"25", sm:"28%", md:"30%", "2xl": "50%"}}
      
      >
               {/* LOGO Section */}
               <Box
            mb={{ base: 0, sm: 0, md: 0 }}
            position={"relative"}
            display={"flex"}
            justifyContent={{base:"center", sm:"center", md:"start"}}
          >  <Link to="/">
            <Image
              src={logo}
              boxSize="50px"
              objectFit="scale-down"
              alt="logo"
            />
            </Link>
          </Box>

        <Stack
          direction={{base:"column", sm:"row"}}
          position={"relative"}
          right={{base: "-10%", md:"1%", "2xl":"7%"}}
          wrap={"wrap"}
          justify={{ base: "start", sm: "center", md: "flex-end" }}
          spacing={{ base: "16px", sm: "24px", md: "60px" }}
          align={"end"}
        >
   

          {/* Menu Section  */}
          <Link to="/event/1">
            <Text
              color={"#d5d1bf"}
              fontSize={{ base: "12px", sm: "16px", md: "16px" }}
              fontFamily={orbitronFontFamily}
              fontWeight={orbitronWeight.semibold}
              letterSpacing={{ base: "0.1rem", md: "0.05rem" }}
            >
              Event
            </Text>
          </Link>

          <Link to="/about">
            <Text
              color={"#d5d1bf"}
              fontSize={{ base: "12px", sm: "16px", md: "16px" }}
              fontFamily={orbitronFontFamily}
              fontWeight={orbitronWeight.semibold}
              letterSpacing={{ base: "0.1rem", md: "0.05rem" }}
            >
              About
            </Text>
          </Link>

          <Link to="/contact">
            <Text
              color={"#d5d1bf"}
              fontSize={{ base: "12px", sm: "16px", md: "16px" }}
              fontFamily={orbitronFontFamily}
              fontWeight={orbitronWeight.semibold}
              letterSpacing={{ base: "0.1rem", md: "0.05rem" }}
            >
              Contact
            </Text>
          </Link>

          {/* <Box
            position={"relative"}
            left={{ base: 0, sm: 10, md: 400 }}
            mb={{ base: 1, sm: 0, md: 0 }}
            height={"auto"}
            width={"auto"}
            borderRadius={"50%"}
            objectFit={"cover"}
          >
            <CurrentUser />
          </Box> */}
        </Stack>
      </Flex>
    </Box>
  );
};

export default Navigation;
