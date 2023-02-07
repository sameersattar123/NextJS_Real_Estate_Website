import { Box } from "@chakra-ui/react";
import React from "react";

const PropertyYoutubeVideo = ({ coverVideo }) => {
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
          src={`https://www.youtube.com/embed/${coverVideo}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; "
          allowfullscreen
        ></iframe>
      </Box>
    </>
  );
};

export default PropertyYoutubeVideo;
