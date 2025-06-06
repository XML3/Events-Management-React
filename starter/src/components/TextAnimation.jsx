// Create a new component for looping images
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { InView, useInView } from "react-intersection-observer";
import { Text, Flex, Center, useBreakpointValue } from "@chakra-ui/react";

const TextAnimation = () => {
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

  const controls = useAnimation();
  const [ref, inView] = useInView();

  const xOffset = useBreakpointValue({
    base: 0,
    sm: 0,
    md: 5,
    lg: 30,
    "2xl": 30,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        x: xOffset,
        transition: {
          duration: 2,
          delay: 1,
        },
      });
    }
  }, [controls, inView]);

  const textStyle = {
    fontFamily: workSansFontFamily,
    fontWeight: workSansWeight.semibold,
    color: "#051622",
  };

  return (
    <Center
      minH="2vh"
      mt={{ base: "0", sm: "0", md: "2rem", lg: "0", "2xl": "-5rem" }}
    >
      <Flex direction="column" align="center" justify="center" wrap="wrap">
        <motion.div
          initial={{ x: -3000 }}
          animate={{ x: xOffset }}
          transition={{
            duration: "2",
            delay: "0.3",
          }}
          style={textStyle}
        >
          <Text
            fontSize={{
              base: "20px",
              sm: "25px",
              md: "32px",
              "2xl": "32px",
            }}
            textAlign="center"
            paddingBottom={1}
            color={"#D9D9D9"}
          >
            Add, manage, and customize
          </Text>
        </motion.div>

        <motion.div
          initial={{ x: -3000 }}
          animate={{ x: xOffset }}
          transition={{
            duration: "2",
            delay: "1",
          }}
          style={textStyle}
        >
          <Text
            fontSize={{
              base: "20px",
              sm: "25px",
              md: "32px",
              "2xl": "32px",
            }}
            textAlign="center"
            color={"#D9D9D9"}
          >
            your events with ease.
          </Text>
        </motion.div>
      </Flex>
    </Center>
  );
};

export default TextAnimation;
