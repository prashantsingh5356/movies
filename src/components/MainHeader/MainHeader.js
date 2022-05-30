import React, { useContext } from "react";
import classes from "./MainHeader.module.css";
import MovieList from "./MovieList/MovieList";
import WatchMovieContext from "../context/watch-movie/WatchMovieContext";

const MainHeader = (props) => {
  const backDrop = `https://image.tmdb.org/t/p/original${props.backdrop}`;
  // console.log(backDrop);

  return (
    <div
      className={classes["main-header"]}
      style={{
        backgroundImage: `url(${backDrop})`,
      }}
    >
      <MovieList modal={props.enableModal} data={props}></MovieList>
    </div>
  );
};

export default MainHeader;
