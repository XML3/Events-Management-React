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
      borderColor="#162737"
      maxW={"100%"}
      bgColor={"#FFFDE1"}
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000} // Set a high zIndex to ensure it stays on top
      p={4}
    >
      <Flex
        direction={{ base: "row", sm: "row", md: "row" }}
        wrap={"wrap"}
        justify={{ base: "start", sm: "center", md: "center" }}
        align={{ base: "start", sm: "center", md: "center" }}
        position={"relative"}
        right={{ base: 3, sm: 10, md: 0 }}
      >
        <Stack
          direction={"row"}
          position={"relative"}
          right={{ base: 0, sm: 0, md: 0 }}
          left={{ base: 1, sm: 0, md: "600px" }}
          wrap={"wrap"}
          justify={{ base: "center", sm: "center", md: "flex-end" }}
          spacing={{ base: "14px", sm: "24px", md: "60px" }}
          align={"center"}
        >
          {/* LOGO Section */}
          <Box
            mb={{ base: 0, sm: 0, md: 0 }}
            position={"relative"}
            right={{ base: 0, sm: 10, md: 1230 }}
          >
            <Image
              src={logo}
              boxSize={{ base: "30px", sm: "50px", md: "50px" }}
              objectFit="scale-down"
              alt="logo"
            />
          </Box>

          {/* Menu Section  */}

          <Text
            color="#051622"
            fontSize={{ base: "10px", sm: "16px", md: "16px" }}
            fontFamily={orbitronFontFamily}
            fontWeight={orbitronWeight.semibold}
            letterSpacing={{ base: "0.1rem", md: "0.05rem" }}
          >
            <Link to="/">Home</Link>
          </Text>

          <Link to="/event/1">
            <Text
              color={"#051622"}
              fontSize={{ base: "10px", sm: "16px", md: "16px" }}
              fontFamily={orbitronFontFamily}
              fontWeight={orbitronWeight.semibold}
              letterSpacing={{ base: "0.1rem", md: "0.05rem" }}
            >
              Event
            </Text>
          </Link>

          <Link to="/about">
            <Text
              color={"#051622"}
              fontSize={{ base: "10px", sm: "16px", md: "16px" }}
              fontFamily={orbitronFontFamily}
              fontWeight={orbitronWeight.semibold}
              letterSpacing={{ base: "0.1rem", md: "0.05rem" }}
            >
              About
            </Text>
          </Link>

          <Link to="/contact">
            <Text
              color={"#051622"}
              fontSize={{ base: "10px", sm: "16px", md: "16px" }}
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
