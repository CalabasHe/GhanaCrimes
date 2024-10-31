import axios from "axios";

const commentAPI = "https://ghanacrimes-api.onrender.com/api/comments/";

export const sendComment = async (formData) => {
  toStorage(response.data.access, response.data.refresh);

  if (response.status === 201) {
    const { access, refresh } = response.data;
  }
  try {
    const response = await axios.post(commentAPI, formData);
    console.log("Comment:", formData);

    return response.data;
  } catch (error) {
    if (error.response?.status === 401) {
      console.error("Authentication failed. Please ensure you're logged in.");
      throw new Error("Authentication required to send message");
    }
    console.error("Error while sending comment:", error);
    throw error;
  }
};
