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

  // Function to store tokens in localStorage
  const toStorage = (access, refresh) => {
    localStorage.setItem("faccess_token", access);
    localStorage.setItem("refresh_token", refresh);
  };

  
  // Login function (used by components)
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form submission
    setIsLoginOpen(true); // Show login UI/modal

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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
