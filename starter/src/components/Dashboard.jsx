import React from "react";
import { useUser } from "./lib/customHooks";
import { Box, Flex, Text } from "@chakra-ui/react";

const Dashboard = () => {
  const { user, authenticated } = useUser();
  if (!user || !authenticated) {
    return (
      <div className="p-16 bg-gray-800 h-screen">
        <Text fontSize={"24px"} mb={4}>
          Dashboard
        </Text>
        <Box
          ml={2}
          w={8}
          h={8}
          borderLeft={2}
          borderRadius={"full"}
          borderColor={"white"}
        />
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
            <Text> Username : </Text>
            <Text> FullName: </Text>

            <Box>
              <Text> {user.username} </Text>
              <Text> {user.name} </Text>
            </Box>
          </Box>
        </Flex>
      )}
    </Box>
  );
};

export default Dashboard;
