import React, { useContext } from "react";
import { Image, Center, Box, Flex, Heading, Text } from "@chakra-ui/react";
import DataContext from "../components/Root";
import Typewriter from "../components/Typewriter";

const aboutImg = "/img/about.jpg";

export const AboutPage = () => {
  const { header } = useContext(DataContext);

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

  return (
    <Box
      bgColor="#051622"
      color="#d5d1bf"
      minH={{ base: "150vh", sm: "175vh", md: "150vh" }}
      width={"100%"}
      paddingTop={"100px"}
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
          mb={{ base: "0", md: "9rem" }}
        >
          <Heading
            bgGradient="linear(to-r, #ff005f 0%, #610979 70%, #020024 100%)"
            bgClip="text"
            fontSize={{
              base: "32px",
              sm: "80px",
              md: "100px",
            }}
            lineHeight={"1.2"}
            mt={{ base: "2rem", md: "0" }}
            position={"relative"}
            left={{ base: "0.5rem", sm: "1.5rem", md: "7rem" }}
            fontFamily={orbitronFontFamily}
            fontWeight={orbitronWeight.semibold}
            maxW={{ base: "100%", md: "900px" }}
          >
            <Typewriter text={header} delay={100} />
          </Heading>
        </Box>
      </Flex>

      <Box
        position={"relative"}
        left={{ base: "0", md: "1rem" }}
        mb={{ base: "0", sm: "2rem", md: "2rem" }}
      >
        <Text
          color={"#d5d1bf"}
          w={"30%"}
          fontSize={{
            base: "16px",
            sm: "30px",
            md: "25px",
          }}
          position={"relative"}
          left={{ base: "0.5rem", sm: "2.5rem", md: "15rem" }}
          top={{ base: 5, sm: 20, md: 0 }}
          fontFamily={orbitronFontFamily}
          fontWeight={orbitronWeight.semibold}
        >
          About Us
        </Text>
      </Box>
      <Center>
        <Box
          bgGradient="linear(to-r, #ff005f 0%, #610979 70%)"
          w={{ base: "95%", sm: "90%", md: "75%" }}
          padding={{ base: "0.2rem", sm: "0.2rem", md: "0.2rem" }}
          position={"relative"}
          top={{ base: 10, sm: "5rem", md: 0 }}
        >
          <Box
            backgroundColor={"#051622"}
            w={{ base: "100%", sm: "100%", md: "100%" }}
            padding={{ base: "0.6rem", md: "2rem" }}
            color={"#d5d1bf"}
          >
            <Flex
              direction={{ base: "column", md: "row" }}
              align={{ base: "center", md: "flex-start" }}
              alignItems={"center"}
              wrap={"wrap"}
            >
              <Text
                fontSize={{ base: "0.6rem", sm: "16px", md: "sm" }}
                padding={{ base: "0.5rem", sm: "1rem", md: "1rem" }}
                flex="1"
                fontFamily={robotoSlabFont}
                fontWeight={robotoSlabWeight.light}
                lineHeight={{ base: "1.7", sm: "1.7", md: "1.7" }}
                mb={{ base: "1rem", sm: "1rem", md: 0 }}
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
                felis eu pede mollis pretium. Integer tincidunt.
                <br />
                <br />
                Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
                eleifend tellus. Aenean leo ligula, porttitor eu, consequat
                vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in,
                viverra quis, feugiat a, tellus. Phasellus viverra nulla ut
                metus varius laoreet. Quisque rutrum. Aenean imperdiet.
                <br />
                Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies
                nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget
                condimentum rhoncus, sem quam semper libero, sit amet adipiscing
                sem neque sed ipsum. Nam quam nunc, blandit vel, luctus
                pulvinar, hendrerit id, lorem.
              </Text>
              <Image
                src={aboutImg}
                w={{ base: "100%", md: "50%" }}
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
