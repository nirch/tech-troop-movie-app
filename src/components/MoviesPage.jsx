import Movie from "./Movie";
import './MoviesPage.css'; 

function MoviesPage() {
  return (
    <div className="movies-page">
      <h1>Movies Page</h1>
      <Movie />
      <Movie />
    </div>
  );
}

export default MoviesPage;