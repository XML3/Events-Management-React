import React, { useEffect, useState, useContext } from "react";
import { motion, useAnimation } from "framer-motion";
import { Box } from "@chakra-ui/react";
import { DataContext } from "./Root";

import { useInView } from "react-intersection-observer";

const ImgAnimation = () => {
  const { imgAnimation } = useContext(DataContext);
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const fastSpin = {
      rotateY: 360 * 10, // Adjust the multiplier for the initial fast spin
      transition: {
        loop: Infinity,
        duration: 2, // Adjust the duration of the fast spin
        ease: "easeInOut", // Custom easing function for fast spin
      },
    };

    const slowSpin = {
      rotateY: 360,
      transition: {
        loop: 5,
        duration: 2, // Adjust the duration of the slow spin
        ease: "easeOut", // Custom easing function for slow spin
      },
    };

    if (inView) {
      if (!isAnimating) {
        setIsAnimating(true);

        // Start with the fast spin and smoothly transition to the slow spin
        controls.start(fastSpin).then(() => {
          controls.start(slowSpin);
        });
      }
    } else {
      setIsAnimating(false);
      controls.stop();
    }
  }, [inView, controls, isAnimating]);

  const imgUrl = imgAnimation ? imgAnimation.image : null;

  return (
    <Box
      // width={"100%"}
      ref={ref}
      w={{ base: "200px", sm: "300px", md: "15%" }}
      h="auto"
      overflow="hidden"
      mb={{ base: "1px", sm: "5rem", md: "0" }}
      position={"relative"}
      left={{ base: -1, sm: "25%", md: "5%" }}
      top={{ base: "7rem", sm: "7rem", md: "11rem" }}
      style={{ visibility: inView ? "visible" : "hidden" }}
    >
      {imgUrl && (
        <motion.img
          src={imgUrl}
          alt="animatedImage"
          style={{
            borderRadius: "15px",
          }}
          animate={controls}
        />
      )}
    </Box>
  );
};

export default ImgAnimation;
