import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Image,
  Center,
  Box,
} from "@chakra-ui/react";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "./Root";

export const EventsCard = ({ event }) => {
  //access global fetch from Root
  const { categories } = useContext(DataContext);
  const { image, title, description, startTime, endTime, categoryIds } = event;

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

  // this funtion assigns a uinique color to each category by their ID.
  const categoryColor = (categoryId) => {
    switch (categoryId) {
      case "1":
        return "#ff005f";
      case "2":
        return "#fff176";
      case "3":
        return "#4db6ac";
      default:
        return "#ff005f";
    }
  };

  return (
    <div className="event-card">
      <Card
        as={Link}
        to={`/event/${event.id}`}
        bgGradient="linear(to-b, #ff005f 0%, #610979 70%)"
        borderRadius="md"
        w={{ base: "14rem", sm: "100%", md: "90%" }}
        h={{ base: "25.1rem", sm: "100%", md: "100%" }}
        padding={"0.05rem"}
        position={"relative"}
        right={{ base: "1.1rem", sm: 0, md: 0 }}
        cursor="pointer"
        _hover={{ transform: "scale(1.08)" }}
      >
        <Box
          bgColor={"gray.900"}
          borderRadius="md"
          w={{ base: "13.9rem", sm: "100%", md: "100%" }}
          h={{ base: "25rem", sm: "100%", md: "100%" }}
        >
          <CardBody>
            <Center>
              <Heading
                as="h2"
                size={{ base: "md", sm: "lg", md: "md" }}
                color={"green.200"}
                mb={"1rem"}
                fontFamily={orbitronFontFamily}
                fontWeight={orbitronWeight.medium}
                letterSpacing={{
                  base: "0.07rem",
                  sm: "0.05rem",
                  md: "0.09rem",
                }}
              >
                {title}
              </Heading>
            </Center>

            <Image src={image} borderRadius={"full"} mb={"1rem"} w={"100%"} />
            <Text
              fontSize={{ base: "sm", sm: "16px", md: "sm" }}
              letterSpacing={{ base: "0.07rem", sm: "0.05rem", md: "0.07rem" }}
              color={"green.200"}
              mb={"1rem"}
              fontFamily={orbitronFontFamily}
              fontWeight={orbitronWeight.normal}
            >
              {description}
            </Text>

            <Text
              color={"whitesmoke"}
              fontSize={{ base: "2xs", sm: "14px", md: "2xs" }}
              letterSpacing={{ base: "0.1rem", sm: "0.05rem", md: "0.05rem" }}
              fontFamily={robotoSlabFont}
              fontWeight={robotoSlabWeight.thin}
              mt={{ base: "30px", md: "40px" }}
            >
              {" "}
              Start Time: {startTime}
            </Text>
            <Text
              color={"gray.200"}
              fontSize={{ base: "2xs", sm: "14px", md: "2xs" }}
              letterSpacing={{ base: "0.1rem", sm: "0.05rem", md: "0.05rem" }}
              mb={"0.5rem"}
              fontFamily={robotoSlabFont}
              fontWeight={robotoSlabWeight.thin}
            >
              End Time: {endTime}
            </Text>

            {/* Display categories */}
            <Center>
              <Stack direction="row">
                {Array.isArray(event.categoryIds) ? (
                  event.categoryIds.map((categoryId) => {
                    const category = categories.find(
                      (category) => category.id === categoryId
                    );
                    if (!category) return null;

                    return (
                      <Text
                        key={category.id}
                        // color="#ff005f "
                        color={categoryColor(categoryId)}
                        mt={{ base: "30px", sm: "20px", md: "30px" }}
                        fontSize={{
                          base: "0.7rem",
                          sm: "0.9rem",
                          md: "0.8rem",
                        }}
                        letterSpacing={{
                          base: "0.05rem",
                          sm: "0.07rem",
                          md: "0.15rem",
                        }}
                        fontFamily={orbitronFontFamily}
                        fontWeight={orbitronWeight.normal}
                      >
                        {category.name}
                      </Text>
                    );
                  })
                ) : (
                  <Text color={"gray.200"}>No categories available</Text>
                )}
              </Stack>
            </Center>
          </CardBody>
        </Box>
      </Card>
    </div>
  );
};
