import { Link } from "react-router-dom";
import {
  Box,
  Text,
  Flex,
  Image,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
// import { CurrentUser } from "./CurrentUser";

const logo = "/img/Eventslogo.png";
export const Navigation = () => {
  //FONT ORBITRON
  const workSansFontFamily = "Work Sans, sans-serif";
  const workSansWeight = {
    fontWeights: {
      normal: 400,
      medium: 600,
      semibold: 700,
      bold: 900,
    },
  };

  const isLargeScreen = useBreakpointValue({ base: false, md: true });

  return (
    <Box
      minW={"100%"}
      bgColor={"transparent"}
      position={"absolute"}
      zIndex={1000}
      top={0}
      left={0}
      paddingTop={2}
      px={{ base: 3, sm: 5 }}
    >
      <Flex
        display={"flex"}
        direction={"row"}
        wrap={"wrap"}
        align={{ base: "center", sm: "center", md: "center" }}
        position={"relative"}
        justifyContent={{ base: "space-between", sm: "space-around" }}
        gap={{ base: "0", sm: "0", md: "%", "2xl": "4%" }}
        right={{ base: 0, sm: 0 }}
      >
        {/* LOGO Section */}
        <Box
          mb={{ base: 0, sm: 0, md: 0 }}
          px={{ base: 3, sm: 0 }}
          pr={{ base: 3, sm: 10 }}
          position={"relative"}
          left={{ base: "0rem", sm: 0, md: "-2%", "2xl": "0%" }}
          display={"flex"}
          justifyContent={"start"}
        >
          {" "}
          <Link to="/">
            <Image
              src={logo}
              boxSize={{ base: "45px", sm: "50px", md: "60px", "2xl": "95px" }}
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
          justify={{ base: "flex-start", sm: "center", md: "center" }}
          spacing={{ base: "10px", sm: 4, md: "6px" }}
          align={"center"}
        >
          {/* Menu Section  */}
          <Link to="/">
            <Text
              fontSize={{
                base: "12px",
                sm: "14px",
                md: "16px",
                "2xl": "0.8rem",
              }}
              fontFamily={workSansFontFamily}
              fontWeight={600}
              letterSpacing={{
                base: "0.1rem",
                md: "0.05rem",
                "2xl": "0.09rem",
              }}
              _hover={{ transform: "scale(1.08)", bgColor: "#FFE054" }}
              color={"#fff"}
              px={{ base: 1, sm: 2, md: "40px" }}
              py={2}
              borderRadius="8px"
              textAlign="center"
              display="inline-block"
            >
              Home
            </Text>
          </Link>

          <Link to="/about">
            <Text
              fontSize={{
                base: "12px",
                sm: "14px",
                md: "16px",
                "2xl": "0.8rem",
              }}
              fontFamily={workSansFontFamily}
              fontWeight={600}
              letterSpacing={{
                base: "0.1rem",
                md: "0.05rem",
                "2xl": "0.09rem",
              }}
              _hover={{ transform: "scale(1.08)", bgColor: "#FFE054" }}
              color={"#fff"}
              px={{ base: 1, sm: 2, md: "40px" }}
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
                "2xl": "0.8rem",
              }}
              fontFamily={workSansFontFamily}
              fontWeight={600}
              letterSpacing={{
                base: "0.1rem",
                md: "0.05rem",
                "2xl": "0.09rem",
              }}
              _hover={{ transform: "scale(1.08)", bgColor: "#FFE054" }}
              color={"#fff"}
              px={{ base: 1, sm: 2, md: "40px" }}
              py={2}
              borderRadius="8px"
              textAlign="center"
              display="inline-block"
            >
              Contact
            </Text>
          </Link>
        </Stack>

        <Link to="/event/1">
          <Text
            fontSize={{
              base: "12px",
              sm: "14px",
              md: "16px",
              "2xl": "0.8rem",
            }}
            fontFamily={workSansFontFamily}
            fontWeight={600}
            letterSpacing={{ base: "0.1rem", md: "0.05rem" }}
            _hover={{
              transform: "scale(1.08)",
              bgColor: isLargeScreen ? "#c50d34" : "transparent",
            }}
            bgColor={isLargeScreen ? "#FFE054" : "transparent"}
            color={isLargeScreen ? "#0f0f0f" : "#FFE054"}
            px={{ base: 3, sm: "80px", md: "40px", "2xl": "55px" }}
            py={{ base: 1.5, sm: 2 }}
            sx={{
              "@media screen and (max-height: 550px)": {
                py: "6px",
              },
            }}
            borderRadius="8px"
            textAlign="center"
            display="inline-block"
          >
            Event
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
      </Flex>
    </Box>
  );
};

export default Navigation;
