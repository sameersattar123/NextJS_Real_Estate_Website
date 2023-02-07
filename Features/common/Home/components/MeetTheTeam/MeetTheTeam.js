import { Box, Text , Flex } from '@chakra-ui/react'
import React from 'react'
import AgentCard from './componenets/AgentCard'
import { agents } from './TeamCons'

const MeetTheTeam = () => {
  return (
    <Box  
    maxWidth="1280px"
    margin="0 auto"
    padding={{ base : "3rem" , sm : "6rem"}}
    >
        <Text
        fontSize={{base:"4xl" , sm:"5xl"}}
        lineHeight="shorter"
        fontWeight="light"
        padding="2rem"
        textAlign="center"
        >
            Meet The Team
        </Text>
        <Text
        fontSize="2xl"
        fontWeight="light"
        marginBottom="3rem"
        marginTop="1rem"
        paddingX="2rem"
        textAlign="center"
        >
           The Best in the industry , at your service 24/7.
        </Text>
        <Flex  direction={{base:"column" , sm:"row"}} gap="1.5rem" justifyContent="space-between" >
            {
                agents.map((agent)=>{
                    return(
                        <AgentCard key={agent.id} {...agent}/>
                    )
                })
            }
        </Flex>
    </Box>
  )
}

export default MeetTheTeam