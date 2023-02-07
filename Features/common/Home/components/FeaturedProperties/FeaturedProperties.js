import { Box , Text } from "@chakra-ui/react";
import React from "react";
import PropertySLider from "./components/PropertySlider/PropertySLider";

const featuredProperties = ({ featuredProperties }) => {
  return (
    <Box backgroundColor="blue.100">
      <Box
        maxWidth="1280px"
        margin="0 auto"
        color="gray.600"
        paddingY={{ base: "3rem", sm: "6rem" }}
      >
        <Text
          fontSize={{ base: "4xl", sm: "5xl" }}
          lineHeight="shorter"
          fontWeight="light"
          paddingX="2rem"
          textAlign="center"
        >
          Discover Our Featured Properties
        </Text>
        <Text
          fontSize="2xl"
          lineHeight="shorter"
          fontWeight="light"
          paddingX="2rem"
          textAlign="center"
          marginTop="1rem"
          marginBottom="3rem"
        >
          A selection of our best properties
        </Text>
        <PropertySLider featuredProperties={featuredProperties} />
    </Box>
    </Box>
  );
};

export default featuredProperties;
