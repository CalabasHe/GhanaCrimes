import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

// Create the context
export const AuthContext = createContext();

// Create the provider component
export const AuthProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);
  const [loginPassword, SetLoginPassword] = useState("");
  const [loginEmail, SetLoginEmail] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [topicData, setTopicData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [savedArticles, setSavedArticles] = useState([]);

  // Function to store tokens in localStorage
  const toStorage = (access, refresh) => {
    localStorage.setItem("faccess_token", access);
    localStorage.setItem("refresh_token", refresh);
  };

  const fetchSavedArticles = async () => {
    if (!isLoggedIn) return;

    const token = localStorage.getItem("faccess_token");
    if (!token) return;

    try {
      const response = await axios({
        method: "get",
        url: "https://ghanacrimes-api.onrender.com/api/save-news/",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setSavedArticles(response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching saved articles:", error);
      return [];
    }
  };

  const isAuthenticated = () => {
    const token = localStorage.getItem("faccess_token");
    return !!token;
  };

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("faccess_token");
      setIsLoggedIn(!!token);
    };

    checkAuth();
  }, []);

  const handleComment = async (message, newsSlug) => {
    const commentAPI = `https://ghanacrimes-api.onrender.com/api/comments/`;

    if (!isAuthenticated()) {
      console.error("User not authenticated");
      throw new Error("Please login to add a comment");
    }

    try {
      const token = localStorage.getItem("faccess_token");
      console.log("Sending comment data:", {
        news_article: newsSlug,
        message,
        url: commentAPI,
      });

      const response = await axios({
        method: "post",
        url: commentAPI,
        data: {
          news_article: newsSlug,
          message: message,
        },
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      return response.data;
    } catch (error) {
      console.error("Error details:", error.response?.data); // Log the detailed error response
      if (error.response?.status === 401) {
        localStorage.removeItem("faccess_token");
        localStorage.removeItem("refresh_token");
        setIsLoggedIn(false);
        throw new Error("Authentication expired. Please login again");
      } else if (error.response) {
        // Log the server's error message
        throw new Error(
          error.response.data.message ||
            "An error occurred while posting the comment. Please try again."
        );
      } else {
        // Handle other types of errors
        throw new Error(
          "An error occurred while posting the comment. Please try again."
        );
      }
    }
  };

  // Login function (used by components)
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoginOpen(true);

    console.log("Logging in with:", loginEmail, loginPassword); // Log entered email and password

    try {
      setLoading(true); // Ensure correct state function is called

      // Make the POST request to the server with email and password
      const response = await axios.post(
        "https://ghanacrimes-api.onrender.com/api/auth/login/",
        {
          email: loginEmail,
          password: loginPassword,
        }
      );

      // Log the entire response object for debugging
      console.log("Login Response: ", response);
      toStorage(response.data.access, response.data.refresh);

      // Check if the response status indicates successful login
      if (response.status === 201) {
        const { access, refresh } = response.data; // Destructure the tokens from the response

        alert("Login successful");
      } else {
        alert("Unexpected response from the server.");
      }
    } catch (error) {
      // Log the error response for further debugging
      console.log("Error Response: ", error.response);

      // Check if there's an error message from the server and alert it, else show default message
      const errorMessage =
        error.response?.data?.message || "Invalid password or email";
      alert(errorMessage);
    } finally {
      setLoading(false); // Ensure correct state function is called
    }
  };

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("faccess_token");
    localStorage.removeItem("refresh_token");
    setIsOpen(false);

    alert("Logged out successfully");

    // Refresh the page
    window.location.reload();
  };

  const topicsAPI = "https://ghanacrimes-api.onrender.com/api/topics/";

  useEffect(() => {
    const getTopics = async () => {
      try {
        const response = await axios.get(`${topicsAPI}`);
        // console.log(response.data.results);
        setTopicData(response.data.results);
      } catch {
        console.error("Error fetching news");
        return [];
      }
    };

    getTopics();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isOpen,
        setIsOpen,
        handleLogin,
        handleLogout,
        loading,
        isLoggedIn,
        setIsLoggedIn,
        isLoginOpen,
        setIsLoginOpen,
        topicData,
        handleComment,
        savedArticles,
        fetchSavedArticles,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
