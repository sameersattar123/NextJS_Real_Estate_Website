import DefaultLayouts from '@/Features/common/layouts/DefaultLayouts'
import ContactForm from '@/Features/common/modules/ContactForm'
import TextContentBox from '@/Features/common/modules/TextContentBox'
import { Box, Grid, GridItem , Text } from '@chakra-ui/react'
import React from 'react'

const contact = () => {
  return (
    <DefaultLayouts>
        <Box backgroundColor="#f7f8f9" paddingY="3rem">
            <Grid templateColumns="repeat(6,1fr)" gap="5" maxWidth="1280px" margin="0 auto">
                <GridItem colSpan={{base: 6 , sm: 4}}>
                    <TextContentBox title="Contact Us">
                        <ContactForm/>
                    </TextContentBox>
                </GridItem>
                <GridItem  colSpan={{base: 6 , sm: 2}}>
                    <TextContentBox title="For Inquires Contact:">
                        <Text fontWeight="light" fontSize="1rem" color="gray.600" marginBottom="2rem">
                            Lorem, ipsum. <br />
                            Lorem ipsum dolor sit. <br />
                            Lorem ipsum dolor sit amet consectetur.
                        </Text>
                        <Text fontWeight="light" fontSize="1rem" color="gray.600" marginBottom="2rem">
                            Lorem, ipsum. <br />
                            Lorem ipsum dolor sit. <br />
                            Lorem ipsum dolor sit amet consectetur.
                        </Text>
                    </TextContentBox>
                </GridItem>
            </Grid>
        </Box>
    </DefaultLayouts>
  )
}

export default contact
