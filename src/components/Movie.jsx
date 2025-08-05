import './Movie.css'


function Movie() {

  const movie = {
    name: "Forrest Gump",
    runtime: 142,
    year: 1994,
    plot: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
    genres: ["Drama", "Comedy"],
    poster:
      "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg",
    imdb: "https://www.imdb.com/title/tt0109830/",
  };


  // formats the minutes runtime to: Xh Xm
  // For example: 142 -> 2h 22m
  function formatRuntime(runtime) {
    const hours = parseInt(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h ${minutes}m`
  }



  return (
    <div className="movie">
      <div className="movie-poster">
        <img src={movie.poster} alt={movie.name} />
      </div>
      <div className="movie-info">
        <h2>{movie.name}</h2>
        <h5>
          {movie.year} | {formatRuntime(movie.runtime)}
        </h5>
        <p>{movie.plot}</p>
        <div className="genres">
          {movie.genres.map((genre, index) => 
            <div key={index}>{genre}</div>
          )}
        </div>
        <p>
          <a href={movie.imdb} target="_blank">More info...</a>
        </p>
      </div>
    </div>
  );
}

export default Movie;