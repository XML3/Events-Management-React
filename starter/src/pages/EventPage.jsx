import { useContext, useState } from "react";
import React from "react";
// import { UserPage } from "./UserPage";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
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
  const { deleteEvent, users, categories } = useContext(DataContext);

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

  //FONT WorkSans
  const workSansFontFamily = "Work Sans, sans-serif";
  const workSansWeight = {
    fontWeights: {
      normal: 400,
      medium: 600,
      semibold: 700,
      bold: 900,
    },
  };

  const eventHero = "/img/event-page-hero3.png";

  return (
    <Box
      bgColor="#D9D9D9"
      color="#d5d1bf"
      minW={"100%"}
      maxW={"100%"}
      width={"100%"}
    >
      <Box minHeight={"100dvh"}>
        <Flex
          align={{ base: "center", md: "flex-start" }}
          direction={{ base: "column", md: "row" }}
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
              src={eventHero}
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
                  "2xl": "0",
                }}
              >
                {event.title}
              </Heading>
              <Box w={"100%"}>
                <Text
                  color={"#D9D9D9"}
                  fontFamily={workSansFontFamily}
                  fontWeight={600}
                  fontSize={{
                    base: "20px",
                    sm: "25px",
                    md: "32px",
                    "2xl": "32px",
                  }}
                >
                  {event.description}
                </Text>
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
              bgColor={"#0f0f0f"}
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
                color={"#fff"}
                letterSpacing={"0.09rem"}
                textAlign={"center"}
                px={{ base: "2px", sm: 0 }}
              >
                Scroll down to view, edit or delete event.
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>

      {/* 2nd Section */}
      <Box
        minHeight={{ base: "77dvh", sm: "90dvh", md: "70dvh", lg: "100dvh" }}
        sx={{
          "@media screen and (max-height: 550px)": {
            minHeight: "110vh",
          },
        }}
      >
        {/* Black Middle Line */}
        <Box
          position={"relative"}
          bottom={{ base: 3, sm: 0, md: 0, lg: "1.2rem", "2xl": 1.5 }}
          sx={{
            "@media screen and (max-height: 550px)": {
              bottom: "5.6rem",
            },
          }}
          width={"100%"}
          border="1px solid #0f0f0f"
        >
          {" "}
        </Box>

        <Flex width={"100%"} justifyContent={"center"} mt={"2rem"}>
          <Text
            width={{ base: "100%", sm: "50%" }}
            textAlign={"center"}
            fontSize={{
              base: "18px",
              sm: "22px",
              md: "18px",
              lg: "20px",
              "2xl": "22px",
            }}
            fontFamily={bebasNeueFontFamily}
            letterSpacing={"0.1rem"}
            color="#0f0f0f"
            mt={6}
            sx={{
              "@media screen and (max-height: 550px)": {
                mt: -20,
              },
            }}
            mb={"5rem"}
            px={4}
          >
            You're viewing details for a selected event. Below you'll find all
            the important information including dates, location, and the event
            organizer.
          </Text>
        </Flex>

        {/* event box & Buttons */}
        <Box
          display={"flex"}
          flexDir={{ base: "column", lg: "row" }}
          sx={{
            "@media screen and (max-height: 550px)": {
              flexDir: "row",
              mb: "2rem",
              mt: -8,
            },
          }}
          justifyContent={{ base: "center", lg: "space-between" }}
          alignItems={"center"}
          textAlign={"center"}
          pl={{ base: 0, lg: "8%", "2xl": "25%" }}
          pr={{ base: 0, lg: "8%", "2xl": "25%" }}
          w={"100%"}
          h={"auto"}
          mb={{ base: "5rem", md: "10rem", "2xl": "5rem" }}
        >
          {/* event box */}
          <Flex
            flexDirection={"column"}
            justifyContent={"center"}
            align={"center"}
            width={{ base: "100%", sm: "85%", md: "100%", "2xl": "100%" }}
            maxW={{ base: "100%", sm: "100%", lg: "50%", "2xl": "45%" }}
            sx={{
              "@media screen and (max-height: 550px)": {
                maxWidth: "40%",
              },
            }}
            flexWrap="wrap"
          >
            <Box
              bgColor={"#0f0f0f"}
              borderRadius={"14px"}
              padding={{
                base: "1rem",
                sm: "1rem",
                md: "3rem",
                lg: "3rem",
                "2xl": "1.5rem",
              }}
              sx={{
                "@media screen and (max-height: 550px)": {
                  padding: "0.8rem",
                },
              }}
            >
              {/* Event image */}

              <Image
                src={event.image}
                alt={event.title}
                objectFit={"cover"}
                borderRadius={"12px"}
                mb={4}
                w={"100%"}
                h={{
                  base: "15%",
                  sm: "15rem",
                  md: "17rem",
                  lg: "15rem",
                  "2xl": "10rem",
                }}
                sx={{
                  "@media screen and (max-height: 550px)": {
                    h: "12rem",
                  },
                }}
              />

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
                fontFamily={bebasNeueFontFamily}
                fontWeight={bebasNeuenWeight.medium}
                letterSpacing={{ base: "0.05rem", md: "0.12rem" }}
              >
                Artists:
              </Text>
              <Text
                fontSize={{ base: "0.6rem", sm: "0.7rem", md: "0.7rem" }}
                letterSpacing={{ base: "0.05rem", md: "0.06rem" }}
                fontFamily={workSansFontFamily}
                fontWeight={workSansWeight.thin}
                paddingLeft={"2rem"}
                color="rgba(213, 209, 191, 1)"
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
                fontFamily={bebasNeueFontFamily}
                fontWeight={bebasNeuenWeight.medium}
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
                fontFamily={workSansFontFamily}
                fontWeight={workSansWeight.thin}
                color="rgba(213, 209, 191, 1)"
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
                    fontFamily={bebasNeueFontFamily}
                    fontWeight={bebasNeuenWeight.medium}
                    color={"#ff005f"}
                    letterSpacing={{ base: "0.05rem", md: "0.12rem" }}
                  >
                    Start Time:
                  </Text>
                  <Text
                    fontSize={{ base: "0.6rem", sm: "0.7rem", md: "0.7rem" }}
                    letterSpacing={{ base: "0.05rem", md: "0.06rem" }}
                    fontFamily={workSansFontFamily}
                    fontWeight={workSansWeight.thin}
                    color="rgba(213, 209, 191, 1)"
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
                    fontFamily={bebasNeueFontFamily}
                    fontWeight={bebasNeuenWeight.thin}
                    color={"#ff005f"}
                    mt={{ base: "5px", md: "10px" }}
                    letterSpacing={{ base: "0.05rem", md: "0.12rem" }}
                  >
                    End Time:
                  </Text>
                  <Text
                    fontSize={{ base: "0.6rem", sm: "0.7rem", md: "0.7rem" }}
                    letterSpacing={{ base: "0.05rem", md: "0.06rem" }}
                    fontFamily={bebasNeueFontFamily}
                    fontWeight={bebasNeuenWeight.thin}
                    color="rgba(213, 209, 191, 1)"
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
                    color="rgba(213, 209, 191, 1)"
                    fontWeight={"bold"}
                    fontSize={{
                      base: "16px",
                      sm: "18px",
                      md: "18px",
                      "2xl": "20pxs",
                    }}
                    marginBottom={2}
                    position={"relative"}
                    fontFamily={bebasNeueFontFamily}
                    letterSpacing={{ base: "0.05rem", md: "0.06rem" }}
                  >
                    Event Creator
                  </Text>

                  {creator && (
                    <Box
                      fontFamily={bebasNeueFontFamily}
                      fontWeight={"medium"}
                      fontSize={{ base: "0.9rem", sm: "0.7rem", md: "0.7rem" }}
                      letterSpacing={{ base: "0.05rem", md: "0.06rem" }}
                      color="rgba(213, 209, 191, 1)"
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
                      />
                      <Text
                        fontSize={{
                          base: "0.6rem",
                          sm: "0.7rem",
                          md: "0.7rem",
                        }}
                        mt={3}
                        mb={6}
                        position={"relative"}
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
                  fontFamily={bebasNeueFontFamily}
                  fontWeight={bebasNeuenWeight.medium}
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
                          fontFamily={bebasNeueFontFamily}
                          fontWeight={bebasNeuenWeight.light}
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
          </Flex>

          {/* Botton Section */}
          <Box
            mt={{ base: "2rem", md: 0 }}
            mb={{ base: "2rem", sm: 0, md: "0" }}
            display={"flex"}
            justifyContent={"center"}
          >
            <Flex
              justify={{ base: "center", sm: "center", md: "space-between" }}
              direction={{ base: "column", sm: "column", md: "column" }}
              p={{ base: 3, sm: 8 }}
            >
              {/* Edit Event Button to open modal*/}
              <Box borderBottom={"1px solid #0f0f0f"} p={"4%"}>
                <Text
                  color={"#0f0f0f"}
                  fontFamily={workSansFontFamily}
                  fontWeight={400}
                  letterSpacing={1}
                  fontSize={{
                    base: "0.7rem",
                    sm: "0.8rem",
                    md: "0.7rem",
                    lg: "0.7rem",
                    "2xl": "0.9rem",
                  }}
                >
                  {" "}
                  Want to make changes to your event? <br></br>Use the Edit
                  button
                </Text>
                <Button
                  onClick={openModal}
                  bgColor={"#FFE054"}
                  border={"1px solid #0f0f0f"}
                  color={"#0f0f0f"}
                  mt={"2rem"}
                  px={"55px"}
                  letterSpacing={1.5}
                  fontSize={{
                    base: "0.7rem",
                    sm: "0.8rem",
                    md: "0.7rem",
                    lg: "0.7rem",
                    "2xl": "0.9rem",
                  }}
                  _hover={{
                    bgColor: "#0f0f0f",
                    color: "#c50d34",
                  }}
                  fontFamily={bebasNeueFontFamily}
                  fontWeight={400}
                >
                  Edit Event
                </Button>

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
              </Box>

              {/* Delete Event Button */}
              <Box borderBottom={"1px solid #0f0f0f"} p={"4%"}>
                <Text
                  color={"#0f0f0f"}
                  fontFamily={workSansFontFamily}
                  fontWeight={400}
                  letterSpacing={1}
                  fontSize={{
                    base: "0.7rem",
                    sm: "0.8rem",
                    md: "0.7rem",
                    lg: "0.7rem",
                    "2xl": "0.9rem",
                  }}
                >
                  {" "}
                  Want to make delete to your event? <br></br>Use the Delete
                  button
                </Text>
                <Button
                  onClick={() => handleDeleteClick(event.id)}
                  bgColor="#D9D9D9"
                  border="1px solid #0f0f0f"
                  color={"#c50d34"}
                  deleteEvent={deleteEvent}
                  px={"55px"}
                  mt={"2rem"}
                  fontSize={{
                    base: "0.7rem",
                    sm: "0.8rem",
                    md: "0.7rem",
                    lg: "0.7rem",
                    "2xl": "0.9rem",
                  }}
                  letterSpacing={1.5}
                  _hover={{
                    color: "#0f0f0f",
                    bgColor: "#c50d34",
                    border: "none",
                  }}
                  fontFamily={bebasNeueFontFamily}
                  fontWeight={400}
                >
                  Delete Event
                </Button>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>

      <Box
        display={"flex"}
        justifyContent={{ base: "center", md: "left" }}
        pl={{ base: 0, md: "2rem" }}
      >
        <Button
          mt={{ base: 10, "2xl": 0 }}
          mb={{ base: 0, "2xl": 10 }}
          fontFamily={workSansFontFamily}
          fontWeight={600}
          fontSize={{ base: "18px", sm: "20px" }}
          sx={{
            "@media screen and (max-height: 550px)": {
              fontSize: "16px",
            },
          }}
          variant="ghost"
          onClick={() => navigate("/")}
          border={"1px solid #0f0f0f"}
        >
          ← Back to All Events
        </Button>
      </Box>
    </Box>
  );
};
