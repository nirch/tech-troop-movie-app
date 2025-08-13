import { useState } from "react";
import "./App.css";
import MoviesPage from "./pages/MoviesPage";
import ActorsPage from "./pages/ActorsPage";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/actors" element={<ActorsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
