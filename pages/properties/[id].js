import { usePropertyForm } from "@/Features/common/Hooks/usePropertyForm";
import DefaultLayouts from "@/Features/common/layouts/DefaultLayouts";
import TextContentBox from "@/Features/common/modules/TextContentBox";
import { getIdProperty } from "@/Features/common/Property/api/getIdProperty";
import PropertyMatterPort from "@/Features/common/Property/components/PropertyMatterPort";
import PropertyStats from "@/Features/common/Property/components/PropertyStats";
import PropertyThumbSlider from "@/Features/common/Property/components/PropertyThumbSlider";
import PropertyYoutubeVideo from "@/Features/common/Property/components/PropertyYoutubeVideo";
import {
  Badge,
  Box,
  Flex,
  Grid,
  GridItem,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { TbMapPin } from "react-icons/tb";

const PropertiesSinglePage = ({ property }) => {
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
    photos,
    description,
    coverVideo,
    panorama,
    amenities,
    furshied,
  } = usePropertyForm(property);
  return (
    <DefaultLayouts>
      <Box backgroundColor="#f7f8f9" paddingY="3rem">
        <Grid
          templateColumns="repeat(6,1fr)"
          gap="5"
          margin="0 auto"
          maxWidth="1280px"
        >
          <GridItem colSpan="6">
            <Text
              fontSize="3xl"
              color="black"
              fontWeight="medium"
              textAlign={{ base: "center", sm: "left" }}
            >
              {propertyType} {title}
            </Text>
            <Flex
              fontSize="xl"
              color="blue.500"
              textAlign="center"
              flexDirection={{ base: "column", sm: "row" }}
              gap="0.5rem"
              margin={{ base: "1rem", sm: "0" }}
            >
              <TbMapPin />
              <Text fontWeight="light">
                {address} - ID:{externalID}
              </Text>
              <Badge colorScheme="green">{purpose}</Badge>
            </Flex>
          </GridItem>
          <GridItem colSpan={{ base: 6, sm: 3 }}>
            <PropertyThumbSlider photos={photos} />
          </GridItem>
          <GridItem colSpan={{ base: 6, sm: 3 }}>
            <PropertyStats
              rooms={rooms}
              sqsize={sqSize}
              price={price}
              baths={baths}
            />
            <TextContentBox title="Description">
              <Text
                noOfLines="4"
                fontWeight="light"
                color="gray.600"
                fontSize="1rem"
              >
                {description}
              </Text>
            </TextContentBox>

            <TextContentBox title="Amenities">
              <SimpleGrid
                columns={{ base: 3, sm: 2 }}
                fontWeight="light"
                color="gray.600"
                fontSize="1rem"
              >
                {amenities.length
                  ? amenities.map((item) => <Text>{item}</Text>)
                  : "Please contact us for more info"}
              </SimpleGrid>
            </TextContentBox>
          </GridItem>
          <GridItem colSpan={{ base: 6, sm: 3 }} >
          <TextContentBox  title="Video WalKthrough" />
            <PropertyYoutubeVideo coverVideo={coverVideo} />
          </GridItem>
          <GridItem colSpan={{ base: 6, sm: 3 }} >
          <TextContentBox  title="3D Virtual Walkthrough"/>
            <PropertyMatterPort panorama={panorama} />
          </GridItem>
        </Grid>
      </Box>
    </DefaultLayouts>
  );
};

export default PropertiesSinglePage;

export async function getServerSideProps(context) {
  const {id} = context.query;
  const property = await getIdProperty(id)
  return {
    props: { property : property },
  };
}
