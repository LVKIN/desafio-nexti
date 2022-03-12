import React from "react";
import { useAuthContex } from "./context/AuthContext";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

const App = () => {
  const { isAuthenticated } = useAuthContex();

  return (
    isAuthenticated ? <HomePage /> : <LoginPage />
  )
}

export default App;