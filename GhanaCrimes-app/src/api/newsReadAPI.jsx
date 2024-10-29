import axios from "axios";

const api = `https://ghanacrimes-api.onrender.com/api`

export const fetchNewsArticle = async (slug) => {
  try {
    const response = await axios.get(
      `https://ghanacrimes-api.onrender.com/api/news/${slug}/`
    );
    return response.data;
  } catch (error) {
    throw new Error("Error fetching article:", error); // Adjusted error message
  }
};

export const fetchNewsTopicsCategory = async (slug) => {
  try {
    const response = await axios.get(
      `https://ghanacrimes-api.onrender.com/api/topics/${slug}/`
    );
    return response.data;
  } catch (error) {
    throw new Error("Error fetching article:", error); // Adjusted error message
  }

}

export const fetchNewsTopics = async () => {
  try {
    const response = await axios.get(`${api}/topics/`);
    return (response.data);
  } catch (error) {
    throw new Error("Error fetching article:", error); // Adjusted error message
  }
};

