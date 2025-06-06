import { useContext, useState } from "react";
import NewEvent from "../components/forms/NewEvent";
import { SearchItem } from "../components/SearchItem";
import DataContext from "../components/Root";
import TextAnimation from "../components/TextAnimation";
import Typewriter from "../components/Typewriter";
import { EventsCarousel } from "../components/EventsCarousel";

import {
  Heading,
  Box,
  Flex,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  Image,
} from "@chakra-ui/react";

export const EventsPage = () => {
  const {
    events,
    handleEventAdded,
    handleFilteredEvents,
    categories,
    filteredEvents,
    users,
    header,
  } = useContext(DataContext);

  //FONT ORBITRON
  const bebasNeueFontFamily = "Bebas Neue, sans-serif";
  const bebasNeuenWeight = {
    fontWeights: {
      normal: 400,
      medium: 600,
      semibold: 700,
      bold: 900,
    },
  };

  const workSansFontFamily = "Work Sans, sans-serif";
  const workSansWeight = {
    fontWeights: {
      normal: 400,
      medium: 600,
      semibold: 700,
      bold: 900,
    },
  };

  //Hero Image
  const heroImage = "/img/HeroImage.png";

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  //Goup Events by Categories and display group of Events inside their respective category
  const eventsByCategory = filteredEvents.reduce((acc, event) => {
    if (!event || !Array.isArray(event.categoryIds)) return acc;
    event.categoryIds.forEach((categoryId) => {
      if (!acc[categoryId]) {
        acc[categoryId] = [];
      }
      acc[categoryId].push(event);
    });
    return acc;
  }, {});

  return (
    <>
      <Box
        bgColor="#D9D9D9"
        color="#1E1E1E"
        minH={{
          base: "390vh",
          sm: "350vh",
          md: "300vh",
          lg: "320vh",
          "2xl": "360vh",
        }}
        sx={{
          "@media screen and (max-height: 550px)": {
            minH: "650vh",
          },
        }}
        minW={"100%"}
        maxW={"100%"}
      >
        <Flex
          align={"center"}
          justify={"center"}
          w={{ base: "100%", sm: "100%", md: "100%" }}
          direction={{
            base: "column",
            sm: "column",
            md: "column",
            lg: "row",
            "2xl": "row",
          }}
        >
          <Box width={"100%"} height={"auto"} mx={"auto"}>
            <Flex
              display={"flex"}
              justifyContent="center"
              alignItems={"center"}
              width={"100%"}
              flexDirection={{ base: "column", sm: "row", md: "row" }}
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
                  src={heroImage}
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
                  sx={{
                    "@media screen and (max-height: 550px)": {
                      pt: "3rem",
                    },
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
                      "2xl": "5rem",
                    }}
                    sx={{
                      "@media screen and (max-height: 550px)": {
                        mb: "0rem",
                      },
                    }}
                  >
                    {header}
                  </Heading>
                  {/* Sliding Text - Mid Section */}
                  <Box w={"100%"}>
                    <TextAnimation />
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Flex>

        {/* Block section under Hero */}
        <Box width={"100%"} height={"220px"}>
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
              bgColor={"#FFE054"}
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
                Scroll to explore
              </Text>
            </Box>
          </Flex>
        </Box>

        {/* Black Middle Line */}
        <Box
          position={"relative"}
          bottom={{ base: 3, sm: -1, md: "-4rem", lg: "1.1rem", "2xl": 1 }}
          sx={{
            "@media screen and (max-height: 550px)": {
              bottom: "5.5rem",
            },
          }}
          width={"100%"}
          border="1px solid #0f0f0f"
        >
          {" "}
        </Box>

        {/* Search Section */}
        <Box width={"100%"}>
          <Flex
            flexDir={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text
              color={"#0f0f0f"}
              width={"100%"}
              fontSize={{
                base: "18px",
                sm: "22px",
                md: "18px",
                lg: "20px",
                "2xl": "22px",
              }}
              letterSpacing={"0.1rem"}
              pt={{ base: 5, sm: 10, md: "6.5rem", lg: 5, "2xl": "4rem" }}
              sx={{
                "@media screen and (max-height: 550px)": {
                  pt: "0rem",
                },
              }}
              fontFamily={bebasNeueFontFamily}
              fontWeight={500}
              textAlign={"center"}
            >
              Search and explore upcoming exhibitions, <br></br>festivals, and
              private gatherings.
            </Text>
          </Flex>

          {/* Search text and imput */}
          <Flex
            width={"100%"}
            mt={{ base: "5%", sm: "0", md: "2rem" }}
            flexDir={{ base: "column", sm: "column", md: "row" }}
            justifyContent={{
              base: "center",
              sm: "center",
              md: "space-between",
              lg: "space-between",
              "2xl": "space-between",
            }}
            alignItems={"center"}
            pl={{ base: 0, sm: 0, md: "7%", lg: "5%" }}
            pr={{ base: 0, sm: 0, md: "8%", lg: "6%" }}
          >
            <Text
              color={"#0f0f0f"}
              width={{
                base: "100%",
                sm: "100%",
                md: "20%",
                lg: "20%",
                "2xl": "15%",
              }}
              fontSize={{
                base: "18px",
                sm: "22px",
                md: "24px",
                lg: "24px",
              }}
              letterSpacing={"0.1rem"}
              pt={{ base: 5, sm: 10, md: 5, lg: 20, "2xl": 30 }}
              position={"relative"}
              fontFamily={bebasNeueFontFamily}
              fontWeight={400}
              textAlign={"center"}
            >
              Search Events:
            </Text>
            <SearchItem
              events={events}
              handleFilteredEvents={handleFilteredEvents}
            />
          </Flex>

          <Flex
            flexDir={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text
              color={"#0f0f0f"}
              width={"100%"}
              fontSize={{
                base: "38px",
                sm: "68px",
                md: "80px",
                lg: "100px",
                "2xl": "120px",
              }}
              letterSpacing={"0.1rem"}
              pt={{ base: 5, sm: 10, md: "2rem", lg: 5, "2xl": "5rem" }}
              fontFamily={bebasNeueFontFamily}
              fontWeight={500}
              textAlign={"center"}
            >
              Popular Events
            </Text>
          </Flex>
        </Box>

        {/* This Flex manages the whole Cards Box */}
        <Flex
          align={{ base: "flex-start", md: "center" }}
          justify={{ base: "flex-start", md: "center" }}
          minH="100vh"
        >
          <Box
            p={4}
            h={"100%"}
            mb={{ base: "0.5rem", sm: 0, md: "1rem" }}
            position={"relative"}
            top={{
              base: "1rem",
              sm: "0",
              md: "0",
              lg: "2rem",
              "2xl": "5vh",
            }}
            width={"100%"}
          >
            {Object.keys(eventsByCategory).map((categoryId) => {
              const category = categories.find((cat) => cat.id === categoryId);
              const categoryEvents = eventsByCategory[categoryId];

              if (categoryEvents.length === 0) return null; // If no events in this category, skip rendering

              return (
                <Box key={categoryId} mb={8}>
                  <Heading
                    w={{ base: "100%", sm: "45%", lg: "50%" }}
                    position={"relative"}
                    left={{ base: 0, sm: "5%" }}
                    paddingTop={7}
                    fontSize={{
                      base: "16px",
                      sm: "20px",
                      md: "24px",
                      lg: "24px",
                      "2xl": "32px",
                    }}
                    mb={2}
                    mt={1}
                    color={"#0f0f0f"}
                    fontFamily={bebasNeueFontFamily}
                    fontWeight={500}
                    letterSpacing={1.5}
                  >
                    {category ? category.name : "Unknown Category"}
                  </Heading>

                  {categoryEvents && categoryEvents.length > 0 && (
                    <EventsCarousel categoryEvents={categoryEvents} />
                  )}
                </Box>
              );
            })}
          </Box>
        </Flex>

        <Box width={"100%"}>
          <Flex
            flexDir={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text
              color={"#0f0f0f"}
              width={"100%"}
              fontSize={{
                base: "38px",
                sm: "68px",
                md: "80px",
                lg: "100px",
                "2xl": "120px",
              }}
              letterSpacing={"0.1rem"}
              pt={{ base: "20px", sm: 10, md: "2rem", lg: 5, "2xl": 30 }}
              fontFamily={bebasNeueFontFamily}
              fontWeight={400}
              textAlign={"center"}
            >
              Want to host your own?
            </Text>

            <Button
              maxW={"100%"}
              position={"relative"}
              z-index={10}
              px={{ base: "120px", sm: "80px", md: "120px", lg: "50px" }}
              sx={{
                "@media screen and (max-height: 550px)": {
                  px: "50px",
                },
              }}
              py={{ base: 0, sm: 0, md: "30px", lg: "25px" }}
              textAlign={"center"}
              letterSpacing={{
                base: "0.2em",
                sm: "0.2rem",
                md: "0.2rem",
                lg: "0.1rem",
              }}
              mt={{ base: "3%", lg: "0" }}
              mb={{ base: 0, lg: "10%" }}
              zIndex={20}
              onClick={openModal}
              bgColor="#FFE054"
              border={"1px solid #0f0f0f"}
              color="#0f0f0f"
              fontFamily={bebasNeueFontFamily}
              fontWeight={400}
              fontSize={{
                base: "0.7rem",
                sm: "0.9rem",
                md: "22px",
                lg: "18px",
              }}
              _hover={{
                bgColor: "#0f0f0f",
                color: "#FFE054",
              }}
            >
              {" "}
              Create Event
            </Button>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Create New Event</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  {/* NewEvent goes here */}
                  <NewEvent
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    onEventAdded={handleEventAdded}
                    categories={categories}
                    users={users}
                  />
                </ModalBody>
              </ModalContent>
            </Modal>
          </Flex>
        </Box>
      </Box>
    </>
  );
};
