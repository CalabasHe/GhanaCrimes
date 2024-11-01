import React, { useState, useEffect, useContext, useCallback } from "react";
import axios from "axios";
import { AuthContext } from "../context/context";

const API_BASE_URL = "https://ghanacrimes-api.onrender.com/api";

const SaveNewsButton = ({ articleId }) => {
  const [isSaved, setIsSaved] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState(null);
  const { isLoggedIn, setIsLoggedIn, setIsLoginOpen } = useContext(AuthContext);

  const apiClient = axios.create({
    baseURL: API_BASE_URL,
    timeout: 15000,
  });

  const getAuthHeaders = useCallback(() => {
    const token = localStorage.getItem("faccess_token");
    return token ? {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    } : null;
  }, []);

  const checkIfSaved = useCallback(async () => {
    if (!isLoggedIn || !articleId) return;

    const headers = getAuthHeaders();
    if (!headers) return;

    try {
      const response = await apiClient.get("/save-news/", { headers });
      
      // Detailed logging of response structure
      console.log("Full response data:", JSON.stringify(response.data, null, 2));
      console.log("Article ID we're looking for:", articleId);
      
      const savedArticles = response.data.results || [];
      console.log("Saved articles:", savedArticles);
      
      // Log each saved article's structure
      savedArticles.forEach((item, index) => {
        console.log(`Saved article ${index}:`, {
          savedId: item.id,
          articleData: item.article,
          createdAt: item.created_at
        });
      });

      const isArticleSaved = savedArticles.some(item => {
        // Log the comparison
        console.log("Comparing:", {
          currentArticleId: item.article?.id,
          searchingFor: articleId,
          matches: item.article?.id === articleId
        });
        return item.article?.id === articleId;
      });

      console.log("Final is article saved:", isArticleSaved);
      
      setIsSaved(isArticleSaved);
      localStorage.setItem(`saved_article_${articleId}`, JSON.stringify(isArticleSaved));

    } catch (error) {
      console.error("Error checking saved status:", error.response || error);
      if (error.response?.status === 401) {
        handleAuthError();
      }
      const savedStatus = localStorage.getItem(`saved_article_${articleId}`);
      if (savedStatus) {
        setIsSaved(JSON.parse(savedStatus));
      }
    }
  }, [articleId, isLoggedIn, apiClient]);

  const handleAuthError = () => {
    localStorage.removeItem("faccess_token");
    localStorage.removeItem("refresh_token");
    setIsLoggedIn(false);
    setIsLoginOpen(true);
  };

  useEffect(() => {
    const savedStatus = localStorage.getItem(`saved_article_${articleId}`);
    if (savedStatus) {
      setIsSaved(JSON.parse(savedStatus));
    }
    
    checkIfSaved();
  }, [articleId, isLoggedIn, checkIfSaved]);

  const handleSave = async () => {
    if (!isLoggedIn) {
      setIsLoginOpen(true);
      return;
    }

    const headers = getAuthHeaders();
    if (!headers) {
      setIsLoginOpen(true);
      return;
    }

    try {
      setIsSaving(true);
      setError(null);

      // Log the article ID we're trying to save
      console.log("Attempting to save article with ID:", articleId);

      const payload = {
        article: articleId
      };
      
      console.log("Save request payload:", payload);
      console.log("Save request headers:", headers);

      const response = await apiClient.post("/save-news/", payload, { headers });
      console.log("Save response:", response.data);

      if (response.status === 201 || response.status === 200) {
        console.log("Save successful!");
        setIsSaved(true);
        localStorage.setItem(`saved_article_${articleId}`, JSON.stringify(true));
        
        // Refetch the saved articles list to update the state
        checkIfSaved();
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    } catch (error) {
      console.error("Save error details:", {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status
      });
      
      setError(error.response?.data?.message || "Failed to save article");
      
      if (error.response?.status === 401) {
        handleAuthError();
      }
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <button
      onClick={isSaved ? null : handleSave}
      disabled={isSaved || isSaving}
      className={`flex gap-2 items-center group relative ${error ? 'opacity-50' : ''}`}
      title={
        error ? error :
        isSaved ? "Article already saved" :
        isLoggedIn ? "Save article" :
        "Login to save articles"
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        className="transition-colors duration-300"
      >
        <path
          fill={isSaved ? "#f06c00" : "#666666"}
          className={`group-hover:fill-[#f06c00] ${isSaving ? "opacity-50" : ""}`}
          d="M17 5v12.554l-5-2.857l-5 2.857V5zm0-2H7a2 2 0 0 0-2 2v16l7-4l7 4V5a2 2 0 0 0-2-2"
        />
      </svg>
      <p
        className={`group-hover:text-[#f06c00] transition-colors duration-300 ${isSaving ? "opacity-50" : ""}`}
      >
        {isSaved ? "Saved" : isSaving ? "Saving..." : "Save"}
      </p>
    </button>
  );
};

export default SaveNewsButton;