import { Box, Center, Divider, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { TbBath, TbBed, TbRuler } from 'react-icons/tb'

const PropertyStats = ({rooms , baths , price , sqsize}) => {
    return (
      <Box padding="1.5rem" marginBottom="1rem" backgroundColor="white">
        <Flex
        flexDirection={{base: "column" , sm : "row"}}
        fontSize="xl"
        fontWeight="light"
        alignItems="center"
        justifyContent="space-around"
        gap="1rem"
        color="gray.500"
        >
            <Flex 
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="3rem">
                <Text>BEDS</Text>
                <Flex alignItems="center" gap="0.3rem">
                    <TbBed/>
                    {rooms}
                </Flex>
            </Flex>
            <Center height="50px">
                <Divider orientation='vertical'/>
            </Center>
            <Flex 
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="3rem">
                <Text>BATHS</Text>
                <Flex alignItems="center" gap="0.3rem">
                    <TbBath/>
                    {baths}
                </Flex>
            </Flex>
            <Center height="50px">
                <Divider orientation='vertical'/>
            </Center>
            <Flex 
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="3rem">
                <Text>SIZE</Text>
                <Flex alignItems="center" gap="0.3rem">
                    <TbRuler/>
                    {sqsize}
                    <sup>m2</sup>
                </Flex>
            </Flex>
            <Center height="50px">
                <Divider orientation='vertical'/>
            </Center>
            <Flex 
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="3rem">
                <Text>PRICE</Text>
                <Flex alignItems="center" gap="0.3rem">
                    {price}
                </Flex>
            </Flex>
        </Flex>
      </Box>
  )
}

export default PropertyStats