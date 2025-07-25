import React, { useContext } from "react";
import { Center, Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import DataContext from "../components/Root";
import Typewriter from "../components/Typewriter";

export const AboutPage = () => {
  const { header, subHeader } = useContext(DataContext);

  //FONT BEBAS
  const bebasNeueFontFamily = "Bebas Neue, sans-serif";
  const bebasNeuenWeight = {
    fontWeights: {
      normal: 400,
      medium: 600,
      semibold: 700,
      bold: 900,
    },
  };

  //FONT WorkSans
  const workSansFontFamily = "Work Sans, sans-serif";
  const workSansWeight = {
    fontWeights: {
      normal: 400,
      medium: 600,
      semibold: 700,
      bold: 900,
    },
  };

  const aboutImage = "/img/about-image.png";
  const aboutUsImg = "/img/about-us.jpg";
  const aboutHeader = "About Us";

  return (
    <Box
      bgColor="#FFE054"
      color="#d5d1bf"
      minW={"100%"}
      maxW={"100%"}
      width={"100%"}
    >
      <Box minHeight={"100dvh"}>
        <Flex
          align={{ base: "center", md: "flex-start" }}
          direction={{ base: "column", md: "row" }}
        >
          <Box
            as="section"
            position={"relative"}
            width={"100%"}
            height={{ base: "79vh", sm: "78vh", lg: "78vh", "2xl": "80vh" }}
            pt={0}
            zIndex={0}
          >
            <Image
              src={aboutImage}
              alt="Hero Background Image"
              objectFit={"cover"}
              width={"100%"}
              height={"100%"}
              position="absolute"
              top="0"
              left={"0"}
              zIndex={1}
            />
            <Flex
              flexDir={"column"}
              flexWrap={"wrap"}
              textAlign={"center"}
              justifyContent={"center"}
              alignItems={"center"}
              position={"relative"}
              height={"100%"}
              pt={{
                base: "5rem",
                sm: "6rem",
                md: "0",
                lg: "0rem",
                "2xl": "6rem",
              }}
              zIndex={2}
            >
              <Heading
                maxW={"100%"}
                mx="auto"
                textAlign={"center"}
                fontFamily={bebasNeueFontFamily}
                fontWeight={400}
                fontSize={{
                  base: "48px",
                  sm: "80px",
                  md: "100px",
                  lg: "120px",
                  "2xl": "160px",
                }}
                letterSpacing={{ base: "0.4rem", md: "0.4rem" }}
                color={"#FFE054"}
                mb={{
                  base: "2rem",
                  sm: "2rem",
                  lg: "0.5rem",
                  "2xl": "0",
                }}
              >
                {aboutHeader}
              </Heading>
            </Flex>
          </Box>
        </Flex>

        {/* Block section under Hero */}
        <Box width={"100%"} height={"215px"} borderBottom="1px solid #0f0f0f">
          <Flex
            align={{ base: "center", sm: "flex-start", md: "center" }}
            justify={{ base: "center", sm: "flex-start", md: "space-between" }}
          >
            <Box
              bgColor={"D9D9D9"}
              width={"50%"}
              height={"22vh"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              justifyItems={"center"}
            >
              <Text
                fontFamily={workSansFontFamily}
                fontWeight={600}
                fontSize={{ base: "0.6rem", sm: "0.7rem", md: "0.8rem" }}
                color={"#1E1E1E"}
                letterSpacing={"0.09rem"}
                textAlign={"center"}
              >
                Celebrating culture, community, and creativity.
              </Text>
            </Box>

            <Box
              bgColor={"#0f0f0f"}
              width={"50%"}
              height={"22vh"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              justifyItems={"center"}
            >
              <Text
                fontFamily={workSansFontFamily}
                fontWeight={600}
                fontSize={{ base: "0.6rem", sm: "0.7rem", md: "0.8rem" }}
                color={"#fff"}
                letterSpacing={"0.09rem"}
                textAlign={"center"}
              >
                Read About Us
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>

      <Box
        minHeight={{ base: "77dvh", sm: "90dvh", md: "70dvh", lg: "100dvh" }}
        sx={{
          "@media screen and (max-height: 550px)": {
            minHeight: "110vh",
          },
        }}
      >
        {/* About us Block + Image */}
        <Center>
          <Box
            w={{ base: "95%", sm: "90%", md: "90%", "2xl": "77%" }}
            position={"relative"}
            top={{ base: "2rem", sm: "3.5rem", md: "8rem" }}
            sx={{
              "@media screen and (max-height: 550px)": {
                top: "-2rem",
              },
            }}
          >
            <Box
              backgroundColor={"#0f0f0f"}
              borderRadius={"12px"}
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
                  fontFamily={workSansFontFamily}
                  fontWeight={workSansWeight.light}
                  lineHeight={{ base: "1.7", sm: "1.7", md: "1.7" }}
                  mb={{ base: "0", sm: "1rem", md: 0 }}
                  color={"rgba(213, 209, 191, 1"}
                >
                  <Typewriter text={subHeader} delay={30} />
                </Text>
                <Image
                  src={aboutUsImg}
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
    </Box>
  );
};

export default AboutPage;
