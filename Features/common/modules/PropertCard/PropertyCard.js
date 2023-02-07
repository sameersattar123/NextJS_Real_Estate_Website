import { Badge, Box, Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { usePropertyForm } from "../../Hooks/usePropertyForm";
import {TbBath , TbBed , TbRuler} from "react-icons/tb"
import Link from "next/link";
const PropertyCard = (property) => {
  const {
    address,
    coverPhoto,
    propertyType,
    price,
    title,
    purpose,
    sqSize,
    baths,
    rooms,
    externalID,
  } = usePropertyForm(property);

  return (
    <>
      <Box marginBottom="4rem" backgroundColor="#fff">
        <Box
          backgroundImage={`url("${coverPhoto}")`}
          height="250px"
          backgroundPosition="center center"
          position="relative"
          flexDirection="column"
          justifyContent="space-between"
          display="flex"
          backgroundSize="cover"
        >
          <Box margin="1rem">
            <Badge colorScheme="green">{purpose}</Badge>
          </Box>
          <Box height="50%" bgGradient="linear(to-t, #0a0blcd9 , #ffffff00 100%)"
          display="flex"
          alignItems="flex-end"
          padding="1rem" >
            <Text fontSize="3xl" fontWeight="medium" color="whiteAlpha.900" >{price}</Text>
          </Box>
        </Box>
        <Link href={`/properties/${externalID}`}>
      <Box padding="1.5rem">
        <Text fontSize="xl" fontWeight="medium" marginBottom="1rem" isTruncated>{propertyType}</Text>
        <Text fontWeight="light" fontSize="sm" isTruncated>{address}</Text>
        <Text isTruncated>{title}</Text>
        <HStack spacing="1.3rem" marginTop="1rem">
          <Flex alignItems="center" gap="0.3rem">
          <TbBed/>
            {rooms}
          </Flex>
          <Flex alignItems="center" gap="0.3rem">
          <TbBath/>
            {baths}
          </Flex>
          <Flex alignItems="center" gap="0.3rem">
          <TbRuler/>
            {sqSize}
            <sup>m2</sup>
          </Flex>
        </HStack>
      </Box>
        </Link>
      </Box>
    </>
  );
};

export default PropertyCard;
