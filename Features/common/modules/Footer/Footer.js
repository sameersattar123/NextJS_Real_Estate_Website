import { Box, Flex, SimpleGrid ,Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { HiHomeModern } from 'react-icons/hi2'
import {services ,workWithUs , about , ourOffices  } from "./FooterConsts"

const Footer = () => {
  return (
    <Box backgroundColor="blue.600">
    <Box
    maxWidth="1280px"
    margin="0 auto"
    paddingY="3rem"
    paddingX={{ base: "2rem", sm:"0" }}
    >
    <SimpleGrid column="4" color="whiteAlpha.700" gap="1.7rem" minChildWidth="150px">
    <Flex flexDirection="column">
      <FooterHeader title="Services"/>
      {
        services.map((item)=>{
            return (
            <FooterLinks key={item.name} {...item}/>
            )
        })
      }  
    </Flex>
    <Flex flexDirection="column">
      <FooterHeader title="Work With Us"/>
      {
        workWithUs.map((item)=>{
            return (
            <FooterLinks key={item.name} {...item}/>
            )
        })
      }  
    </Flex>
    <Flex flexDirection="column">
      <FooterHeader title="About"/>
      {
        about.map((item)=>{
            return (
            <FooterLinks key={item.name} {...item}/>
            )
        })
      }  
    </Flex>
    <Flex flexDirection="column">
      <FooterHeader title="Our Office"/>
      {
        ourOffices.map((item)=>{
            return (
            <FooterLinks key={item.name} {...item}/>
            )
        })
      }  
    </Flex>
    </SimpleGrid>
    </Box>
      <Box
      backgroundColor="blue.900"
      display="flex"
      padding="2rem"
      color="white"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      >
    <Box alignItems="center" gap="2" display="flex">
        <HiHomeModern/>
        <Text fontSize="lg" fontWeight="black">
            CASAZ
        </Text>
    </Box>
    <Text marginTop="1rem" fontSize="xs" textAlign="center">
        All rughts reserved - Copyright CASAZ
    </Text>
      </Box>
    </Box>
  )
}

export default Footer;

const FooterLinks = ({link,name}) =>{
    return (
        <Text>
            <Link href={link}>{name}</Link>
        </Text>
    )
}

const FooterHeader = ({title}) =>{
    return (
        <Text
        as="h4"
        fontWeight="light"
        fontSize="xl"
        marginBottom="1rem"
        >
        {title}
        </Text>
    )
}
