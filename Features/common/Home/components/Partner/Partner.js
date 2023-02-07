import { Image, SimpleGrid } from '@chakra-ui/react'
import React from 'react'


const Partner = () => {
  return (
    <>
    <SimpleGrid  margin="0 auto" minChildWidth="150px" >
    <Image
        src="https://img.freepik.com/premium-vector/real-estate-property-logo-design_43322-119.jpg?w=2000"
        alignSelf="center"
        padding={{base:"2rem" , sm:"3rem"}}
        filter="grayscale(1)"
        opacity="0.4"
    />
    <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZZNvC8q5u4-xNIfPxp723diAg6ADqB7aM9A&usqp=CAU"
        alignSelf="center"
        padding={{base:"2rem" , sm:"3rem"}}
        filter="grayscale(1)"
        opacity="0.4"
    />
    <Image
        src="https://t4.ftcdn.net/jpg/03/64/12/77/360_F_364127716_pxMaRBMxJKfpbFaScm1gRXbHleUxZABF.jpg"
        alignSelf="center"
        padding={{base:"2rem" , sm:"3rem"}}
        filter="grayscale(1)"
        opacity="0.4"
    />
    <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe0BI5c9UXGLjhfIZBSg9X02QURPHTcMJfAA&usqp=CAU"
        alignSelf="center"
        padding={{base:"2rem" , sm:"3rem"}}
        filter="grayscale(1)"
        opacity="0.4"
    />
    <Image
        src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30150855/1814.png"
        alignSelf="center"
        padding={{base:"2rem" , sm:"3rem"}}
        filter="grayscale(1)"
        opacity="0.4"
    />
    </SimpleGrid>
    
    </>
  )
}

export default Partner
