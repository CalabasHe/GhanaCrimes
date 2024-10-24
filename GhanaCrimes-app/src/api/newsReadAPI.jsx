import axios from "axios";

export const fetchNewsArticle = async (slug) => {
  try {
    const response = await axios.get(
      `https://ghanacrimes-api.onrender.com/api/news/${slug}/` // Use backticks here
    );
    return response.data;
  } catch (error) {
    throw new Error("Error fetching article:", error); // Adjusted error message
  }
};
