import React from 'react'
import { Box } from '@chakra-ui/react';

const PropertyMatterPort = ({panorama}) => {
    const ratio = (315 / 560) * 100;
    return (
      <>
        <Box
          paddingTop={`${ratio}%`}
          position="relative"
          height="0"
          overflow="hidden"
          frameBorder="0"
        >
          <iframe
            style={{ bottom: 0, top: 0, position: "absolute" }}
            width="100%"
            height="100%"
            src={panorama}
          ></iframe>
        </Box>
      </>
    )
}

export default PropertyMatterPort
