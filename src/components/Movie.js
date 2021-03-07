import React from "react";
import '../App.css'
const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movie = ({ movie }) => {
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  return (
    <div className="Movie col-md-5">
      <h2>{movie.Title}</h2>
      <p>{movie.Year}</p>
      <div className="flex-container ">
        <img
          width="300"
          height="400"
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
        />
      </div>
      
    </div>
  );
};

export default Movie;
