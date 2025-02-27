import { useContext, useState } from "react";
import React from "react";
// import { UserPage } from "./UserPage";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Typewriter from "../components/Typewriter";
import { API_URL } from "../components/UI/constants";
import { EditEvent } from "../components/forms/EditEvent";

import {
  Heading,
  Center,
  Flex,
  Image,
  Text,
  Stack,
  Box,
  Grid,
  Button,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import DataContext from "../components/Root";

export const EventPage = () => {
  const { deleteEvent, header, users, categories } = useContext(DataContext);

  const { eventId } = useParams();

  const navigate = useNavigate();

  const toast = useToast();

  const [event, setEvent] = useState(null);
  const [creator, setCreator] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [categories, setCategories] = useState([]);
  // const [users, setUsers] = useState([]);

  // Modal pop-up
  const [isModalOpen, setIsModalOpen] = useState(false);
  //Toast
  const toastEdit = useToast();

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await fetch(`${API_URL}/events/${eventId}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch event data: ${response.statusText}`);
        }
        const eventData = await response.json();
        setEvent(eventData);

        //Fetch creator's data by createdBy
        const createdById =
          typeof eventData.createdBy === "object"
            ? eventData.createdBy.id
            : eventData.createdBy;

        const userResponse = await fetch(`${API_URL}/users/${createdById}`);
        if (!userResponse) {
          throw new Error(
            `Failed to fetch creator data: ${userResponse.statusText}`
          );
        }
        const creatorData = await userResponse.json();

        setCreator(creatorData);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data from event:", error);
        setLoading(false);
      }
    };

    fetchEventData();
  }, [eventId]);

  if (!event || !creator) {
    return <div> Loading event data...</div>;
  }

  //Delete handler and redirect to EventsPage after deleting
  const handleDeleteClick = async (eventId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this event?"
    );
    if (confirmed) {
      try {
        const response = await fetch(`${API_URL}/events/${eventId}`, {
          method: "DELETE",
        });
        if (response.ok) {
          deleteEvent(eventId);
          navigate("/");
          toast({
            title: "Event Deleted",
            description: "The event has been successfully deleted",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
        } else {
          toast({
            title: "Error",
            description: "An Error occurred while deleting the event",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      } catch (error) {
        console.error("Error deleting event:", error);
      }
    }
  };

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
      bgColor="rgba(213, 209, 191, 0.8)"
      color="#d5d1bf"
      minH="100vh"
      paddingTop={"100px"}
    >
      <Heading
        color="#0f0f0f"
        fontSize={{
          base: "24px",
          sm: "30px",
          md: "40px",
          "2xl": "60px",
        }}
        lineHeight={"1.2"}
        mb={{ base: 0, sm: "2rem", md: 0 }}
        position={"relative"}
        top={{ base: "-4rem", md: "-3rem", "2xl": "-4rem" }}
        left={{ base: "1.2rem", sm: "1rem", md: "5.5rem", "2xl": "8%" }}
        fontFamily={orbitronFontFamily}
        fontWeight={orbitronWeight.semibold}
        maxW={{
          base: "60%",
          sm: "300px",
          md: "400px",
          "2xl": "500px",
        }}
      >
        <Typewriter text={header} delay={100} />
      </Heading>
      {/* Event Header / Top Line */}
      <Box
        display={"flex"}
        justifyContent={{ base: "center", sm: "center", md: "flex-end" }}
        position={"relative"}
        top={{ base: "-2.5rem", sm: "-4rem", md: "-1rem", "2xl": "-2.5rem" }}
        mb={{ base: "0", sm: "0", md: "0", "2xl": "2rem" }}
        bgColor={"#0f0f0f"}
        width={"100%"}
      >
        <Text
          color={"#d5d1bf"}
          w={{ base: "30%", sm: "15%", md: "20%", "2xl": "19%" }}
          fontSize={{
            base: "16px",
            sm: "20px",
            md: "25px",
          }}
          fontFamily={orbitronFontFamily}
          fontWeight={orbitronWeight.semibold}
        >
          {event.title}
        </Text>
      </Box>

      {/* Botton Section */}
      <Flex
        justify={{ base: "center", sm: "center", md: "flex-end" }}
        direction={{ base: "column", sm: "column", md: "row" }}
        p={{ base: 3, sm: 8 }}
      >
        <Box
          mb={{ base: "2rem", sm: 0, md: "0" }}
          position="relative"
          top={{ base: "-1.5rem", sm: 0, md: "-0.5rem", "2xl": "-2rem" }}
          right={{ base: 1, sm: 0, md: "2rem", "2xl": "8rem" }}
        >
          {/* Edit Event Button to open modal*/}
          <Button
            onClick={openModal}
            w={"50%"}
            bgColor={"rgba(213, 209, 191, 0.5)"}
            border={"1px solid #0f0f0f"}
            color={"#051622"}
            position={"relative"}
            left={{ base: 0, sm: "0.1rem", md: "0.7rem" }}
            mb={4}
            fontSize={{ base: "0.7rem", sm: "0.8rem", md: "0.7rem" }}
            _hover={{
              bgColor: "#0f0f0f",
              color: "#c50d34",
            }}
            fontFamily={orbitronFontFamily}
            fontWeight={orbitronWeight.medium}
          >
            Edit Event
          </Button>

          {/* Modal Form */}
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Edit New Event</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                {/* NewEvent goes here */}
                <EditEvent
                  isOpen={isModalOpen}
                  onClose={closeModal}
                  initialData={{ ...event, eventId: eventId }}
                  //add setEvent to upload the changes on the page
                  setEvent={setEvent}
                  categories={categories}
                  users={users}
                />
              </ModalBody>
              <ModalFooter>
                {/* Additional modal footer actions */}
                <Button onClick={openModal}>Edit Event</Button>
                <Button onClick={closeModal}>Close</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          {/* Delete Event Button */}
          <Button
            onClick={() => handleDeleteClick(event.id)}
            w={"50%"}
            bgColor="rgba(213, 209, 191, 0.5)"
            border="1px solid #0f0f0f"
            color={"#c50d34"}
            deleteEvent={deleteEvent}
            position={"relative"}
            left={{ base: "0.6rem", sm: "1rem", md: "2rem" }}
            mb={4}
            fontSize={{ base: "0.7rem", sm: "0.8rem", md: "0.7rem" }}
            _hover={{
              color: "#0f0f0f",
              bgColor: "#c50d34",
              border: "none",
            }}
            fontFamily={orbitronFontFamily}
            fontWeight={orbitronWeight.medium}
          >
            Delete Event
          </Button>
        </Box>
      </Flex>

      {/* event box */}
      <Flex
        display={"flex"}
        justifyContent={"center"}
        align={"center"}
        gap={1}
        w={{ base: "100%", sm: "85%", md: "75%", "2xl": "100%" }}
        flexWrap="wrap"
        flexDir="column"
      >
        <Box
          p={4}
          border="1px solid #0f0f0f"
          bgColor={"rgba(213, 209, 191, 0.8)"}
          w={{ base: "95%", sm: "100%", md: "100%", lg: "80%", " 2xl": "50%" }}
          h={"auto"}
          borderRadius={"md"}
          position={"relative"}
          left={{ base: 0, sm: "8%", md: "16%", lg: "15%", "2xl": 0 }}
          top={{ base: "-1rem", sm: "3rem", md: 0, "2xl": "-7rem" }}
          mb={{ base: "5rem", md: "10rem" }}
        >
          <Box
            bgColor={"#0f0f0f"}
            borderRadius={"md"}
            padding={{ base: "1rem", sm: "0.7rem", md: "3rem" }}
          >
            {/* Event image */}
            <Center>
              <Image
                src={event.image}
                alt={event.title}
                objectFit={"cover"}
                borderRadius={"full"}
                mb={4}
                w={{
                  base: "100%",
                  sm: "60%",
                  md: "50%",
                  lg: "60%",
                  "2xl": "70%",
                }}
                h={{
                  base: "15%",
                  sm: "20%",
                  md: "10rem",
                  lg: "13rem",
                  "2xl": "16rem",
                }}
              />
            </Center>

            {/* Artist Lineup */}
            <Text
              fontSize={{
                base: "16px",
                sm: "18px",
                md: "18px",
                "2xl": "20pxs",
              }}
              bgGradient="linear(to-br, #00ffbc, #0ee399)"
              bgClip={"text"}
              paddingBottom={"0.8rem"}
              fontFamily={orbitronFontFamily}
              fontWeight={orbitronWeight.medium}
              letterSpacing={{ base: "0.05rem", md: "0.12rem" }}
            >
              Artists:
            </Text>
            <Text
              fontSize={{ base: "0.6rem", sm: "0.7rem", md: "0.7rem" }}
              letterSpacing={{ base: "0.05rem", md: "0.06rem" }}
              fontFamily={robotoSlabFont}
              fontWeight={robotoSlabWeight.thin}
              paddingLeft={"2rem"}
              color={"#d5d1bf"}
              paddingBottom={"1rem"}
            >
              {event.lineup}
            </Text>

            {/* Location */}
            <Text
              fontSize={{
                base: "16px",
                sm: "18px",
                md: "18px",
                "2xl": "20pxs",
              }}
              fontFamily={orbitronFontFamily}
              fontWeight={orbitronWeight.medium}
              bgGradient="linear(to-br, #00ffbc, #0ee399)"
              bgClip={"text"}
              mt={{ base: "1.5px", md: "3px" }}
              letterSpacing={{ base: "0.05rem", md: "0.12rem" }}
            >
              Location
            </Text>
            <Text
              fontSize={{ base: "0.6rem", sm: "0.7rem", md: "0.7rem" }}
              letterSpacing={{ base: "0.05rem", md: "0.06rem" }}
              fontFamily={robotoSlabFont}
              fontWeight={robotoSlabWeight.thin}
              color={"#d5d1bf"}
            >
              {event.location}
            </Text>

            {/* Start Time and End Time */}
            <Grid
              templateColumns={{ base: "1fr", md: "1fr 1fr" }}
              gap={8}
              mt={4}
              marginTop={"2.5rem"}
            >
              <Box>
                <Text
                  fontSize={{
                    base: "16px",
                    sm: "18px",
                    md: "18px",
                    "2xl": "20pxs",
                  }}
                  fontFamily={orbitronFontFamily}
                  fontWeight={orbitronWeight.medium}
                  color={"#ff005f"}
                  letterSpacing={{ base: "0.05rem", md: "0.12rem" }}
                >
                  Start Time:
                </Text>
                <Text
                  fontSize={{ base: "0.6rem", sm: "0.7rem", md: "0.7rem" }}
                  letterSpacing={{ base: "0.05rem", md: "0.06rem" }}
                  fontFamily={robotoSlabFont}
                  fontWeight={robotoSlabWeight.thin}
                  color={"#d5d1bf"}
                >
                  {event.startTime}
                </Text>

                <Text
                  fontSize={{
                    base: "16px",
                    sm: "18px",
                    md: "18px",
                    "2xl": "20pxs",
                  }}
                  // paddingTop={"0.5rem"}
                  fontFamily={orbitronFontFamily}
                  fontWeight={orbitronWeight.medium}
                  color={"#ff005f"}
                  mt={{ base: "5px", md: "10px" }}
                  letterSpacing={{ base: "0.05rem", md: "0.12rem" }}
                >
                  End Time:
                </Text>
                <Text
                  fontSize={{ base: "0.6rem", sm: "0.7rem", md: "0.7rem" }}
                  letterSpacing={{ base: "0.05rem", md: "0.06rem" }}
                  fontFamily={robotoSlabFont}
                  fontWeight={robotoSlabWeight.thin}
                  color={"#d5d1bf"}
                >
                  {event.endTime}
                </Text>
              </Box>

              {/* Render UserPage/creator */}
              <Flex
                display={"flex"}
                justifyContent="center"
                w={"100%"}
                direction={"column"}
                alignItems={"center"}
                position={"relative"}
                mb={{ base: "1rem", md: "1rem" }}
              >
                <Text
                  w={"100%"}
                  color={"#d5d1bf"}
                  fontWeight={"bold"}
                  fontSize={{
                    base: "16px",
                    sm: "18px",
                    md: "18px",
                    "2xl": "20pxs",
                  }}
                  marginBottom={2}
                  position={"relative"}
                  left={{ base: "5.5rem", sm: "11.2rem", md: "4rem" }}
                  fontFamily={orbitronFontFamily}
                  letterSpacing={{ base: "0.05rem", md: "0.06rem" }}
                >
                  Event Creator
                </Text>
                {/* <UserPage userId={event.createdBy} /> */}
                {/* testing */}
                {/* <Image
                    src={event.createdBy.image}
                    alt={event.createdBy.name}
                    borderRadius={"full"}
                    boxSize={"100px"}
                    mt={4}
                  />
                  <Text>{event.createdBy.name}</Text> */}
                {creator && (
                  <Box
                    fontFamily={orbitronFontFamily}
                    fontWeight={"medium"}
                    fontSize={{ base: "0.9rem", sm: "0.7rem", md: "0.7rem" }}
                    letterSpacing={{ base: "0.05rem", md: "0.06rem" }}
                    color={"#FFFDE1"}
                  >
                    <Image
                      src={creator.image}
                      alt={creator.name}
                      objectFit={"cover"}
                      w={{ base: "3rem", md: "5rem" }}
                      h={{ base: "3rem", md: "5rem" }}
                      borderRadius={"full"}
                      boxSize={"100px"}
                      mt={2}
                      position={"relative"}
                      left={{ base: 0, sm: "1rem" }}
                    />
                    <Text
                      fontSize={{ base: "0.6rem", sm: "0.7rem", md: "0.7rem" }}
                      mt={3}
                      mb={6}
                      position={"relative"}
                      left={{ base: 0, sm: "0.5rem" }}
                    >
                      {creator.name}
                    </Text>
                  </Box>
                )}
              </Flex>
            </Grid>

            {/* Description */}
            <Center>
              <Text
                fontSize={{ base: "0.6rem", sm: "0.7rem", md: "0.7rem" }}
                letterSpacing={{ base: "0.05rem", md: "0.06rem" }}
                color={"yellow.300"}
                mb={"0.5rem"}
                fontFamily={orbitronFontFamily}
                fontWeight={orbitronWeight.medium}
              >
                {event.description}
              </Text>
            </Center>

            {/* //categories */}
            <Center>
              <Stack direction={"row"} mt={2}>
                {/* checks  if it is indeed an array */}
                {Array.isArray(event.categoryIds) ? (
                  event.categoryIds.map((categoryId) => {
                    const category = categories.find(
                      (category) => category.id === categoryId
                    );

                    if (!category) return null;

                    return (
                      <Text
                        key={category.id}
                        color="#ff005f"
                        fontSize={{ base: "0.7rem", md: "14px" }}
                        letterSpacing={{ base: "0.05rem", md: "0.06rem" }}
                        mr={2}
                        fontFamily={orbitronFontFamily}
                        fontWeight={orbitronWeight.light}
                      >
                        {category.name}
                      </Text>
                    );
                  })
                ) : (
                  <Text>No categories available</Text>
                )}
              </Stack>
            </Center>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};
