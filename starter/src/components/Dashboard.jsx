import React from "react";
import { useUser } from "./lib/customHooks";
import { Box, Flex, Text } from "@chakra-ui/react";

const Dashboard = () => {
  const { user, authenticated } = useUser();
  if (!user || !authenticated) {
    return (
      <div className="p-16 bg-gray-800 h-screen">
        <div className="text-2xl mb-4 font-bold text-white">Dashboard</div>
        <div className="ml-2 w-8 h-8 border-l-2 rounded-full animate-spin border-white" />
      </div>
    );
  }

  return (
    <Box bgColor={"gray.900"} p={16} h={"100%"}>
      <Text fontSize={"24px"} mb={4} color={"whitesmoke"}>
        {" "}
        Dashboard{" "}
      </Text>
      {user && (
        <Flex color="text-white">
          <Text fontSize="24px" mb={2}>
            {" "}
            User Details{" "}
          </Text>
          <Box w={"24px"} fontSize={"16px"}>
            <Text> Email : </Text>
            <Text> Firstname : </Text>
            <Text> Lastname : </Text>

            <Box>
              <Text> {user.email} </Text>
              <Text> {user.firstname} </Text>
              <Text> {user.lastname} </Text>
            </Box>
          </Box>
        </Flex>
      )}
    </Box>
  );
};

export default Dashboard;
