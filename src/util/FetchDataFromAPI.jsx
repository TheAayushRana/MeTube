import axios from "axios";

const baseUrl = "https://youtube138.p.rapidapi.com";

const options = {
  params: { hl: "en", gl: "IN" },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const FetchDataFromAPI = async (url) => {
  const { data } = await axios.get(`${baseUrl}/${url}`, options);
  return data;
};
