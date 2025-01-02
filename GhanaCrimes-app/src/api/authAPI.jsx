import axios from "axios";

const api = "https://api.ghanacrimes.com/api";

export const getCrimes = async () => {
  try {
    const response = await axios.get(`${api}/news`);

    return response.data;
  } catch {
    console.error("Error fetching news");
    return [];
  }
};
