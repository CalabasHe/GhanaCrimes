import axios from "axios";

const contactAPI = "https://ghanacrimes-api.onrender.com/api/contact-us";

export const sendContactData = async (formData) => {
  try {
    // Get the token from localStorage
    const token = localStorage.getItem("token"); // or however you store your token

    if (!token) {
      throw new Error("Authentication required to send message");
    }

    const response = await axios.post(contactAPI, formData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Add the token to headers
      },
    });

    return response.data;
  } catch (error) {
    if (error.response?.status === 401) {
      console.error("Authentication failed. Please ensure you're logged in.");
      throw new Error("Authentication required to send message");
    }
    console.error("Error while sending contact data:", error);
    throw error;
  }
};
