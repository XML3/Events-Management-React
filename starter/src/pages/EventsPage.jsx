import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { EventsCard } from "../components/EventsCard";
import NewEvent from "../components/forms/NewEvent";
import { SearchItem } from "../components/SearchItem";
import DataContext from "../components/Root";
import ImgAnimation from "../components/ImgAnimation";
import TextAnimation from "../components/TextAnimation";
import Typewriter from "../components/Typewriter";

import {
  Heading,
  Box,
  Flex,
  Image,
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
  Center,
} from "@chakra-ui/react";

export const EventsPage = () => {
  const {
    events,
    handleEventAdded,
    handleFilteredEvents,
    categories,
    filteredEvents,
    users,
    articles,
    imgAnimation,
    header,
    subHeader,
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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const columns = useBreakpointValue({ base: 1, sm: 2, md: 3, lg: 4 });

  return (
    <>
      <Box
        bgColor="gray.900"
        color="whitesmoke"
        minH={{ base: "520vh", sm: "480vh", md: "400vh" }}
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
            top={{ base: "5rem", sm: "4rem", md: "5rem" }}
          >
            <Heading
              position={"relative"}
              left={{ base: "5%", sm: "15%", md: "-12%" }}
              fontFamily={orbitronFontFamily}
              fontWeight={orbitronWeight.semibold}
              bgGradient="linear(to-r, #ff005f 0%, #610979 70%, #020024 100%)"
              bgClip="text"
              fontSize={{
                base: "40px",
                sm: "80px",
                md: "100px",
              }}
              lineHeight={"1.2"}
              mt={{ base: "15%", sm: "10%", md: "10%" }}
              maxW={{ base: "100%", md: "900px" }}
            >
              {/* Main-Header */}
              <Typewriter text={header} delay={100} />
            </Heading>

            {/* Sub-Header */}
            <Text
              position={"relative"}
              left={{ base: "0.5rem", sm: "20%", md: "-12%" }}
              color={"gray.300"}
              pr={{ base: "0.9rem", sm: 0, md: 0 }}
              fontSize={{ base: "16px", sm: "20px", md: "22px" }}
              letterSpacing={{ base: "0.09rem", sm: "0.08rem", md: "0.02rem" }}
              mt={{ base: "15%", sm: "7%", md: "5%" }}
              maxW={{ base: "100%", sm: "25rem", md: "45rem" }}
              marginBottom={{ base: "1rem", md: "2rem" }}
              fontFamily={robotoSlabFont}
              fontWeight={robotoSlabWeight.light}
            >
              <Typewriter text={subHeader} delay={30} />
            </Text>
            {/* Cassestte Image */}
          </Box>
          <ImgAnimation imgAnimation={imgAnimation} />
        </Flex>
        {/* 


        {/* This Flex manages the whole Cards Box */}
        <Flex align="center" justify="center" minH="100vh">
          <div className="events-page">
            {/* Outside Box with Search and Cards */}

            <Box
              p={4}
              bgColor={{ base: "gray.900", sm: "gray.800", md: "gray.800" }}
              border={"1px solid"}
              borderColor={"gray.500"}
              w={{ base: "100%", sm: "80%", md: "85%" }}
              h={{ base: "900px", sm: "600px", md: "800px" }}
              borderRadius={"md"}
              mb={{ base: "-100px", md: "1rem" }}
              padding={{ base: "1rem", sm: "2rem", md: "2rem" }}
              position={"relative"}
              left={{ base: "0%", sm: "10%", md: "7%" }}
              right={{ base: 0, sm: 0, md: "2rem" }}
              top={{ base: "9rem", sm: "6rem", md: "20vh" }}
              overflowY={"scroll"}
            >
              {/* Search Event Input */}
              <Flex
                align={{ base: "center", sm: "flex-start", md: "flex-start" }}
                justify={{ base: "center", sm: "flex-start", md: "flex-start" }}
              >
                <Box>
                  <Text
                    fontFamily={orbitronFontFamily}
                    fontWeight={orbitronWeight.medium}
                    fontSize={{ base: "0.8rem", sm: "1rem", md: "1rem" }}
                    color={"gray.200"}
                    position={"relative"}
                    left={{ base: "25%", sm: 0, md: "40px" }}
                  >
                    Search Events:
                    <SearchItem
                      events={events}
                      handleFilteredEvents={handleFilteredEvents}
                    />
                  </Text>
                </Box>

                {/* Modal Form - Create Buttom*/}
                <Button
                  maxW={"100%"}
                  position={"relative"}
                  left={{ base: "-30%", sm: "30%", md: "50%" }}
                  top={{ base: "90px", sm: "50px", md: "50px" }}
                  onClick={openModal}
                  bgGradient="linear(to-br, #00ffbc, #0ee399)"
                  fontFamily={orbitronFontFamily}
                  fontWeight={orbitronWeight.medium}
                  mb={{ base: "2rem", md: "5rem" }}
                  fontSize={{ base: "0.6rem", sm: "0.7rem", md: "0.8rem" }}
                  color={"gray.900"}
                  _hover={{
                    bgColor: "green.200",
                    color: " #ff005f ",
                    // boxShadow: "0 0 7px whitesmoke",
                  }}
                  // _active={{ boxShadow: "0px 10px 30px 0px whitesmoke" }}
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

              {/* Events Cards Grid */}
              <Flex align={"center"} justify={"center"}>
                <SimpleGrid
                  columns={columns}
                  gap={8}
                  position={"relative"}
                  right={{ base: "8%", sm: 0, md: 0 }}
                  top={{ base: "100px", sm: 0, md: 0 }}
                  w={{ base: "45%", sm: "90%", md: "100%" }}
                >
                  {/* //map through filtered events/+ Search functionality - Root component/ SeearchItem component*/}
                  {filteredEvents.map((event) => (
                    <Link to={`/event/${event.id}`} key={event.id}>
                      <EventsCard
                        key={event.id}
                        event={event}
                        categories={categories}
                      />
                    </Link>
                  ))}
                </SimpleGrid>
              </Flex>
            </Box>
          </div>
        </Flex>

        {/* Sliding Text - Mid Section */}
        <Box
          position={"relative"}
          top={{ base: "13rem", sm: "5rem", md: "60vh" }}
        >
          <TextAnimation />
        </Box>

        {/* Article section with text and images  */}
        {articles.map((item, index) => (
          <Center key={articles.id}>
            {/* The two Boxes will create the effect of a gradient border */}
            <Box
              bgGradient="linear(to-r, #ff005f 0%, #610979 70%)"
              w={{ base: "90%", sm: "90%", md: "75%" }}
              position={"relative"}
              left={{ base: 0, sm: 0, md: 0 }}
              top={{ base: "13rem", sm: "5rem", md: "60vh" }}
              padding={{ base: "0.05rem", sm: "0.05rem", md: "0.05rem" }}
              marginTop={"1rem"}
              marginBottom={"5rem"}
              color={"gray.300"}
              borderRadius={"10px"}
            >
              <Box
                bgColor={"gray.900"}
                h={"100%"}
                padding={{ base: "0.6rem", sm: "0.7rem", md: "2rem" }}
                // borderRadius={"10px"}
              >
                <Flex
                  //use the index to modify the render logic of map to determine it is even or odd in order to invert the section (image, text placement of each id)
                  direction={{
                    base: "column",
                    md: index % 2 === 0 ? "row" : "row-reverse",
                  }}
                  align={{ base: "center", sm: "center", md: "flex-start" }}
                  alignItems={"center"}
                  wrap={"wrap"}
                  gap={4}
                >
                  <Image
                    src={item.image}
                    w={{ base: "100%", md: "50%" }}
                    h={{ base: "auto", md: "auto" }}
                    marginBottom={{ base: "1rem", md: "0" }}
                  />
                  <Text
                    fontSize={{ base: "0.8rem", md: "md" }}
                    marginLeft={{ base: "0", md: "1rem" }}
                    flex="1"
                    fontFamily={robotoSlabFont}
                    fontWeight={robotoSlabWeight.light}
                  >
                    {item.text}
                  </Text>
                </Flex>
              </Box>
            </Box>
          </Center>
        ))}
      </Box>
    </>
  );
};
