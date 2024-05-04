import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import axios from "axios";
import Cookies from "js-cookie"; // Library for handling cookies

// Create the AuthContext
const AuthContext = createContext();

axios.defaults.withCredentials = true; 
// AuthProvider component to manage authentication state
export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  // Check the login state from the server
  const checkLoginState = useCallback(async () => {
    try {
    
      const response = await axios.get("https://o-auth-adan.vercel.app/auth/logged_in");
      const { loggedIn, user } = response.data;
        
console.log(loggedIn);
      if (loggedIn) {
        setAuthenticated(true);
        setUser(user);
      } else {
        setAuthenticated(false);
        setUser(null);
        setToken(null);
      }
    } catch (err) {
      console.error("Error checking login state:", err);
      setAuthenticated(false);
    }
  }, []);

  useEffect(() => {
    const storedToken = localStorage.getItem("token"); // For email/password users
    const cookieToken = Cookies.get("token"); // For Google users
    console.log(cookieToken);
    const currentToken = storedToken || cookieToken;

    if (currentToken) {
      setToken(currentToken);
      checkLoginState(); // Check server login state
    }
  }, [checkLoginState]);

  // Function to log in a user
  const login = (authToken, userData) => {
    setAuthenticated(true);
    setToken(authToken);
    setUser(userData);

    // Store token in local storage for email/password users
    if (userData.email) {
      localStorage.setItem("token", authToken);
    }
  };
    // Function to log in a Google user
    const GoogleLogin = ( ) => {
      setAuthenticated(true);
      
    };
  
    const handleLogout = async () => {
      try {
        await axios.post(`https://o-auth-adan.vercel.app/auth/logout`)
        // Check login state again
        checkLoginState()
      } catch (err) {
        console.error(err)
      }
    }

  // Function to log out a user
  const logout = () => {
    handleLogout();
    setAuthenticated(false);
    setUser(null);
    setToken(null);

    // Clear local storage and cookie
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{ authenticated, user, token, login, logout, checkLoginState,GoogleLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
