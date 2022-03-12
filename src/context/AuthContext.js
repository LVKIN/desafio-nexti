import React, { createContext, useContext } from "react";
import { useAuth } from "../hooks/useAuth";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const { handleLogin, handleLogout, isAuthenticated, isLoading } = useAuth();

  return (
    <AuthContext.Provider value={{ handleLogin, handleLogout, isAuthenticated, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContex = () => {
  const context = useContext(AuthContext);

  return context;
}