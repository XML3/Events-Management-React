import React from "react";
import { useState, useContext, useEffect } from "react";
import DataContext from "../components/Root";
import Typewriter from "../components/Typewriter";
import axios from "axios";
import { API_URL } from "../components/UI/constants";
import {
  Box,
  Center,
  Image,
  Heading,
  Flex,
  Text,
  Input,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";

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

const ContactForm = () => {
  const { header } = useContext(DataContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [recaptchaToken, setRecaptchaToken] = useState("");

  useEffect(() => {
    const loadRecaptcha = () => {
      if (window.grecaptcha) {
        window.grecaptcha.ready(() => {
          window.grecaptcha.render("recaptcha-container", {
            sitekey: import.meta.env.VITE_RECAPTCHA_SITE_KEY,
            callback: (token) => setRecaptchaToken(token),
          });
        });
      } else {
        const script = document.createElement("script");
        script.src = "https://www.google.com/recaptcha/api.js";
        script.async = true;
        script.defer = true;
        script.onload = loadRecaptcha;
        document.body.appendChild(script);
      }
    };
    loadRecaptcha();
  }, []);

  const toast = useToast();

  const isNameError = isSubmitted && name === "";
  const isEmailError = isSubmitted && email === "";
  const isMessageError = isSubmitted && message === "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    //Check for error when form is submitted
    if (isNameError || isEmailError || isMessageError) {
      console.log("An error has occured.  Please fill in all required fields.");
      return;
    }

    try {
      const response = await axios.post(`${API_URL}/contact`, {
        name,
        email,
        message,
        recaptchaToken,
      });

      if (response.status === 200) {
        toast({
          title: "Form Submitted",
          description: "Form successfully submitted",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Error",
          description: "An Error has occcurred while submitting the form",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: "An Error has occcurred while submitting the form",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };
  const contactHeader = "Contact Us";
  const contactHeroImg = "/img/contact-image.jpg";

  return (
    <Box
      bgColor="#FFE054"
      color="#d5d1bf"
      minW={"100%"}
      maxW={"100%"}
      width={"100%"}
    >
      <Box minHeight={"100dvh"}>
        <Flex
          align={{ base: "center", md: "flex-start" }}
          // minH={"20vh"}
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
              src={contactHeroImg}
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
                {contactHeader}
              </Heading>
            </Flex>
          </Box>
        </Flex>
        {/* Block section under Hero */}
        <Box width={"100%"} height={"215px"} borderBottom="1px solid #0f0f0f">
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
              >
                Scroll Down to Contact Form
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>

      <Box
        minHeight={{
          base: "100dvh",
          sm: "85dvh",
          md: "80dvh",
          lg: "80dvh",
          "2xl": "90dvh",
        }}
        sx={{
          "@media screen and (max-height: 550px)": {
            minHeight: "110vh",
          },
        }}
      >
        <Center>
          <Box
            w={{ base: "100%", sm: "90%", md: "80%", lg: "80%", "2xl": "70%" }}
            h={"auto"}
            padding={{ base: "0.05rem", sm: "0.05rem", md: "0.05rem" }}
            position={"relative"}
            top={{
              base: "2rem",
              sm: "4rem",
              md: "6rem",
              lg: "2rem",
              "2xl": "4rem",
            }}
            sx={{
              "@media screen and (max-height: 550px)": {
                top: "-2rem",
              },
            }}
          >
            <Box
              bgColor={"#0f0f0f"}
              color="#D9D9D9"
              borderRadius={"14px"}
              w={"100%"}
              h={"auto"}
              padding={{ base: "2rem", md: "2rem" }}
              paddingBottom={{ base: "80px", sm: "70px", md: "100px" }}
            >
              <Flex
                direction={{
                  base: "column",
                  sm: "column",
                  md: "row",
                  lg: "row",
                  "2xl": "row",
                }}
                align={{ base: "center", md: "flex-start" }}
                justifyContent={"space-around"}
                wrap={"wrap"}
              >
                <Flex
                  direction={"column"}
                  align={"center"}
                  justifyContent={"center"}
                  h={{ base: "10vh", sm: "7vh", md: "15vh", lg: "50vh" }}
                  mb={{ base: "1rem", sm: "1.5rem", md: 0 }}
                >
                  <Text
                    fontFamily={workSansFontFamily}
                    fontWeight={workSansWeight.regular}
                    fontSize={{ base: "22px", sm: "20px", md: "30px" }}
                    color="#D9D9D9"
                    mb={{ base: "5%", sm: "2%", md: "2%", "2xl": "5%" }}
                    mt={{ base: "20%", sm: "15%", md: "0%", "2xl": "0%" }}
                  >
                    Get in Touch
                  </Text>

                  <Text
                    fontFamily={workSansFontFamily}
                    fontWeight={workSansWeight.regular}
                    fontSize={{ base: "14px", sm: "16px", md: "16px" }}
                    color="#D9D9D9"
                  >
                    Have any questions? Shoot us an email.
                  </Text>
                  <Text
                    fontFamily={workSansFontFamily}
                    fontWeight={workSansWeight.regular}
                    fontSize={{ base: "14px", sm: "16px", md: "16px" }}
                    color="#D9D9D9"
                    textAlign={"center"}
                  >
                    * Contact form is disabled to avoid spam emails through
                    porfolio *{" "}
                  </Text>
                </Flex>

                {/* FORM */}
                <form onSubmit={handleSubmit}>
                  {/* NAME */}
                  <FormControl
                    id="name"
                    mt={{ base: "4rem", sm: "4rem", md: "2rem", "2xl": "4rem" }}
                    w={{ base: "12rem", md: "20rem" }}
                    isRequired
                  >
                    <FormLabel
                      fontFamily={workSansFontFamily}
                      fontWeight={workSansWeight.regular}
                      fontSize={{
                        base: "16px",
                        sm: "18px",
                        md: "16px",
                      }}
                    >
                      Name
                    </FormLabel>
                    <Input
                      placeholder="Full Name"
                      fontSize={{
                        base: "16px",
                        sm: "18px",
                        md: "16px",
                      }}
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      focusBorderColor="#FFE054"
                      style={{
                        borderColor: isNameError ? "red.500" : "#D9D9D9",
                      }}
                    />
                    {isNameError && (
                      <FormErrorMessage>Name is required</FormErrorMessage>
                    )}
                  </FormControl>

                  {/* EMAIL */}
                  <FormControl
                    id="email"
                    isInvalid={isEmailError}
                    isRequired
                    w={{ base: "12rem", md: "20rem" }}
                  >
                    <FormLabel
                      fontFamily={workSansFontFamily}
                      fontWeight={workSansWeight.regular}
                      fontSize={{
                        base: "16px",
                        sm: "18px",
                        md: "16px",
                      }}
                      mt={"1rem"}
                    >
                      Email
                    </FormLabel>
                    <Input
                      placeholder="Email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      focusBorderColor="#FFE054"
                      fontSize={{
                        base: "16px",
                        sm: "18px",
                        md: "16px",
                      }}
                      style={{
                        borderColor: isEmailError ? "red.500" : "#D9D9D9",
                      }}
                    />
                    {isEmailError && (
                      <FormErrorMessage>Email is required</FormErrorMessage>
                    )}
                  </FormControl>

                  {/* MESSAGE */}
                  <FormControl
                    id="message"
                    isRequired
                    w={{ base: "12rem", md: "20rem" }}
                  >
                    <FormLabel
                      fontFamily={workSansFontFamily}
                      fontWeight={workSansWeight.regular}
                      fontSize={{
                        base: "16px",
                        sm: "18px",
                        md: "16px",
                      }}
                      mt={"1rem"}
                    >
                      Message
                    </FormLabel>
                    <Textarea
                      placeholder="Write us a message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      focusBorderColor="#FFE054"
                      fontSize={{
                        base: "16px",
                        sm: "18px",
                        md: "16px",
                      }}
                      style={{
                        borderColor: isMessageError
                          ? "red.500"
                          : "rgba(213, 209, 191, 1)",
                      }}
                    />
                    {isMessageError && (
                      <FormErrorMessage>Message is required</FormErrorMessage>
                    )}
                  </FormControl>

                  {/* reCaptcha */}
                  <Box className="g-recaptcha" data-sitekey></Box>

                  {/* BUTTON */}
                  <Button
                    type="submit"
                    bgColor="#D9D9D9"
                    color={"#0f0f0f"}
                    fontFamily={bebasNeueFontFamily}
                    fontWeight={400}
                    letterSpacing={2}
                    mt={"2rem"}
                    fontSize={{ base: "0.7rem", md: "0.8rem" }}
                    w={"50%"}
                    position={"relative"}
                    left={{ base: "20%", sm: "25%", md: "25%" }}
                    _hover={{
                      bgColor: "#FFE054",
                      color: "#0f0f0f",
                    }}
                  >
                    Submit Message
                  </Button>
                </form>
              </Flex>
            </Box>
          </Box>
        </Center>
      </Box>
    </Box>
  );
};

export default ContactForm;
