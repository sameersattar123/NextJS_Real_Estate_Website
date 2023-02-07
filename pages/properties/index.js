import { getProperty } from '@/Features/common/Home/Api/getProperty';
import DefaultLayouts from '@/Features/common/layouts/DefaultLayouts';
import PropertyCard from '@/Features/common/modules/PropertCard/PropertyCard';
import { Box, SimpleGrid } from '@chakra-ui/react';
import React from 'react'

const Properties = ({properties}) => {
  return (
    <>
    <DefaultLayouts>
    <Box backgroundColor="#f7f8f9" padding="3rem">
        <Box maxWidth="1280px" margin="0 auto">
            <SimpleGrid columns={{base:"1" , sm:"3"}}  gap={{base:"0" , sm:"2rem"}}>
            {properties.map((property)=>{
                return( 
                    <PropertyCard key={property.id} {...property}/>
                )
            })}
            </SimpleGrid>
        </Box>
    </Box>
    </DefaultLayouts>
    </>
  )
}

export default Properties;

export async function getStaticProps() {
    const properties = await getProperty(20)
    return {
      props: { properties: properties},
    };
  }