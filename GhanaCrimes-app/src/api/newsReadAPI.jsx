import axios from "axios";

const BASE_URL = "https://api.ghanacrimes.com/api";

export const fetchNewsArticle = async (slug) => {
  try {
    if (!slug) throw new Error("Slug is required");

    const url = `${BASE_URL}/news/${slug}/`;
    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    const errorMessage = error.response
      ? `Error fetching article: ${error.response.status} - ${
          error.response.data?.message || error.response.statusText
        }`
      : `Error fetching article: ${error.message}`;

    throw new Error(errorMessage);
  }
};

export const fetchNewsTopicsCategory = async (topic) => {
  const allTopicsResponse = await axios.get(`${BASE_URL}/topics/`);
  const matchingTopic = allTopicsResponse.data.results.find(
    (t) =>
      t.name.toLowerCase() === topic.toLowerCase() ||
      t.slug?.toLowerCase() === topic.toLowerCase()
  );

  if (!matchingTopic) {
    return { news: [] };
  }

  // Use the slug in the API call
  const topicUrl = `${BASE_URL}/topics/${matchingTopic.slug}/`;
  const topicDetailsResponse = await axios.get(topicUrl);

  return topicDetailsResponse.data;
};

export const fetchNewsTopics = async () => {
  try {
    const url = `${BASE_URL}/topics/`;
    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    const errorMessage = error.response
      ? `Error fetching topics: ${error.response.status} - ${
          error.response.data?.message || error.response.statusText
        }`
      : `Error fetching topics: ${error.message}`;

    throw new Error(errorMessage);
  }
};
