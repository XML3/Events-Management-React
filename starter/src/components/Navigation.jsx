import { Link } from "react-router-dom";
import { Box, Text, Flex, Image, Stack } from "@chakra-ui/react";
import logo from "../assets/img/red_log_smaller2.png";

export const Navigation = () => {
  const logo = "../assets/img/red_log_smaller2.png";
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
      borderBottom={"2px"}
      borderColor="gray.700"
      maxW={"100%"}
      bgColor={"gray.900"}
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
        align={{ base: "start", md: "center" }}
        position={"relative"}
        right={{ base: 3, sm: 0, md: 0 }}
      >
        <Stack
          direction={{ base: "row", sm: "row", md: "row" }}
          position={"relative"}
          right={{ base: 0, sm: 10, md: 10 }}
          wrap={"wrap"}
          justify={{ base: "center", sm: "center", md: "center" }}
          spacing={{ base: "14px", sm: "34px", md: "120px" }}
        >
          {/* LOGO Section */}
          <Box
            mb={{ base: 1, sm: 0, md: 0 }}
            position={"relative"}
            right={{ base: 0, sm: 10, md: 460 }}
          >
            <Image
              src={logo}
              boxSize="40px"
              objectFit="scale-down"
              alt="logo"
            />
          </Box>

          {/* Menu Section  */}

          <Text
            color="gray.200"
            fontSize={{ base: "10px", sm: "16px", md: "18px" }}
            mb={{ base: 2, md: 0 }}
            mt={{ base: 2, md: 0 }}
            fontFamily={orbitronFontFamily}
            fontWeight={orbitronWeight.semibold}
            letterSpacing={{ base: "0.1rem", md: "0.1rem" }}
          >
            <Link to="/events">Home</Link>
          </Text>

          <Link to="/event/1">
            <Text
              color={"gray.200"}
              mt={{ base: 2, md: 0 }}
              fontSize={{ base: "10px", sm: "16px", md: "18px" }}
              fontFamily={orbitronFontFamily}
              fontWeight={orbitronWeight.semibold}
              letterSpacing={{ base: "0.1rem", md: "0.1rem" }}
            >
              Event
            </Text>
          </Link>

          <Link to="/about">
            <Text
              color={"gray.200"}
              mt={{ base: 2, md: 0 }}
              fontSize={{ base: "10px", sm: "16px", md: "18px" }}
              fontFamily={orbitronFontFamily}
              fontWeight={orbitronWeight.semibold}
              letterSpacing={{ base: "0.1rem", md: "0.1rem" }}
            >
              About
            </Text>
          </Link>

          <Link to="/contact">
            <Text
              color={"gray.200"}
              mt={{ base: 2, md: 0 }}
              fontSize={{ base: "10px", sm: "16px", md: "18px" }}
              fontFamily={orbitronFontFamily}
              fontWeight={orbitronWeight.semibold}
              letterSpacing={{ base: "0.1rem", md: "0.1rem" }}
            >
              Contact
            </Text>
          </Link>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Navigation;
