import { React } from "react";
import { Link } from "react-router-dom";
import { Box, Text, Flex, Image, Grid, Stack } from "@chakra-ui/react";

const logo = "/img/red_logo_smaller2.png";

export const NavigationFooter = () => {
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

  return (
    <Box
      borderTop={"1px solid #0f0f0f"}
      h={{ base: "13vh", sm: "15vh", md: "14vh", "2xl": "8vh" }}
      maxWidth={"100%"}
      bgColor={"#D9D9D9"}
      color="#0f0f0f"
      textAlign={"center"}
    >
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
          fontFamily={workSansFontFamily}
          fontWeight={workSansWeight.normal}
        >
          ©2023 Mock Events Management Application
        </Text>
      </Flex>
    </Box>
  );
};
