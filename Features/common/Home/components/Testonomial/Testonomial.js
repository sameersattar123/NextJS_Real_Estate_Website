import React from 'react'
import {Box , SimpleGrid, Text} from  "@chakra-ui/react"
import { testimonials } from './TestonimailsInfo'
import TestonomialCard from './components/TestonomialCard'
const Testonomial = () => {
  return (
    <>
    <Box backgroundColor="blue.50">
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
        Testonomials
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
        Here's what our valued clients have to say
      </Text>
      <SimpleGrid
      column="3"
      minChildWidth="300px"
      gap={{ base: "0.5rem" , sm: "2.5rem"}}
      >
{
    testimonials.map((testinomial) =>{
        return(
            <TestonomialCard key={testinomial.name} {...testinomial}/>
        )
    })
}
      </SimpleGrid>
      </Box>
      </Box>
    </>
  )
}

export default Testonomial

