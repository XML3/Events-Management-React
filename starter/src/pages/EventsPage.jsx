import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { EventsCard } from "../components/EventsCard";
import NewEvent from "../components/forms/NewEvent";
import { SearchItem } from "../components/SearchItem";
import DataContext from "../components/Root";
import TextAnimation from "../components/TextAnimation";
import Typewriter from "../components/Typewriter";

import {
  Heading,
  Box,
  Flex,
  SimpleGrid,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useBreakpointValue,
  Button,
} from "@chakra-ui/react";

export const EventsPage = () => {
  const {
    events,
    handleEventAdded,
    handleFilteredEvents,
    categories,
    filteredEvents,
    users,
    // imgAnimation,
    header,
  } = useContext(DataContext);

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
  //FONT ROBOT SLAB
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

  //video
  const videoLeft = "/video/tension_release_square_XM.mp4";
  const videoRight = "/video/forEvents.mp4";

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  //Goup Events by Categories and display group of Events inside their respective category
  const eventsByCategory = filteredEvents.reduce((acc, event) => {
    event.categoryIds.forEach((categoryId) => {
      if (!acc[categoryId]) {
        acc[categoryId] = [];
      }
      acc[categoryId].push(event);
    });
    return acc;
  }, {});

  const columns = useBreakpointValue({ base: 1, sm: 2, md: 3, lg: 4 });

  return (
    <>
      <Box
        bgColor={"#000000"}
        color="#d5d1bf"
        minH={{ base: "900vh", sm: "370vh", md: "390vh", "2xl": "320vh" }}
        minW={"100%"}
      >
        <Flex
          align={{ base: "center", md: "flex-start" }}
          justify={"center"}
          // minH={"80vh"}
          w={{ base: "100%", sm: "70%", md: "100%" }}
          direction={{ base: "column", sm: "column", md: "row" }}
        >
          <Box
            position={"relative"}
            left={0}
            top={{ base: "5rem", sm: "2rem", md: "2rem" }}
          >
            <Box
              display={"flex"}
              justifyContent="center"
              alignItems={"center"}
              position={"relative"}
              left={{ base: 0, sm: "20%", md: "0%", "2xl": 0 }}
              top={{ base: 0, sm: "1rem", md: "1rem", "2xl": "3rem" }}
              border={"1px solid rgba(213, 209, 191, 0.3)"}
              borderRadius={"24px"}
              width={{ base: "70%", sm: "75%", md: "60%", "2xl": "80%" }}
              height={"auto"}
              mx={"auto"}
              py={10}
              marginBottom={{ base: 0, sm: 0, md: 0, "2xl": "2rem" }}
            >
              <Flex
                width={"90%"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={{ base: "20px", sm: "5%", md: "4.5%", "2xl": "5%" }}
                flexDirection={{ base: "column", sm: "row", md: "row" }}
              >
                <Box
                  as="video"
                  src={videoLeft}
                  autoPlay
                  loop
                  muted
                  playsInline
                  objectFit={"contain"}
                  width={"50%"}
                  maxWidth={"550px"}
                  border={"1px solid rgba(213, 209, 191, 0.3)"}
                  borderRadius={"14px"}
                ></Box>
                <Heading
                  display={"flex"}
                  justifyContent={"start"}
                  align={"start"}
                  fontFamily={orbitronFontFamily}
                  fontWeight={orbitronWeight.bold}
                  color={"rgba(213, 209, 191, 0.5)"}
                  fontSize={{
                    base: "24px",
                    sm: "30px",
                    md: "40px",
                    "2xl": "60px",
                  }}
                  lineHeight={"1.2"}
                  maxW={{
                    base: "100%",
                    sm: "300px",
                    md: "400px",
                    "2xl": "500px",
                  }}
                >
                  <Typewriter text={header} delay={100} />
                </Heading>
                <Box
                  as="video"
                  src={videoRight}
                  autoPlay
                  loop
                  muted
                  playsInline
                  objectFit={"scale-down"}
                  width={"50%"}
                  maxWidth={"550px"}
                  border={"1px solid rgba(213, 209, 191, 0.3)"}
                  borderRadius={"14px"}
                ></Box>
              </Flex>
            </Box>
          </Box>
        </Flex>

        {/* Sliding Text - Mid Section */}
        <Box
          display={"flex"}
          justifyContent={"center"}
          align={"center"}
          position={"relative"}
          top={{ base: "5rem", sm: "6rem", md: "20rem" }}
          right={{ base: 6, sm: "1.5rem", md: 0 }}
        >
          <TextAnimation />
        </Box>

        {/* Search Event Input */}

        <Flex
          align={{ base: "center", sm: "flex-start", md: "flex-start" }}
          justify={{ base: "center", sm: "flex-start", md: "flex-start" }}
        >
          <Box>
            <Text
              fontFamily={orbitronFontFamily}
              fontWeight={orbitronWeight.bold}
              fontSize={{ base: "0.6rem", sm: "0.7rem", md: "0.8rem" }}
              color="rgba(213, 209, 191, 0.8)"
              position={"relative"}
              left={{ base: "22%", sm: "25%", md: "60%", "2xl": "43%" }}
              top={{ base: "170px", sm: "150px", md: "500px" }}
              letterSpacing={"0.09rem"}
            >
              Search Events:
              <SearchItem
                events={events}
                handleFilteredEvents={handleFilteredEvents}
              />
            </Text>
          </Box>

          {/* Modal Form - Create Buttom*/}
          <Box w={{ base: "100%", sm: "100%", md: "100%" }}>
            <Button
              maxW={"100%"}
              position={"relative"}
              z-index={10}
              left={{ base: "-90%", sm: "50%", md: "70%", "2xl": "72.5%" }}
              top={{ base: "250px", sm: "190px", md: "550px" }}
              onClick={openModal}
              bgColor="rgba(213, 209, 191, 0.5)"
              color="#c50d34"
              fontFamily={orbitronFontFamily}
              fontWeight={orbitronWeight.medium}
              mb={{ base: "2rem", md: "5rem" }}
              fontSize={{ base: "0.7rem", sm: "0.7rem", md: "0.8rem" }}
              _hover={{
                bgColor: "rgba(213, 209, 191, 0.5)",
                color: "#051622",
              }}
            >
              {" "}
              + Add Event
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
          </Box>
        </Flex>

        {/* This Flex manages the whole Cards Box */}
        <Flex align="center" justify="center" minH="100vh">
          <div className="events-page">
            {/* Outside Box with Search and Cards */}

            <Box
              p={4}
              w={{ base: "100%", sm: "90%", md: "100%", "2xl": "85rem" }}
              h={"100%"}
              mb={{ base: "-100px", sm: 0, md: "1rem" }}
              padding={{ base: "1rem", sm: "2rem", md: "2rem" }}
              position={"relative"}
              left={{ base: 0, sm: "5%", md: 0 }}
              right={{ base: 0, sm: 0, md: 0 }}
              top={{ base: "12rem", sm: "6rem", md: "50vh" }}
            >
              {/* Events Cards Grid */}
              {/* <Flex align={"center"} justify={"center"}>
                <SimpleGrid
                  columns={columns}
                  gap={8}
                  position={"relative"}
                  right={{ base: "22%", sm: 0, md: 0 }}
                  top={{ base: "40px", sm: 0, md: 0 }}
                  w={{ base: "45%", sm: "90%", md: "100%" }}
                > */}
              {/* //map through filtered events/+ Search functionality - Root component/ SeearchItem component*/}
              {/* {filteredEvents.map((event) => (
                    <Link to={`/event/${event.id}`} key={event.id}>
                      <EventsCard
                        key={event.id}
                        event={event}
                        categories={categories}
                      />
                    </Link>
                  ))}
                </SimpleGrid>
              </Flex> */}

              {Object.keys(eventsByCategory).map((categoryId) => {
                const category = categories.find(
                  (cat) => cat.id === categoryId
                );
                const categoryEvents = eventsByCategory[categoryId];

                if (categoryEvents.length === 0) return null; // If no events in this category, skip rendering

                return (
                  <Box
                    key={categoryId}
                    mb={8}
                    position={"relative"}
                    top={{ base: 0, sm: 0, md: 0 }}
                    left={{ base: 2, sm: 0, md: "2%" }}
                  >
                    <Heading
                      paddingTop={7}
                      size={{ base: "md", sm: "md", md: "md" }}
                      mb={5}
                      mt={1}
                      color={"#c50d34"}
                      fontFamily={robotoSlabFont}
                      fontWeight={"700"}
                      letterSpacing={1.5}
                    >
                      {category ? category.name : "Unknown Category"}
                    </Heading>

                    <SimpleGrid
                      columns={columns}
                      gap={{ base: 8, sm: 8, md: 4, "2xl": 10 }}
                      w={"100%"}
                    >
                      {categoryEvents.map((event) => (
                        <Link to={`/event/${event.id}`} key={event.id}>
                          <EventsCard event={event} categories={categories} />
                        </Link>
                      ))}
                    </SimpleGrid>
                  </Box>
                );
              })}
            </Box>
          </div>
        </Flex>
      </Box>
    </>
  );
};
