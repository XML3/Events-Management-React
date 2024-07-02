import React from "react";
import axios from "axios";
import { useState } from "react";
import { API_ROUTES, APP_ROUTES } from "../UI/constants";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Box,
  Heading,
  Flex,
} from "@chakra-ui/react";

export const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, serFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const signUp = async () => {
    try {
      setIsLoading(true);
      const response = await axios({
        method: "POST",
        url: API_ROUTES.SIGN_UP,
        data: {
          email,
          password,
          firstname,
          lastname,
        },
      });
      if (!response?.data?.token) {
        console.log("Something went wrong during signing up: ", response);
        return;
      }
      navigate(APP_ROUTES.SIGN_IN);
    } catch (err) {
      console.log("Some error occured during signing up: ", err);
    } finally {
      setIsLoading(false);
    }
  };

  const header = "Events Management";

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

  return (
    <>
      <Box
        bgColor={"gray.900"}
        h={{ base: "130vh", sm: "120vh", md: "100vh" }}
        w={"100%"}
      >
        <Flex
          align={{ base: "center", sm: "center", md: "space-around" }}
          justify={"center"}
          // minH={"80vh"}
          w={{ base: "100%", sm: "100%", md: "100%" }}
          direction={{ base: "column", sm: "column", md: "row" }}
        >
          <Heading
            bgGradient="linear(to-r, #ff005f 0%, #610979 70%, #020024 100%)"
            bgClip="text"
            fontSize={{
              base: "42px",
              sm: "80px",
              md: "100px",
            }}
            lineHeight={"1.2"}
            position={"relative"}
            left={{ base: "0.5rem", sm: "1.5rem", md: "7rem" }}
            top={{ base: "2rem", md: "10rem" }}
            fontFamily={orbitronFontFamily}
            fontWeight={orbitronWeight.semibold}
            maxW={{ base: "100%", md: "800px" }}
          >
            {header}
          </Heading>

          <Box
            maxW="md"
            h="auto"
            mx="auto"
            position={"relative"}
            top={{ base: "150px", sm: "200px", md: "250px" }}
            left={{ base: 0, sm: 0, md: 0 }}
            p={4}
            borderWidth={1}
            borderRadius={"lg"}
            color={"gray.200"}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                signUp();
              }}
            >
              <FormControl id="firstname" isRequired>
                <FormLabel>First Name</FormLabel>
                <Input
                  type="text"
                  value={firstname}
                  onChange={(e) => serFirstname(e.target.value)}
                />
              </FormControl>

              <FormControl id="lastname" isRequired mt={4}>
                <FormLabel>Last Name</FormLabel>
                <Input
                  type="text"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </FormControl>

              <FormControl id="email" isRequired mt={4}>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>

              <FormControl id="password" isRequired mt={4}>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>

              <Button
                mt={6}
                colorScheme="teal"
                isLoading={isLoading}
                type="submit"
              >
                {" "}
                Sign Up
              </Button>
            </form>

            <Box mt={4}>
              Already have an account?{" "}
              <Link to={APP_ROUTES.SIGN_IN}>Sign In</Link>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
};
