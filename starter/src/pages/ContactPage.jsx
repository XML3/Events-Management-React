import React from "react";
import { useState, useContext, useEffect } from "react";
import DataContext from "../components/Root";
import Typewriter from "../components/Typewriter";
import axios from "axios";
import { API_URL } from "../components/UI/constants";
import {
  Box,
  Center,
  Heading,
  Flex,
  Image,
  Text,
  Input,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";

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

  return (
    <Box bgColor="#051622" minH="130vh" paddingTop={"100px"}>
      <Flex
        align={{ base: "center", md: "flex-start" }}
        minH={"20vh"}
        direction={{ base: "column", md: "row" }}
      >
        <Box
          ml={{ base: "0", md: "1.5rem" }}
          mr={{ base: "0", md: "2rem" }}
          mb={{ base: "0", md: "5rem" }}
        >
          <Heading
            bgGradient="linear(to-r, #ff005f 0%, #610979 70%, #020024 100%)"
            bgClip="text"
            fontSize={{
              base: "32px",
              sm: "72px",
              md: "100px",
            }}
            lineHeight={"1.2"}
            mt={{ base: "1rem", md: "0" }}
            mb={{ base: "4rem", sm: "1rem", md: 0 }}
            ml={{ base: "0.5rem", sm: "2rem", md: "8.5rem" }}
            fontFamily={orbitronFontFamily}
            fontWeight={orbitronWeight.semibold}
            maxW={{ base: "100%", md: "900px" }}
          >
            <Typewriter text={header} delay={100} />
          </Heading>
        </Box>
      </Flex>

      <Center>
        <Box
          bgGradient="linear(to-r, #ff005f 0%, #610979 70%)"
          w={{ base: "95%", sm: "90%", md: "70%" }}
          h={"auto"}
          padding={{ base: "0.05rem", sm: "0.05rem", md: "0.2rem" }}
          position={"relative"}
          top={{ base: 0, sm: "2rem", md: 0 }}
        >
          <Box
            bgColor={"#051622"}
            color="#d5d1bf"
            w={{ base: "100%", sm: "100%", md: "100%" }}
            h={"auto"}
            padding={{ base: "1rem", md: "2rem" }}
            paddingBottom={{ base: "80px", sm: "70px", md: "100px" }}
          >
            <Flex
              direction={{ base: "column", sm: "column", md: "row" }}
              align={{ base: "center", md: "flex-start" }}
              justifyContent={"space-around"}
              wrap={"wrap"}
            >
              <Flex
                direction={"column"}
                align={"center"}
                justifyContent={"center"}
                h={{ base: "10vh", sm: "7vh", md: "50vh" }}
                mb={{ base: "1rem", sm: "1.5rem", md: 0 }}
              >
                <Text
                  fontFamily={robotoSlabFont}
                  fontWeight={robotoSlabWeight.regular}
                  fontSize={{ base: "22px", sm: "20px", md: "30px" }}
                  color={"#d5d1bf"}
                  mb={{ base: "5%", sm: "2%", md: "5%" }}
                  mt={{ base: "20%", sm: "15%", md: 0 }}
                >
                  Get in Touch
                </Text>

                <Text
                  fontFamily={robotoSlabFont}
                  fontWeight={robotoSlabWeight.regular}
                  fontSize={{ base: "14px", sm: "16px", md: "16px" }}
                  color={"#d5d1bf"}
                >
                  Have any questions? Shoot us an email.
                </Text>
                <Text
                  fontFamily={robotoSlabFont}
                  fontWeight={robotoSlabWeight.regular}
                  fontSize={{ base: "14px", sm: "16px", md: "16px" }}
                  color={"#d5d1bf"}
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
                  mt={"4rem"}
                  w={{ base: "12rem", md: "20rem" }}
                  isRequired
                >
                  <FormLabel
                    fontFamily={robotoSlabFont}
                    fontWeight={robotoSlabWeight.regular}
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
                    focusBorderColor="pink.500"
                    style={{ borderColor: isNameError ? "red.500" : "inherit" }}
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
                    fontFamily={robotoSlabFont}
                    fontWeight={robotoSlabWeight.regular}
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
                    focusBorderColor="pink.500"
                    fontSize={{
                      base: "16px",
                      sm: "18px",
                      md: "16px",
                    }}
                    style={{
                      borderColor: isEmailError ? "red.500" : "inherit",
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
                    fontFamily={robotoSlabFont}
                    fontWeight={robotoSlabWeight.regular}
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
                    focusBorderColor="pink.500"
                    fontSize={{
                      base: "16px",
                      sm: "18px",
                      md: "16px",
                    }}
                    style={{
                      borderColor: isMessageError ? "red.500" : "inherit",
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
                  bgGradient="linear(to-br, #00ffbc, #0ee399)"
                  color={"#051622"}
                  fontFamily={orbitronFontFamily}
                  fontWeight={orbitronWeight.medium}
                  mt={"2rem"}
                  fontSize={{ base: "0.7rem", md: "0.7rem" }}
                  w={"50%"}
                  position={"relative"}
                  left={{ base: "20%", sm: "25%", md: "25%" }}
                  _hover={{
                    bgColor: "green.200",
                    color: "#ff005f",
                    // boxShadow: "0 0 7px whitesmoke",
                  }}
                  // _active={{ boxShadow: "0px 10px 30px 0px whitesmoke" }}
                >
                  Submit
                </Button>
              </form>
            </Flex>
          </Box>
        </Box>
      </Center>
    </Box>
  );
};

export default ContactForm;
