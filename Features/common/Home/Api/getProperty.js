import { axios } from "@/lib/Axios";

export const getProperty = async (num) => {
  const { data } = await axios.get("/properties/list", {
    params: {
      locationExternalIDs: "5002,6020",
      purpose: "for-sale",
      hitsPerPage: num,
      lang: "en",
      sort: "city-level-score",
      hasVideo: true,
      hasFloorPlan: true,
      hasPanorama: true,
    },
  });
  return data.hits;
};
