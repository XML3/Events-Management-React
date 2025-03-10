import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Box, useBreakpointValue } from "@chakra-ui/react";
import { EventsCard } from "./EventsCard";

const MotionBox = motion(Box);

export const EventsCarousel = ({ categoryEvents }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  // const columns = 1;
  const cardWidth = useBreakpointValue({
    base: 95,
    sm: 60,
    md: 40,
    lg: 25,
    "2xl": 22,
  });
  // const totalWidth = Math.min(categoryEvents.length * cardWidth, 100);
  const [totalWidth, setTotalWidth] = useState(0);
  useEffect(() => {
    setTotalWidth(categoryEvents.length * cardWidth);
  }, [categoryEvents.length, cardWidth]);

  const goToNext = () => {
    setScrollPosition(
      (prevPosition) => (prevPosition + cardWidth) % totalWidth
    );
    setIsAutoScrolling(false);
  };

  const goToPrev = () => {
    setScrollPosition((prevPosition) => prevPosition - cardWidth + totalWidth) %
      totalWidth;
    setIsAutoScrolling(false);
  };

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      setScrollPosition((prevPosition) => (prevPosition + 0.2) % totalWidth);
    }, 50);

    return () => clearInterval(scrollInterval);
  }, [totalWidth, isAutoScrolling]);

  useEffect(() => {
    if (scrollPosition < 0) {
      setScrollPosition(0);
    }
    if (scrollPosition > totalWidth) {
      setScrollPosition(totalWidth);
    }
  }, [scrollPosition, totalWidth]);

  const containerWidth = useBreakpointValue({
    base: "35%",
    sm: "70%",
    md: "90%",
    lg: "80%",
    "2xl": "85rem",
  });

  const arrowDisplay = useBreakpointValue({
    base: "none",
    sm: "none",
    md: "inline-block",
    lg: "inline-block",
    "2xl": "inline-block",
  });

  return (
    <>
      <Box
        position="relative"
        left={{ base: "0%" }}
        w={containerWidth}
        overflow={"hidden"}
        bgColor={"#0f0f0f"}
        borderRadius={"14px"}
        margin="0 auto"
        paddingY={"2rem"}
        display={"flex"}
        flexDirection={"column"}
      >
        <Box
          position="absolute"
          top="50%"
          left="10px"
          zIndex="10"
          cursor="pointer"
          transform="translateY(-50%)"
          color={"#c50d34"}
          fontSize={"42px"}
          fontWeight={600}
          onClick={goToPrev}
          display={arrowDisplay}
        >
          {/* Left Arrow */}
          &#8592;
        </Box>

        {/* Carousel container */}
        <Box>
          <MotionBox
            display="flex"
            justifyContent={"flex-start"}
            transition={{ type: "spring", stiffness: 100, damping: 30 }}
            animate={{ x: `-${scrollPosition}%` }}
            width={containerWidth}
            minW={"100%"}
            maxW={"100%"}
            gap={8}
          >
            {categoryEvents.map((event) => (
              <Box key={event.id} flexShrink={0} width={`${cardWidth}%`}>
                <EventsCard event={event} />
              </Box>
            ))}
          </MotionBox>
        </Box>
        <Box
          position="absolute"
          top="50%"
          right="10px"
          zIndex="10"
          cursor="pointer"
          transform="translateY(-50%)"
          color={"#c50d34"}
          fontSize={"42px"}
          fontWeight={600}
          onClick={goToNext}
          display={arrowDisplay}
        >
          {/* Right Arrow */}
          &#8594;
        </Box>
      </Box>
    </>
  );
};
