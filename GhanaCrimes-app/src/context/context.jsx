import React, { createContext, useState } from 'react';
import axios from 'axios';
//import { useNavigate } from 'react-router-dom';
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
   
  //  const navigate = useNavigate();

    const [authData, setAuthData] = useState({
        accessToken: localStorage.getItem('faccess_token'), 
        refreshToken: localStorage.getItem('refresh_token'),
        isAuthenticated: !!localStorage.getItem('faccess_token'),
    });

    const [loading, setLoading] = useState(false);
   
    // Function to store tokens in localStorage
    const toStorage = (access, refresh) => {
        localStorage.setItem('faccess_token', access);
        localStorage.setItem('refresh_token', refresh);
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
            toStorage(response.data.access,response.data.refresh)
      
            // Check if the response status indicates successful login
            if (response.status === 201) {
                const { access, refresh } = response.data; // Destructure the tokens from the response
      
                // Store tokens in localStorage
                // localStorage.setItem("access_token", access);
                // localStorage.setItem("refresh_token", refresh);
                
                // Log the tokens stored in localStorage
                // console.log('Access Token stored:', localStorage.getItem('access_token'));
                // console.log('Refresh Token stored:', localStorage.getItem('refresh_token'));
                
                alert("Login successful");
            } else {
                alert("Unexpected response from the server.");
            }
        } catch (error) {
            // Log the error response for further debugging
            console.log("Error Response: ", error.response);
      
            // Check if there's an error message from the server and alert it, else show default message
            const errorMessage = error.response?.data?.message || "Invalid password or email";
            alert(errorMessage);
        } finally {
            setLoading(false); // Ensure correct state function is called
        }
      };
      
     //cy array to run once on component mount
    // Logout function
    const handleLogout = () => {
        localStorage.removeItem("faccess_token");
        localStorage.removeItem("refresh_token");
        setIsOpen(false);
    
        // Optionally reset any auth-related state here if necessary
        // setAuthData({
        //     accessToken: null,
        //     refreshToken: null,
        //     isAuthenticated: false,
        // });
    
        alert("Logged out successfully");
        
        // Refresh the page
        window.location.reload();
    };
    
    return (
        <AuthContext.Provider value={{isOpen, setIsOpen ,authData, handleLogin, handleLogout, loading,isLoggedIn, setIsLoggedIn,isLoginOpen, setIsLoginOpen}}>
            {children}
        </AuthContext.Provider>
    );
};
