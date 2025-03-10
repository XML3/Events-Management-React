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
  const orbitronFontFamily = "Orbitron, sans-serif";
  const orbitronWeight = {
    fontWeights: {
      normal: 400,
      medium: 600,
      semibold: 700,
      bold: 900,
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
    if (!event) return acc;
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
        bgColor="rgba(213, 209, 191, 0.8)"
        color="#0f0f0f"
        minH={{
          base: "410vh",
          sm: "410vh",
          md: "390vh",
          lg: "320vh",
          "2xl": "360vh",
        }}
        minW={"100%"}
        maxW={"100%"}
      >
        <Flex
          align={{ base: "center", md: "flex-start" }}
          justify={"center"}
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
              border={"1px solid #0f0f0f"}
              borderRadius={"24px"}
              width={{ base: "90%", sm: "75%", md: "60%", "2xl": "80%" }}
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
                  width={{ base: "90%", sm: "50%" }}
                  maxWidth={"550px"}
                  border={"1px solid #0f0f0f"}
                  p={{ base: 3, md: 4 }} //*** */
                  borderRadius={"14px"}
                ></Box>
                <Heading
                  display={"flex"}
                  justifyContent={"start"}
                  align={"start"}
                  fontFamily={orbitronFontFamily}
                  fontWeight={orbitronWeight.bold}
                  color={"#0f0f0f"}
                  fontSize={{
                    base: "24px",
                    sm: "30px",
                    md: "40px",
                    "2xl": "60px",
                  }}
                  lineHeight={"1.2"}
                  maxW={{
                    base: "70%",
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
                  width={{ base: "90%", sm: "50%" }}
                  maxWidth={"550px"}
                  // border={"1px solid rgba(213, 209, 191, 0.3)"}
                  border={"1px solid #0f0f0f"}
                  p={{ base: 3, md: 4 }} //*** */
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
          top={{ base: "3rem", sm: "1rem", md: "13rem", "2xl": "20rem" }}
          right={{ base: 6, sm: "1.5rem", md: 0 }}
        >
          <TextAnimation />
        </Box>
        {/* Black Stripe - Events */}
        <Box
          display={"flex"}
          justifyContent={{ base: "center", sm: "center", md: "flex-end" }}
          position={"relative"}
          top={{ base: "3rem", sm: "2.5rem", md: "13rem", "2xl": "25rem" }}
          mb={{ base: "0", sm: "2rem", md: "2rem" }}
          bgColor={"#0f0f0f"}
          width={"100%"}
        >
          <Text
            color={"#d5d1bf"}
            w={{ base: "25%", sm: "20%", "2xl": "17%" }}
            fontSize={{
              base: "20px",
              sm: "22px",
              md: "25px",
            }}
            top={{ base: 5, sm: 20, md: 0 }}
            fontFamily={orbitronFontFamily}
            fontWeight={orbitronWeight.semibold}
          >
            Events
          </Text>
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
              // color="rgba(213, 209, 191, 0.8)"
              color={"#0f0f0f"}
              position={"relative"}
              left={{ base: "22%", sm: "25%", md: "20%", "2xl": "43%" }}
              top={{ base: "170px", sm: "4rem", md: "15rem", "2xl": "500px" }}
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
              top={{ base: "250px", sm: "5.5rem", md: "17rem", "2xl": "550px" }}
              onClick={openModal}
              bgColor="rgba(213, 209, 191, 0.3)"
              border={"1px solid  #0f0f0f"}
              color="#c50d34"
              fontFamily={orbitronFontFamily}
              fontWeight={orbitronWeight.medium}
              mb={{ base: "2rem", md: "5rem" }}
              fontSize={{ base: "0.7rem", sm: "0.7rem", md: "0.8rem" }}
              _hover={{
                bgColor: "#0f0f0f",
                color: "#c50d34",
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
              h={"100%"}
              mb={{ base: "-100px", sm: 0, md: "1rem" }}
              position={"relative"}
              top={{ base: "12rem", sm: "2.5rem", md: "12rem", "2xl": "50vh" }}
            >
              {Object.keys(eventsByCategory).map((categoryId) => {
                const category = categories.find(
                  (cat) => cat.id === categoryId
                );
                const categoryEvents = eventsByCategory[categoryId];

                if (categoryEvents.length === 0) return null; // If no events in this category, skip rendering

                return (
                  <Box key={categoryId} mb={8}>
                    <Heading
                      w={"35%"}
                      position={"relative"}
                      left={{
                        base: "33%",
                        sm: "20%",
                        md: "0",
                        lg: "12%",
                        "2xl": "2%",
                      }}
                      paddingTop={7}
                      size={{ base: "sm", sm: "sm", md: "md" }}
                      mb={2}
                      mt={1}
                      color={"#0f0f0f"}
                      fontFamily={orbitronFontFamily}
                      fontWeight={"700"}
                      letterSpacing={1.5}
                    >
                      {category ? category.name : "Unknown Category"}
                    </Heading>

                    {/* <SimpleGrid
                      bgColor={"gray.900"}
                      p={"30px"}
                      columns={columns}
                      gap={{ base: 8, sm: 8, md: 0, "2xl": 10 }}
                      w={"100%"}
                    >
                      {categoryEvents.map((event) => (
                        <Link to={`/event/${event.id}`} key={event.id}>
                          <EventsCard event={event} categories={categories} />
                        </Link>
                      ))}
                    </SimpleGrid> */}
                    {categoryEvents && categoryEvents.length > 0 && (
                      <EventsCarousel categoryEvents={categoryEvents} />
                    )}
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
