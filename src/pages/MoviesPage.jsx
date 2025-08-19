import Movie from "../components/Movie";
import "./MoviesPage.css";
import { useEffect, useState } from "react";
import { Container } from "@mantine/core";
import { Navbar } from "../components/Navbar";
import { supabase } from "../data/supabase";
import { useFetch } from "../hooks/useFetch";

function MoviesPage() {
  const [movies, setMovies] = useState(null);
  const [comedyOnly, setComedyOnly] = useState(false);
  const [filterText, setFilterText] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  // const {data: myMovies, loading, error} = useFetch("https://app.com/movies");


  useEffect(() => {
    const fetchMovies = async () => {
      let { data, error } = await supabase.from("movies").select("*");
      if (!error) {
        console.log(data);
        setMovies(data);
      }
    };
    fetchMovies();
  }, []);

  function handleMovieSelection(newSelectedMovie) {
    if (selectedMovie === newSelectedMovie) {
      setSelectedMovie(null);
    } else {
      setSelectedMovie(newSelectedMovie);
    }
  }

  let displayMovies = movies;
  filterMovies();

  function filterMovies() {
    if (comedyOnly) {
      displayMovies = displayMovies.filter((movie) =>
        movie.genres.includes("Comedy")
      );
    }

    if (filterText) {
      displayMovies = displayMovies.filter((movie) =>
        movie.name.toLowerCase().includes(filterText.toLowerCase())
      );
    }
  }

  return (
    <>
      <Navbar />
      <Container size="md" className="movies-page">
        <h1>Movies Page</h1>
        <div className="filter-movies">
          <input
            type="text"
            placeholder="Filter Movies..."
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
          />
          <button
            onClick={() => {
              setComedyOnly(!comedyOnly);
            }}
          >
            {comedyOnly ? "Show All" : "Comedy Only"}
          </button>
        </div>
        {displayMovies && displayMovies.map((movie) => (
          <Movie
            movie={movie}
            key={movie.id}
            isSelected={movie === selectedMovie}
            onSelected={handleMovieSelection}
          />
        ))}
      </Container>
    </>
  );
}

export default MoviesPage;
