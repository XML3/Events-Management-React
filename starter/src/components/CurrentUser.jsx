import React, { useContext, useEffect, useState } from "react";
import DataContext from "./Root";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

export const CurrentUser = () => {
  const { users, currentUser, setCurrentUser } = useContext(DataContext);

  useEffect(() => {
    if (users.length > 0 && !currentUser) {
      setCurrentUser(users[0]);
    }
  }, [users, currentUser, setCurrentUser]);

  if (!currentUser) return <div>Loading...</div>;

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
    <Box>
      <Flex flexDirection={"row"} justify={"center"} align={"center"}>
        <Text
          fontFamily={orbitronFontFamily}
          fontWeight={orbitronWeight.normal}
          fontSize={"12px"}
          color={"#ff005f"}
          mr={"50px"}
        >
          {currentUser.name}
        </Text>
        <Image
          src={currentUser.image}
          alt="Image of current user"
          height={"50px"}
          width={"50px"}
          borderRadius={"50%"}
          objectFit={"cover"}
        />
      </Flex>
    </Box>
  );
};
