import { useState } from "react";
import "./App.css";
import MoviesPage from "./pages/MoviesPage";
import ActorsPage from "./pages/ActorsPage";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router";
import HomePage from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";

function App() {
  const [count, setCount] = useState(0);
  const [activeUser, setActiveUser] = useState(null);
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    setTimeout(() => {
      setActiveUser("john");
      navigate("/movies");
    }, 1000);
  };

  const handleLogout = () => {
      setActiveUser(null);
      navigate("/");
  }

  return (
    <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin}/>} />
          <Route path="/movies" element={<MoviesPage onLogout={handleLogout}/>} />
          <Route path="/actors" element={<ActorsPage onLogout={handleLogout}/>} />
        </Routes>
    </>
  );
}

export default App;
