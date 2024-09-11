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
        bgColor="#FFFDE1"
        color="whitesmoke"
        minH={{ base: "540vh", sm: "460vh", md: "380vh" }}
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
              left={{ base: "2%", sm: "15%", md: "-22%" }}
              fontFamily={orbitronFontFamily}
              fontWeight={orbitronWeight.bold}
              bgGradient="linear(to-r, #ff005f 0%, #610979 70%, #020024 100%)"
              bgClip="text"
              fontSize={{
                base: "40px",
                sm: "80px",
                md: "100px",
              }}
              lineHeight={"1.2"}
              top={{ base: "15%", sm: "10%", md: "5%" }}
              maxW={{ base: "100%", md: "900px" }}
            >
              {/* Main-Header */}
              <Typewriter text={header} delay={100} />
            </Heading>

            {/* Sub-Header */}
            <Text
              position={"relative"}
              left={{ base: "0.5rem", sm: "20%", md: "-22%" }}
              color={"#051622"}
              pr={{ base: "0.9rem", sm: 0, md: 0 }}
              fontSize={"16px"}
              letterSpacing={"0.02rem"}
              lineHeight={{ base: 5, sm: 5, md: 5 }}
              top={{ base: "20px", sm: "50px", md: "100px" }}
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
              color={"#051622"}
              position={"relative"}
              left={{ base: "22%", sm: "25%", md: "200px" }}
              top={{ base: "170px", sm: "150px", md: "250px" }}
              letterSpacing={"0.03rem"}
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
              left={{ base: "-90%", sm: "50%", md: "70%" }}
              top={{ base: "250px", sm: "190px", md: "300px" }}
              onClick={openModal}
              bgGradient="linear(to-br, #00ffbc, #0ee399)"
              fontFamily={orbitronFontFamily}
              fontWeight={orbitronWeight.medium}
              mb={{ base: "2rem", md: "5rem" }}
              fontSize={{ base: "0.7rem", sm: "0.7rem", md: "0.8rem" }}
              color={"#051622"}
              _hover={{
                bgColor: "green.200",
                color: " #ff005f ",
                // boxShadow: "0 0 7px whitesmoke",
              }}
              // _active={{ boxShadow: "0px 10px 30px 0px whitesmoke" }}
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
              bgColor={"#051622"}
              border={"1px solid"}
              borderColor={"#162737"}
              w={{ base: "100%", sm: "90%", md: "85%" }}
              h={{ base: "900px", sm: "600px", md: "800px" }}
              borderRadius={"md"}
              mb={{ base: "-100px", sm: 0, md: "1rem" }}
              padding={{ base: "1rem", sm: "2rem", md: "2rem" }}
              position={"relative"}
              left={{ base: 0, sm: "5%", md: "7%" }}
              right={{ base: 0, sm: 0, md: "2rem" }}
              top={{ base: "9rem", sm: "3rem", md: "20vh" }}
              overflowY={"scroll"}
            >
              {/* Events Cards Grid */}
              <Flex align={"center"} justify={"center"}>
                <SimpleGrid
                  columns={columns}
                  gap={8}
                  position={"relative"}
                  right={{ base: "22%", sm: 0, md: 0 }}
                  top={{ base: "40px", sm: 0, md: 0 }}
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
        <Box position={"relative"} top={{ base: "10rem", sm: -90, md: "60vh" }}>
          <TextAnimation />
        </Box>

        {/* Article section with text and images  */}
        {articles.map((item, index) => (
          <Center key={articles.id}>
            {/* The two Boxes will create the effect of a gradient border */}
            <Box
              bgGradient="linear(to-r, #ff005f 0%, #610979 70%)"
              w={{ base: "95%", sm: "90%", md: "75%" }}
              position={"relative"}
              left={{ base: 0, sm: 0, md: 0 }}
              top={{ base: "13rem", sm: 0, md: "60vh" }}
              padding={{ base: "0.1rem", sm: "0.1rem", md: "0.1rem" }}
              marginTop={"1rem"}
              marginBottom={"5rem"}
              color={"#FFFDE1"}
            >
              <Box
                bgColor={"#051622"}
                h={"100%"}
                padding={{ base: "1rem", sm: "0.7rem", md: "2rem" }}
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
                    fontSize={{ base: "0.8rem", sm: "16px", md: "md" }}
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
