// AuthContext.js
import React, { createContext, useState } from 'react';
import axios from 'axios';

// Create the context
export const AuthContext = createContext();

// Create the provider component
export const AuthProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isCreatingAccount, setIsCreatingAccount] = useState(false);
    const [authData, setAuthData] = useState({
        accessToken: localStorage.getItem('faccess_token'), // Changed to 'faccess_token' to match your storage key
        refreshToken: localStorage.getItem('refresh_token'),
        isAuthenticated: !!localStorage.getItem('faccess_token'),
    });

    const [loading, setLoading] = useState(false);

    // Function to store tokens in localStorage
    const toStorage = (access, refresh) => {
        localStorage.setItem('faccess_token', access);
        localStorage.setItem('refresh_token', refresh);
    };

    // Login function (to be used in components)
    const handleLogin = async (loginEmail, loginPassword) => {
        try {
            setLoading(true);

            // Make the POST request to the server with email and password
            const response = await axios.post(
                "https://ghanacrimes-api.onrender.com/api/auth/login/",
                {
                    email: loginEmail,
                    password: loginPassword,
                }
            );

            // Check if the response status indicates successful login
            if (response.status === 201) {
                const { access, refresh } = response.data;

                // Use the toStorage function to store tokens
                toStorage(access, refresh);

                // Update state with new authentication data
                setAuthData({
                    accessToken: access,
                    refreshToken: refresh,
                    isAuthenticated: true,
                });

                console.log('Access Token stored:', localStorage.getItem('faccess_token'));
                console.log('Refresh Token stored:', localStorage.getItem('refresh_token'));
                
                alert("Login successful");
            } else {
                alert("Unexpected response from the server.");
            }
        } catch (error) {
            console.log("Error Response: ", error.response);
            const errorMessage = error.response?.data?.message || "Invalid email or password";
            alert(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    // Logout function
    const handleLogout = () => {
        localStorage.removeItem("faccess_token");
        localStorage.removeItem("refresh_token");

        setAuthData({
            accessToken: null,
            refreshToken: null,
            isAuthenticated: false,
        });

        alert("Logged out successfully");
    };

    return (
        <AuthContext.Provider value={{ authData, handleLogin, handleLogout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
