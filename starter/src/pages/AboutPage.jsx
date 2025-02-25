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
      bgColor={"#000000"}
      color="#d5d1bf"
      minH={{ base: "150vh", sm: "175vh", md: "120vh" }}
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
            color={"rgba(213, 209, 191, 0.5)"}
            fontSize={{
              base: "24px",
              sm: "30px",
              md: "40px",
              "2xl": "60px",
            }}
            lineHeight={"1.2"}
            mb={{ base: 0, sm: "2rem", md: 0 }}
            position={"relative"}
            top={{ base: "3rem", md: "0", "2xl": "-1rem" }}
            left={{ base: "0.9rem", sm: "1rem", md: "5.5rem", "2xl": "45%" }}
            fontFamily={orbitronFontFamily}
            fontWeight={orbitronWeight.semibold}
            maxW={{
              base: "100%",
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
        mb={{ base: "0", sm: "2rem", md: "2rem" }}
        bgColor={"rgba(213, 209, 191, 0.3)"}
        width={"100%"}
      >
        <Text
          color={"#d5d1bf"}
          w={"17%"}
          fontSize={{
            base: "16px",
            sm: "30px",
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
          top={{ base: 10, sm: "5rem", md: 0 }}
        >
          <Box
            backgroundColor={"#0f0f0f"}
            border={"1px solid rgba(213, 209, 191, 0.3)"}
            padding={{ base: "0.6rem", md: "3rem" }}
            color={"#d5d1bf"}
          >
            <Flex
              direction={{ base: "column", md: "row" }}
              align={{ base: "center", md: "center" }}
              alignItems={"center"}
              justifyContent={"space-between"}
              wrap={"wrap"}
            >
              <Text
                fontSize={{ base: "0.6rem", sm: "16px", md: "sm" }}
                padding={{
                  base: "0.5rem",
                  sm: "1rem",
                  md: "1rem",
                  "2xl": "0rem",
                }}
                maxWidth={"40%"}
                flex="1"
                fontFamily={robotoSlabFont}
                fontWeight={robotoSlabWeight.light}
                lineHeight={{ base: "1.7", sm: "1.7", md: "1.7" }}
                mb={{ base: "1rem", sm: "1rem", md: 0 }}
                color={"rgba(213, 209, 191, 0.8"}
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
