// Create a new component for looping images
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { InView, useInView } from "react-intersection-observer";
import { Text, Flex, Center } from "@chakra-ui/react";

const TextAnimation = () => {
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

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({
        x: 30,
        transition: {
          duration: 2,
          delay: 1,
        },
      });
    }
  }, [controls, inView]);

  const textStyle = {
    fontFamily: orbitronFontFamily,
    fontWeight: orbitronWeight.semibold,
    color: "#051622",
  };

  return (
    <Center minH="20vh" mt={{ base: "3rem", md: "-10rem" }}>
      <Flex
        direction="column"
        align="center"
        justify="center"
        minH="20vh"
        wrap="wrap"
      >
        <motion.div
          initial={{ x: -3000 }}
          animate={{ x: 30 }}
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
              "2xl": "38px",
            }}
            textAlign="center"
            paddingBottom={2.5}
            color={"#0f0f0f"}
          >
            Add, manage, and customize
          </Text>
        </motion.div>

        <motion.div
          initial={{ x: -3000 }}
          animate={{ x: 30 }}
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
              "2xl": "38px",
            }}
            textAlign="center"
            color={"#0f0f0f"}
          >
            your events with ease.
          </Text>
        </motion.div>
      </Flex>
    </Center>
  );
};

export default TextAnimation;
