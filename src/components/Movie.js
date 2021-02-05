import React from "react";
import '../App.css'

const Movie = ({ movie }) => {
  const poster =
    movie.Poster === "N/A" ? movie : movie.Poster;
  return (
    <div className="movie col-md-12">
      <h2>{movie.Title}</h2>

      <div className="flex-container ">
        <img
          width="250"
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
        />
      </div>
      <h5>Released Yr: {movie.Year}</h5>
      <h5>Movie-Id: {movie.imdbID}</h5>
    </div>
  );
};

export default Movie;
