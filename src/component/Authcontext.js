import React, { createContext, useContext, useState, useEffect } from "react";

// Create an authentication context
export const AuthContext = createContext();

// AuthProvider component to wrap your application
export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedToken && storedUser) {
      // Set the user as authenticated and set the token and user data
      setAuthenticated(true);
      setUser(storedUser);
      setToken(storedToken);
    }
  }, []);

  // Function to set the authentication status to true
  const login = (userData, authToken) => {
    setAuthenticated(true);
    setUser(userData);
    setToken(authToken);
    
    console.log(JSON.stringify(userData))

    // Store the token and user data in local storage
    localStorage.setItem("token", authToken);
    

    localStorage.setItem("user", JSON.stringify(userData));
  };

  // Function to set the authentication status to false (for logout)
  const logout = () => {
    setAuthenticated(false);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("Id");
    setUser(null);
    setToken(null);
  };

  // Function to set the authentication status
  const setAuthStatus = (status) => {
    setAuthenticated(status);
  };
  
  console.log(authenticated);

  return (
    <AuthContext.Provider
      value={{ user, authenticated, token, login, logout, setAuthStatus }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access the authentication context
export const useAuth = () => useContext(AuthContext);
