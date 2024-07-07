import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { API_ROUTES, APP_ROUTES } from "../UI/constants";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../lib/customHooks";
import { storeTokenInLocalStorage } from "../lib/common";
import {
  Box,
  FormControl,
  Input,
  Button,
  FormLabel,
  Heading,
  Flex,
} from "@chakra-ui/react";

export const SignIn = () => {
  const navigate = useNavigate();
  const { user, authenticated } = useUser();

  useEffect(() => {
    if (user || authenticated) {
      navigate(API_ROUTES.DASHBOARD);
    }
  }, [user, authenticated, navigate]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const signIn = async () => {
    try {
      setIsLoading(true);
      const response = await axios({
        method: "POST",
        url: API_ROUTES.SIGN_IN,
        data: {
          username,
          password,
        },
      });
      if (!response?.data?.token) {
        console.log("Something went wrong during signing in: ", response);
        return;
      }
      storeTokenInLocalStorage(response.data.token);
      navigate(APP_ROUTES.DASHBOARD);
    } catch (err) {
      console.log("Some error occured during signin in: ", err);
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
      {/* SING IN FORM TEMPLATE  */}
      <Box
        bgColor={"gray.900"}
        h={{ base: "110vh", sm: "110vh", md: "100vh" }}
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
            top={{ base: "2rem", md: "12rem" }}
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
            p={4}
            borderWidth={1}
            borderRadius={"lg"}
            color={"gray.200"}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                signIn();
              }}
            >
              <FormControl id="text" isRequired>
                <FormLabel>User Name</FormLabel>
                <Input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
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
                Sign In
              </Button>
            </form>

            <Box mt={4}>
              New to Event Management?{" "}
              <Link to={APP_ROUTES.SIGN_UP}>Sign Up</Link>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
};
