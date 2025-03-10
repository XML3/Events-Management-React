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
      minW={"100%"}
      bgColor={"#0f0f0f"}
      position="relative"
      zIndex={1000} // Set a high zIndex to ensure it stays on top
      paddingTop={2}
      paddingBottom={2}
      px={{ base: 1, sm: 8 }}
    >
      <Flex
        display={"flex"}
        direction={"row"}
        wrap={"wrap"}
        align={{ base: "center", sm: "center", md: "center" }}
        position={"relative"}
        justifyContent={{ base: "space-between", sm: "space-around" }}
        gap={{ base: "0", sm: "28%", md: "30%", "2xl": "45%" }}
        right={{ base: 0, sm: 0 }}
      >
        {/* LOGO Section */}
        <Box
          mb={{ base: 0, sm: 0, md: 0 }}
          position={"relative"}
          left={{ base: "0rem", sm: 0, md: "-2%", "2xl": "0%" }}
          display={"flex"}
          justifyContent={"start"}
        >
          {" "}
          <Link to="/">
            <Image
              src={logo}
              boxSize={{ base: "45px", sm: "50px", md: "60px", "2xl": "55px" }}
              objectFit="scale-down"
              alt="logo"
              _hover={{ transform: "scale(1.08)" }}
            />
          </Link>
        </Box>

        <Stack
          direction={"row"}
          position={"relative"}
          right={{ base: "1%", sm: "1%", md: "-3%", "2xl": "0%" }}
          wrap={"wrap"}
          justify={{ base: "flex-start", sm: "center", md: "flex-end" }}
          spacing={{ base: "10px", sm: "24px", md: "60px" }}
          align={"end"}
        >
          {/* Menu Section  */}
          <Link to="/event/1">
            <Text
              fontSize={{
                base: "12px",
                sm: "14px",
                md: "16px",
                "2xl": "0.7rem",
              }}
              fontFamily={orbitronFontFamily}
              fontWeight={600}
              letterSpacing={{ base: "0.1rem", md: "0.05rem" }}
              _hover={{ transform: "scale(1.08)", bgColor: "#c50d34" }}
              bgColor={"rgba(213, 209, 191, 1)"}
              color={"#0f0f0f"}
              px={{ base: "10px", sm: "25px", md: "40px" }}
              py={2}
              borderRadius="8px"
              textAlign="center"
              display="inline-block"
            >
              Event
            </Text>
          </Link>

          <Link to="/about">
            <Text
              fontSize={{
                base: "12px",
                sm: "14px",
                md: "16px",
                "2xl": "0.7rem",
              }}
              fontFamily={orbitronFontFamily}
              fontWeight={600}
              letterSpacing={{ base: "0.1rem", md: "0.05rem" }}
              _hover={{ transform: "scale(1.08)", bgColor: "#c50d34" }}
              bgColor={"rgba(213, 209, 191, 1)"}
              color={"#0f0f0f"}
              px={{ base: "10px", sm: "25px", md: "40px" }}
              py={2}
              borderRadius="8px"
              textAlign="center"
              display="inline-block"
            >
              About
            </Text>
          </Link>

          <Link to="/contact">
            <Text
              fontSize={{
                base: "12px",
                sm: "14px",
                md: "16px",
                "2xl": "0.7rem",
              }}
              fontFamily={orbitronFontFamily}
              fontWeight={600}
              letterSpacing={{ base: "0.1rem", md: "0.05rem" }}
              _hover={{ transform: "scale(1.08)", bgColor: "#c50d34" }}
              bgColor={"rgba(213, 209, 191, 1)"}
              color={"#0f0f0f"}
              px={{ base: "16px", sm: "25px", md: "40px" }}
              py={2}
              borderRadius="8px"
              textAlign="center"
              display="inline-block"
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
