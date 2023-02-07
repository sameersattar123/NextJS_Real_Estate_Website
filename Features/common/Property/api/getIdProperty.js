import { axios } from "@/lib/Axios";

export const getIdProperty = async (id) => {
  const { data } = await axios.get("/properties/detail", {
    params: { externalID: id },
  });
  return data;
};
