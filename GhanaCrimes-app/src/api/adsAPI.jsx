// adsAPI.js
const BASE_URL = 'https://ghanacrimes-api.onrender.com/api';

export const advertisementAPI = {
  // Function to create advertisement request
  createAdvertisementRequest: async (data) => {
    try {
      const response = await fetch(`${BASE_URL}/advertisement/request/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add authorization token if required
          // 'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          name: data.full_name,
          email: data.email,
          phone: data.phone_number,
          message: data.message
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error creating advertisement request:', error);
      throw error;
    }
  }
};

export default advertisementAPI;