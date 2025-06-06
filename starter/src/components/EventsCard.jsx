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
import { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "./Root";

export const EventsCard = ({ event }) => {
  //access global fetch from Root
  const { categories } = useContext(DataContext);
  const { image, title, description, startTime, endTime, categoryIds } = event;

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

  //FONT WORK SANS
  const workSansFontFamily = "Work Sans, sans-serif";
  const workSansWeight = {
    fontWeights: {
      normal: 400,
      medium: 600,
      semibold: 700,
      bold: 900,
    },
  };

  // this funtion assigns a uinique color to each category by their ID if desired.(not in use)
  const categoryColor = (categoryId) => {
    switch (categoryId) {
      case "1":
        return "#c50d34";
      case "2":
        return "#49108B";
      case "3":
        return "#0F6292";
      default:
        return "#0f0f0f";
    }
  };

  return (
    <div className="event-card">
      <Card
        as={Link}
        to={`/event/${event.id}`}
        borderRadius="md"
        border={"1px solid #D9D9D9"}
        p={2}
        bgColor={"#0f0f0f"}
        w="100%"
        cursor="pointer"
        _hover={{ transform: "scale(1.08)" }}
      >
        <Box
          bgColor={"#D9D9D9"}
          borderRadius="md"
          h={{ base: "25rem", sm: "100%", md: "100%" }}
        >
          <CardBody>
            <Center>
              <Heading
                as="h2"
                size={{ base: "16px", sm: "sm", md: "sm" }}
                color={"#0f0f0f"}
                mb={"1rem"}
                fontFamily={bebasNeueFontFamily}
                fontWeight={400}
                letterSpacing={{
                  base: "0.07rem",
                  sm: "0.05rem",
                  md: "0.09rem",
                  lg: "0.1rem",
                }}
              >
                {title || "untitled Event"}
              </Heading>
            </Center>

            <Box display={"flex"} justifyContent={"center"} align={"center"}>
              <Image
                src={image || "/img/Vreemd_tension.png"}
                objectFit={"contain"}
                borderRadius={"12px"}
                mb={"1rem"}
                w={{
                  base: "200px",
                  sm: "200px",
                  md: "250px",
                  lg: "275px",
                  "2xl": "290px",
                }}
                h={{
                  base: "130px",
                  sm: "120px",
                  md: "160px",
                  lg: "170px",
                  "2xl": "200px",
                }}
                overflow={"hidden"}
                alt={`Flyer image for ${title || "Untitled Events"} `}
              />
            </Box>

            <Text
              fontSize={{ base: "14px", sm: "12px", md: "12px", lg: "16px" }}
              letterSpacing={{
                base: "0.07rem",
                sm: "0.05rem",
                md: "0.07rem",
                lg: "0.1rem",
              }}
              color={"#0f0f0f"}
              mb={"1rem"}
              fontFamily={bebasNeueFontFamily}
              fontWeight={400}
              textAlign={"center"}
            >
              {description || "No description available."}
            </Text>

            <Text
              color={"#0f0f0f"}
              fontSize={{ base: "11px", sm: "11px", md: "10px", lg: "12px" }}
              letterSpacing={{
                base: "0.1rem",
                sm: "0.05rem",
                md: "0.05rem",
                lg: "0.09rem",
              }}
              fontFamily={workSansFontFamily}
              fontWeight={workSansWeight.thin}
              mt={{ base: "30px", md: "20px" }}
              textAlign={"center"}
            >
              {" "}
              Start Time: {startTime || "No Start Time"}
            </Text>
            <Text
              color={"#0f0f0f"}
              fontSize={{ base: "11px", sm: "11px", md: "10px", lg: "12px" }}
              letterSpacing={{
                base: "0.1rem",
                sm: "0.05rem",
                md: "0.05rem",
                lg: "0.09rem",
              }}
              mb={"0.5rem"}
              fontFamily={workSansFontFamily}
              fontWeight={workSansWeight.thin}
              textAlign={"center"}
            >
              End Time: {endTime || "No End Time"}
            </Text>

            {/* Display categories */}
            <Center>
              <Stack direction="row">
                {Array.isArray(event.categoryIds) &&
                event.categoryIds.length > 0 ? (
                  event.categoryIds.map((categoryId) => {
                    const category = categories.find(
                      (category) => category.id === categoryId
                    );
                    if (!category) return null;

                    return (
                      <Text
                        key={category.id}
                        color={categoryColor(categoryId)}
                        mt={{ base: "30px", sm: "20px", md: "30px" }}
                        fontSize={{
                          base: "0.7rem",
                          sm: "0.6rem",
                          md: "0.6rem",
                          lg: "0.8rem",
                        }}
                        letterSpacing={{
                          base: "0.05rem",
                          sm: "0.07rem",
                          md: "0.15rem",
                        }}
                        fontFamily={bebasNeueFontFamily}
                        fontWeight={600}
                      >
                        {category.name}
                      </Text>
                    );
                  })
                ) : (
                  <Text color={"#0f0f0f"}>No categories available</Text>
                )}
              </Stack>
            </Center>
          </CardBody>
        </Box>
      </Card>
    </div>
  );
};
