import React, { useReducer, useEffect } from "react";

import Header from "./Header";
import Movie from "./Movie";
import spinner from "../assets/ajax-loader.gif";
import { initialState, reducer } from "../store/reducer";
import axios from "axios";


const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get(MOVIE_API_URL).then(jsonResponse => {
      dispatch({
        type: "SEARCH_MOVIES_SUCCESS",
        payload: jsonResponse.data.Search
      });
    });
  }, []);

  
  const { movies, errorMessage, loading } = state;

  const retrievedMovies =
    loading && !errorMessage ? (
      <img className="spinner" src={spinner} alt="Loading spinner" />
    ) : errorMessage ? (
      <div className="errorMessage">{errorMessage}</div>
    ) : (
      movies.map((movie, index) => (
        <Movie key={`${index}-${movie.Title}`} movie={movie} />
      ))
    );

  return (
    <div className="App container " style={{textAlign:"center"}}>
      <div className="container">
        <Header text="Organic" />
        {/* <Search search={search} /> */}
        <div className="movies ">{retrievedMovies}</div>
      </div>
    </div>
  );
};

export default App;
