import { useState, useEffect } from "react";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const access = localStorage.getItem("auth--status");

    if (access) {
      setIsAuthenticated(true);
    }

    setIsLoading(false);
  }, [])

  function handleLogin(user, password) {
    if (user === "desafio.nexti" && password === "candidatoAprovado") {
      localStorage.setItem("auth--status", "allowed");
      localStorage.setItem("user--info", "Desafio Nexti")
      setIsAuthenticated(true);
    } else {
      alert("Usuário e/ou senha inválidos!");
    }
  }

  function handleLogout() {
    setIsAuthenticated(false);
    localStorage.removeItem("auth--status");
    localStorage.removeItem("user--info");
  }

  return { handleLogin, handleLogout, isAuthenticated, isLoading }
}