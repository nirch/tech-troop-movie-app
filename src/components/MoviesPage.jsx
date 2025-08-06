import Movie from "./Movie";
import './MoviesPage.css'; 
import jsonMovies from '../data/movies.json'

function MoviesPage() {
  const movies = jsonMovies;

  return (
    <div className="movies-page">
      <h1>Movies Page</h1>
      {movies.map(movie => 
        <Movie movie={movie} key={movie.id} />)}
    </div>
  );
}

export default MoviesPage;