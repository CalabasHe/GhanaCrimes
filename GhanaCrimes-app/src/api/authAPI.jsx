import axios from "axios";
import { useEffect } from "react";

const api = "https://ghanacrimes-api.onrender.com/api";

export const getCrimes = async () => {
  try {
    const response = await axios.get(`${api}/news`);

    return response.data;
  } catch {
    console.error("Error fetching crimes");
    return [];
  }
};
