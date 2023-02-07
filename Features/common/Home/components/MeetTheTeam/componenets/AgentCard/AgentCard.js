import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const AgentCard = ({ name, title, image, description }) => {
  return (
    <>
      <Box
        backgroundColor="#f1f1f14a"
        padding="2rem"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        marginBottom={{ base: "1rem", sm: "0" }}
      >
        <Image
          width="10rem"
          height="10rem"
          objectFit="cover"
          borderRadius="full"
          marginBottom="2rem"
          src={image}
          shadow="md"
        />
        <Text color="blue.400" fontSize="xl" fontWeight="bold" >{name}</Text>
        <Text fontSize="lg" color="blue.600"  >{title}</Text>
        <Text color="gray.600" fontSize="md" fontWeight="light" marginTop="1rem" noOfLines="4"   > {description}</Text>
      </Box>
    </>
  );
};

export default AgentCard;
