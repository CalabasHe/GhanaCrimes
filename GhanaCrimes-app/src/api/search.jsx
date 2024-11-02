import axios from "axios";

export const getSearch = async (query) => {
  try {
    const response = await axios.get(`https://ghanacrimes-api.onrender.com/api/news/?search_query=${query}`);
    console.log(response)
    return response;
  } catch(error) {
    console.error("Error fetching news", error);
  }
};