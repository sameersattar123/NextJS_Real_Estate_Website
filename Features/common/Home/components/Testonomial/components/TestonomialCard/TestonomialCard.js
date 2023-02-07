import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { TbQuote } from "react-icons/tb";

const TestonomialCard = ({ name, image, company, testimonial }) => {
  return (
    <Box
      backgroundColor="#ffffff"
      padding="3rem"
      display="flex"
      flexDirection="column"
      marginBottom={{ base: "1rem", sm: "0" }}
    >
      <Box>
        <TbQuote size="40" color="#4299e1" />
      </Box>
      <Text fontSize="lg" color="gray.500" marginY="1.8rem">
        {testimonial}
      </Text>
      <Flex gap="1rem" alignItems="center">
        <Image
          src={image}
          objectFit="cover"
          height="10rem"
          width="10rem"
          borderRadius="full"
        />
        <Box>
          By <Text as="span" >{name}</Text>
          <Text
            fontSize="lg"
            fontStyle="italic"
            fontWeight="light"
            color="gray.600"
          >
            Company - {company}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default TestonomialCard;
