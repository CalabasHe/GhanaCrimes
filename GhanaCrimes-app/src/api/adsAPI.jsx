// Api to post

import axios from 'axios';

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
//Api to List
export const fetchAdvertisements = async (params = {}) => {
  try {
    const response = await axios.get(`${BASE_URL}/advertisement/`, {
      params: {
        page: params.page || 1,
        page_size: params.page_size || 10,
        search: params.search,
        ordering: params.ordering
      }
    });
    
    console.log('Advertisement API Response:', response.data);
    
    // Return the processed data
    return {
      ads: response.data.results.map(ad => ({
        id: ad.id,
        title: ad.title,
        description: ad.description,
        imageUrl: ad.image,
        link: ad.link,
        createdAt: ad.created_at,
        updatedAt: ad.updated_at
      })),
      pagination: {
        count: response.data.count,
        next: response.data.next,
        previous: response.data.previous
      }
    };
  } catch (error) {
    console.error('Error fetching advertisements:', error);
    throw new Error('Failed to fetch advertisements');
  }
};

export default advertisementAPI;