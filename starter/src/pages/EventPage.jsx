import { useContext, useState } from "react";
import React from "react";
import { UserPage } from "./UserPage";
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
  const { deleteEvent, header } = useContext(DataContext);

  const { eventId } = useParams();
  const navigate = useNavigate();

  const toast = useToast();

  const [event, setEvent] = useState(null);
  const [creator, setCreator] = useState(null);
  const [categories, setCategories] = useState([]);
  const [users, setUsers] = useState([]);

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
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${API_URL}/users`);
        const userData = await response.json();
        setUsers(userData);
      } catch (error) {
        console.error("Error fetching data from user:", error);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await fetch(`${API_URL}/events/${eventId}`);
        const eventData = await response.json();
        setEvent(eventData);

        //Fetch creator's data by createdBy
        const userResponse = await fetch(
          `${API_URL}/users/${eventData.createdBy}`
        );
        const creatorData = await userResponse.json();
        setCreator(creatorData);
      } catch (error) {
        console.error("Error fetching data from event:", error);
      }
    };

    //Fetch categories data
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${API_URL}/categories`);
        const categoriesData = await response.json();
        setCategories(categoriesData);
      } catch (error) {
        console.log("Error fetching data from categories:", error);
      }
    };

    fetchEventData();
    fetchCategories();
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
      bgColor="gray.900"
      color="whitesmoke"
      minH="100vh"
      paddingTop={"100px"}
    >
      <Heading
        bgGradient="linear(to-r, #ff005f 0%, #610979 70%, #020024 100%)"
        bgClip="text"
        fontSize={{ base: "38px", sm: "80px", md: "100px" }}
        lineHeight={"1.2"}
        mt={{ base: "3rem", md: "0" }}
        mb={{ base: 0, sm: "2rem", md: 0 }}
        position={"relative"}
        left={{ base: "0.9rem", sm: "5rem", md: "10rem" }}
        fontFamily={orbitronFontFamily}
        fontWeight={orbitronWeight.semibold}
        maxW={{ base: "100%", sm: "100%", md: "900px" }}
      >
        <Typewriter text={header} delay={100} />
      </Heading>

      <Flex
        align={"center "}
        justify={"center"}
        direction={{ base: "column", sm: "column", md: "row" }}
        p={8}
      >
        <Box
          mb={{ base: "2rem", sm: 0, md: "0" }}
          position="relative"
          top={{ base: "2rem", sm: 0, md: "-5rem" }}
          left={{ base: "0", sm: 0, md: "5rem" }}
        >
          <Center>
            <Heading
              fontSize={{ base: "28px", sm: "45px", md: "45px " }}
              color={"green.200"}
              mb={4}
              fontFamily={orbitronFontFamily}
              fontWeight={orbitronWeight.medium}
            >
              {event.title}
            </Heading>
          </Center>

          {/* Edit Event Button to open modal*/}
          <Button
            onClick={openModal}
            w={"50%"}
            bgGradient="linear(to-br, #00ffbc, #0ee399)"
            color={"gray.900"}
            position={"relative"}
            left={{ base: -3, sm: "0.1rem", md: "0.7rem" }}
            mb={4} //added
            //shadow
            fontSize={{ base: "0.6rem", sm: "0.8rem", md: "0.7rem" }}
            _hover={{
              bgColor: "green.200",
              color: "#ff005f",
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
            bgGradient="linear(to-br, #ff005f, #610979  )"
            color={"gray.400"}
            deleteEvent={deleteEvent}
            position={"relative"}
            left={{ base: "0.6rem", sm: "1rem", md: "2rem" }}
            mb={4} //added
            fontSize={{ base: "0.6rem", sm: "0.8rem", md: "0.7rem" }}
            _hover={{
              bgColor: "pink.500",
              color: "gray.900",
            }}
            fontFamily={orbitronFontFamily}
            fontWeight={orbitronWeight.medium}
          >
            Delete Event
          </Button>
        </Box>

        {/* event box */}
        <Flex
          gap={1}
          w={{ base: "290px", sm: "85%", md: "75%" }}
          flexWrap="wrap"
          flexDir="column"
        >
          <Box
            p={4}
            bgGradient="linear(to-b, #ff005f 0%, #610979 70%)"
            w={{ base: "95%", sm: "100%", md: "35rem" }}
            h={"auto"}
            borderRadius={"md"}
            position={"relative"}
            left={{ base: "0.3rem", md: "0rem", lg: "10rem", xl: "30rem" }}
            top={{ base: "3rem", sm: "3rem", md: 0 }}
            mb={{ base: "5rem", md: "10rem" }}
            padding={"0.05rem"}
          >
            <Box
              bgColor={"gray.900"}
              borderRadius={"md"}
              padding={{ base: "1rem", sm: "0.7rem", md: "3rem" }}
            >
              {/* Event image */}
              <Center>
                <Image
                  src={event.image}
                  alt={event.title}
                  borderRadius={"full"}
                  mb={4}
                  w={{ base: "100%", sm: "80%", md: "75%" }}
                  h={{ base: "15%", sm: "20%", md: "15rem" }}
                />
              </Center>

              {/* Artist Lineup */}
              <Text
                fontSize={"1rem"}
                color={"teal.300"}
                paddingBottom={"0.8rem"}
                fontFamily={orbitronFontFamily}
                fontWeight={orbitronWeight.medium}
                letterSpacing={{ base: "0.05rem", md: "0.12rem" }}
              >
                Artists:
              </Text>
              <Text
                fontSize={{ base: "0.7rem", md: "0.8rem" }}
                letterSpacing={{ base: "0.05rem", md: "0.06rem" }}
                fontFamily={robotoSlabFont}
                fontWeight={robotoSlabWeight.thin}
                paddingLeft={"2rem"}
                color={"gray.200"}
                paddingBottom={"1rem"}
              >
                {event.lineup}
              </Text>

              {/* Location */}
              <Text
                fontSize={"1rem"}
                fontFamily={orbitronFontFamily}
                fontWeight={orbitronWeight.medium}
                color={"teal.300"}
                mt={{ base: "1.5px", md: "3px" }}
                letterSpacing={{ base: "0.05rem", md: "0.12rem" }}
              >
                Location
              </Text>
              <Text
                fontSize={{ base: "0.7rem", md: "0.8rem" }}
                letterSpacing={{ base: "0.05rem", md: "0.06rem" }}
                fontFamily={robotoSlabFont}
                fontWeight={robotoSlabWeight.thin}
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
                    fontSize={"1rem"}
                    fontFamily={orbitronFontFamily}
                    fontWeight={orbitronWeight.medium}
                    color={"#ff005f"}
                    letterSpacing={{ base: "0.05rem", md: "0.12rem" }}
                  >
                    Start Time:
                  </Text>
                  <Text
                    fontSize={{ base: "0.7rem", md: "0.8rem" }}
                    letterSpacing={{ base: "0.05rem", md: "0.06rem" }}
                    fontFamily={robotoSlabFont}
                    fontWeight={robotoSlabWeight.thin}
                  >
                    {event.startTime}
                  </Text>

                  <Text
                    fontSize={"1rem"}
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
                    fontSize={{ base: "0.7rem", md: "0.8rem" }}
                    letterSpacing={{ base: "0.05rem", md: "0.06rem" }}
                    fontFamily={robotoSlabFont}
                    fontWeight={robotoSlabWeight.thin}
                  >
                    {event.endTime}
                  </Text>
                </Box>

                {/* Render UserPage/creator */}
                <Box
                  fontFamily={orbitronFontFamily}
                  fontWeight={orbitronWeight.medium}
                  fontSize={{ base: "0.9rem", md: "0.8rem" }}
                  letterSpacing={{ base: "0.05rem", md: "0.06rem" }}
                >
                  <UserPage userId={creator.id} />
                </Box>
              </Grid>

              {/* Description */}
              <Center>
                <Text
                  fontSize={{ base: "0.7rem", md: "0.8rem" }}
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
                  {Array.isArray(event.categoryIds) &&
                  event.categoryId.length > 0 ? (
                    event.categoryIds.map((categoryId) => {
                      const category = categories.find(
                        (category) => category.id === categoryId
                      );

                      if (category) {
                        return (
                          <Text
                            key={category.id}
                            color="#ff005f"
                            fontSize={{ base: "0.8rem", md: "1rem" }}
                            letterSpacing={{ base: "0.05rem", md: "0.06rem" }}
                            mr={2}
                            fontFamily={orbitronFontFamily}
                            fontWeight={orbitronWeight.light}
                          >
                            {category.name}
                          </Text>
                        );
                      } else {
                        return null;
                      }
                    })
                  ) : (
                    <Text>No categories available</Text>
                  )}
                </Stack>
              </Center>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
