import { Box, Text} from '@chakra-ui/react'
import React from 'react'
import Fade from 'react-reveal/Fade';
import HeroForm from '../HeroForm';

const HeroBanner = () => {
  return (
    <>
    <Fade left>
   <Box 
   position="relative"
   minHeight={{ base:"150vh" , sm:"100vh"}}
   backgroundImage={`url('https://www.decorilla.com/online-decorating/wp-content/uploads/2020/09/Refreshing-light-wood-Scandinavian-study-room-design-ideas-by-Design-Cafe.jpg')`} 
    backgroundSize="cover"
    backgroundPsotion="center"
    backgroundAttachment="fixed"
   >
    <Box
    position="absolute"
    width="100%"
    height ="100%"
    opacity="0.85"
    backgroundColor="blue.900"
    />
    <Box
     display="flex"
     flexDirection={{base:"column" , sm:"row"}}
     alignItems="center"
     justifyContent={{base:"flex-start" , sm:"space-between"}}
     maxWidth="1280px"
     position="absolute"
     color="white"
     fontWeight="light"
     top="0"
     bottom="0"
     right="0"
     left="0"
     margin="0 auto"
     padding="2rem"
     >
     <Box
     width={{base:"100%" , sm:"50%"}}>
     <Text fontSize={{base:"4xl" , sm:"5xl"}} lineHeight="shorter" marginBottom="1.5rem" >
     Download our new <strong>Property Buying Guide </strong> today... 
     </Text>
     <Text fontSize={{base:"lg" , sm:"2xl"}}>
     A free PDF with our best secrets for evaluting a property purchase , calculating profit and so  much more
     </Text>
     </Box>
     
     <Box width={{base:"100%" , sm:"auto"}} marginTop={{base:"2rem" , sm:"0"}} ><HeroForm/></Box>
     </Box>
   </Box>
   </Fade>
    </>
  )
}

export default HeroBanner
