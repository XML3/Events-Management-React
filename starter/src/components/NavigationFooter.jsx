import { React } from "react";
import { Link } from "react-router-dom";
import { Box, Text, Flex, Image, Grid, Stack } from "@chakra-ui/react";

const meatIcon = "/icons/meta_pink_icon3.png";
const instaIcon = "/icons/pink_instagram3_icon.png";
const threadsIcon = "/icons/threads_pink_icon.png";
const tiktokIcon = "/icons/tiktok_pink_icon.png";
const xIcons = "/icons/x_social_media_pink_icon3.png";
const logo = "/img/red_logo_smaller2.png";

export const NavigationFooter = () => {
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
      borderTop={"1px"}
      borderColor="#d5d1bf"
      h={{ base: "35vh", sm: "30vh", md: "20vh" }}
      bgColor={"#051622"}
      color={"#d5d1bf"}
      textAlign={"center"}
    >
      <Flex
        direction={{ base: "column", sm: "row", md: "row" }}
        wrap="wrap"
        justify={{ base: "start", sm: "center", md: "center" }}
        align={{ base: "start", sm: "center", md: "center" }}
        fontSize={{ base: "0.4em", sm: "0.4em", md: "0.7em" }}
        letterSpacing={{ base: "0.08rem", md: "0.06rem" }}
        mt={{ base: "40px", sm: "50px", md: "30px" }}
        ml={{ base: "2px", md: 0 }}
        // position={"relative"}
        // left={{ base: 0, sm: 0, md: 0 }}
      >
        <Stack
          direction={{ base: "row", sm: "row", md: "row" }}
          wrap={"wrap"}
          justify={"center"}
          spacing={{ base: "20px", sm: "24px", md: "24px" }}
        >
          <Link to="/about">
            <Text
              fontFamily={orbitronFontFamily}
              fontWeight={orbitronWeight.normal}
            >
              About Us
            </Text>
          </Link>

          <Text
            fontFamily={orbitronFontFamily}
            fontWeight={orbitronWeight.normal}
          >
            Media
          </Text>

          <Link to="/contact">
            <Text
              fontFamily={orbitronFontFamily}
              fontWeight={orbitronWeight.normal}
            >
              Contact
            </Text>
          </Link>

          <Text
            fontFamily={orbitronFontFamily}
            fontWeight={orbitronWeight.normal}
          >
            Bussiness B.V
          </Text>
          <Text
            fontFamily={orbitronFontFamily}
            fontWeight={orbitronWeight.normal}
          >
            FAQ/Help
          </Text>
          <Text
            fontFamily={orbitronFontFamily}
            fontWeight={orbitronWeight.normal}
          >
            Privacy Policy
          </Text>
        </Stack>
      </Flex>

      {/* ICONS */}
      <Flex
        direction={{ base: "row", md: "row" }}
        justify={{ base: "center", sm: "center", md: "space-around" }}
        alignItems={{ base: "start", md: "center" }}
        mt={{ base: "40px", md: "30px" }}
        mb={{ base: "10px", md: "20px" }}
        gap={6}
      >
        <Stack direction={{ base: "row", sm: "row", md: "row" }} spacing="24px">
          <Image
            src={xIcons}
            alt="social media X icon"
            objectFit="scale-down"
            boxSize={{ base: "20px", md: "30px" }}
          />

          <Image
            src={meatIcon}
            alt="social media X icon"
            objectFit="scale-down"
            boxSize={{ base: "20px", md: "30px" }}
          />

          <Image
            src={instaIcon}
            alt="social media X icon"
            objectFit="scale-down"
            boxSize={{ base: "20px", md: "30px" }}
          />

          <Image
            src={threadsIcon}
            alt="social media X icon"
            objectFit="scale-down"
            boxSize={{ base: "20px", md: "30px" }}
          />

          <Image
            src={tiktokIcon}
            alt="social media X icon"
            objectFit="scale-down"
            boxSize={{ base: "20px", md: "30px" }}
          />
        </Stack>
      </Flex>

      {/* LOGO + COPYRIGHT */}
      <Flex
        direction={{ base: "column", sm: "row", md: "row" }}
        justify={{ base: "center", md: "center" }}
        align={{ base: "center", sm: "start", md: "center" }}
        position={"relative"}
        left={{ base: "10px", sm: "20%", md: 0 }}
        mt={{ base: "40px", sm: "30px", md: "10px" }}
        mr={{ base: "10px", sm: "15rem", md: "2rem" }}
        fontSize={{ base: "0.3em", sm: "0.3rem", md: "0.5em" }}
        lineHeight={{ base: "1rem" }}
        letterSpacing={{ base: "0.1rem", md: "0.06rem" }}
      >
        <Box>
          <Image
            src={logo}
            boxSize={{ base: "40px", sm: "50px", md: "30px" }}
            objectFit="scale-down"
            borderRadius="full"
            position={"relative"}
            right={{ base: 0, sm: "80%", md: "10%" }}
            mb={{ base: "20px", sm: 0, md: 0 }}
          />
        </Box>

        <Text
          fontFamily={orbitronFontFamily}
          fontWeight={orbitronWeight.normal}
        >
          2023 XaglyMontilva // Mock Website that simulates an event management
          page - None of these events are actually real nor affilated to any of
          the artists
        </Text>
      </Flex>
    </Box>
  );
};
