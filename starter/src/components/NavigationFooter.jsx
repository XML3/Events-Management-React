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
      h={{ base: "13vh", sm: "15vh", md: "14vh", "2xl": "13vh" }}
      maxWidth={"100%"}
      bgColor={"#0f0f0f"}
      color="rgba(213, 209, 191, 1)"
      textAlign={"center"}
    >
      <Flex
        display={"flex"}
        direction={{ base: "column", sm: "row", md: "row" }}
        wrap="wrap"
        justify={{ base: "start", sm: "center", md: "center" }}
        align={"center"}
        fontSize={{ base: "0.4em", sm: "0.4em", md: "0.7em", "2xl": "0.6em" }}
        letterSpacing={{ base: "0.08rem", md: "0.06rem" }}
        mt={{ base: "12px", sm: "40px", md: "35px", "2xl": "35px" }}
      >
        <Stack
          direction={{ base: "row", sm: "row", md: "row" }}
          wrap={"wrap"}
          justify={"center"}
          spacing={{ base: "15px", sm: "24px", md: "24px" }}
        >
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

      {/* LOGO + COPYRIGHT */}
      <Flex
        display={"flex"}
        direction={{ base: "column", sm: "row", md: "row" }}
        justify={{ base: "center", md: "center" }}
        align={{ base: "center", sm: "center", md: "center" }}
        position={"relative"}
        fontSize={{ base: "0.3em", sm: "0.4rem", md: "0.5em" }}
        lineHeight={{ base: "1rem" }}
        letterSpacing={{ base: "0.1rem", md: "0.06rem" }}
        gap={2}
        mt={{ base: 3, sm: 5, md: 6, "2xl": 4 }}
      >
        <Box>
          <Image
            src={logo}
            boxSize={{ base: "30px", sm: "35px", md: "30px" }}
            objectFit="scale-down"
            borderRadius="full"
            position={"relative"}
            right={{ base: 0, sm: 0, md: "20%" }}
          />
        </Box>

        <Text
          fontFamily={orbitronFontFamily}
          fontWeight={orbitronWeight.normal}
        >
          Videos ©2023 XaglyMontilva All Rights Reserved: Mock site
        </Text>
      </Flex>
    </Box>
  );
};
