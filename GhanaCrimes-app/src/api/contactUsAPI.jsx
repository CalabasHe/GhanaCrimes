import axios from "axios";

const contactAPI = "https://ghanacrimes-api.onrender.com/api/contact-us";

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: "https://ghanacrimes-api.onrender.com/api",
  headers: {
    'Content-Type': 'application/json',
  }
});

export const sendContactData = async (formData) => {
  try {
    // Get the auth token from wherever you store it (localStorage, context, etc)
    const token = localStorage.getItem('authToken'); // or however you store your token
    
    const response = await apiClient.post('/contact-us', formData, {
      headers: {
        // Include authorization header if token exists
        ...(token && { 'Authorization': `Bearer ${token}` })
      }
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