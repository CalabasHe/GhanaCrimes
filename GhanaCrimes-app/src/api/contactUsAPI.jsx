
import axios from "axios";

const contactAPI = "https://ghanacrimes-api.onrender.com/api/contact-us";

export const sendContactData = async (formData) => {
  try {
    const response = await axios.post(contactAPI, formData);
    return response.data; // Return the response data for further use
  } catch (error) {
    console.error("Error while sending contact data:", error);
    throw error; // Throw error so the calling function can handle it
  }
};
