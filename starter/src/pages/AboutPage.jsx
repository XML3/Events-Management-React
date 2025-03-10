import React, { useContext } from "react";
import { Center, Box, Flex, Heading, Text } from "@chakra-ui/react";
import DataContext from "../components/Root";
import Typewriter from "../components/Typewriter";

export const AboutPage = () => {
  const { header, subHeader } = useContext(DataContext);

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

  //FONT ROBOTO SLAB
  const robotoSlabFont = "Roboto Slab, serif";
  const robotoSlabWeight = {
    fontWeight: {
      thin: 100,
      extraLight: 200,
      light: 300,
      regular: 400,
      medium: 500,
    },
  };

  const videoOne = "/video/newEventsWide.mp4";

  return (
    <Box
      bgColor="rgba(213, 209, 191, 0.8)"
      color="#d5d1bf"
      minH={{ base: "100vh", sm: "120vh", md: "120vh", "2xl": "100vh" }}
      width={"100%"}
      paddingTop={"2rem"}
    >
      <Flex
        align={{ base: "center", md: "flex-start" }}
        minH={"20vh"}
        direction={{ base: "column", md: "row" }}
      >
        <Box
          position={"relative"}
          left={{ base: "0", md: 0 }}
          right={{ base: "0", md: 0 }}
          mb={{ base: "0", md: "5rem", "2xl": "3rem" }}
        >
          <Heading
            color={"#0f0f0f"}
            fontSize={{
              base: "24px",
              sm: "30px",
              md: "40px",
              "2xl": "60px",
            }}
            lineHeight={"1.2"}
            mb={{ base: 0, sm: "2rem", md: 0 }}
            position={"relative"}
            top={{ base: "0.5rem", md: "0", "2xl": "-1rem" }}
            left={{ base: "0", sm: "-8rem", md: "5.5rem", "2xl": "45%" }}
            fontFamily={orbitronFontFamily}
            fontWeight={orbitronWeight.semibold}
            maxW={{
              base: "70%",
              sm: "300px",
              md: "400px",
              "2xl": "500px",
            }}
          >
            <Typewriter text={header} delay={100} />
          </Heading>
        </Box>
      </Flex>

      <Box
        display={"flex"}
        justifyContent={{ base: "center", sm: "center", md: "flex-end" }}
        position={"relative"}
        left={{ base: "0", md: 0 }}
        top={{ base: "-4rem", sm: "-3rem", md: 0 }}
        mb={{ base: "0", sm: "2rem", md: "2rem", "2xl": "3rem" }}
        bgColor={"#0f0f0f"}
        width={"100%"}
      >
        <Text
          color={"#d5d1bf"}
          w={{ base: "25%", sm: "11%", "2xl": "17%" }}
          fontSize={{
            base: "16px",
            sm: "22px",
            md: "25px",
          }}
          top={{ base: 5, sm: 20, md: 0 }}
          fontFamily={orbitronFontFamily}
          fontWeight={orbitronWeight.semibold}
        >
          About
        </Text>
      </Box>
      <Center>
        <Box
          w={{ base: "95%", sm: "90%", md: "70%", "2xl": "77%" }}
          position={"relative"}
          top={{ base: "-2rem", sm: "-2rem", md: 0 }}
        >
          <Box
            backgroundColor={"#0f0f0f"}
            padding={{ base: "0.6rem", md: "3rem" }}
            color="rgba(213, 209, 191, 1)"
          >
            <Flex
              direction={{ base: "column", md: "row" }}
              align={"center"}
              alignItems={"center"}
              justifyContent={"space-between"}
              wrap={"wrap"}
            >
              <Text
                fontSize={{ base: "0.6rem", sm: "16px", md: "sm" }}
                padding={{
                  base: "32px",
                  sm: "24px",
                  md: "1rem",
                  "2xl": "0rem",
                }}
                maxWidth={{ base: "80%", sm: "100%", md: "40%" }}
                flex="1"
                fontFamily={robotoSlabFont}
                fontWeight={robotoSlabWeight.light}
                lineHeight={{ base: "1.7", sm: "1.7", md: "1.7" }}
                mb={{ base: "0", sm: "1rem", md: 0 }}
                color={"rgba(213, 209, 191, 1"}
              >
                <Typewriter text={subHeader} delay={30} />
              </Text>
              <Box
                as="video"
                src={videoOne}
                autoPlay
                loop
                muted
                playsInline
                w={{ base: "100%", md: "50%", "2xl": "50%" }}
                h={{ base: "auto", md: "auto" }}
                padding={{ base: "0.5rem", sm: "1rem", md: 0 }}
                marginBottom={{ base: "1rem", md: "0" }}
              />
            </Flex>
          </Box>
        </Box>
      </Center>
    </Box>
  );
};

export default AboutPage;
