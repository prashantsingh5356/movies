import React from "react";
import WatchMovieContext from "../context/watch-movie/WatchMovieContext";
import { useState } from "react";

const WatchMovieProvider = (props) => {
  const [movieData, setMovieData] = useState([]);
  const upDateMovie = (movie) => {
    setMovieData(movie);
  };

  return (
    <WatchMovieContext.Provider
      value={{
        movie: movieData,
        setMovie: upDateMovie,
      }}
    >
      {props.children}
    </WatchMovieContext.Provider>
  );
};

export default WatchMovieProvider;
