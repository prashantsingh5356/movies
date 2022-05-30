import React from "react";

const WatchMovieContext = React.createContext({
  movie: [],
  setMovie: () => {},
});

export default WatchMovieContext;
