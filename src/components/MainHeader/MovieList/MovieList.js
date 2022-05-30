import { useContext } from "react";
import WatchMovieContext from "../../context/watch-movie/WatchMovieContext";

import classes from "./MovieList.module.css";

const MovieList = (props) => {
  const movCtx = useContext(WatchMovieContext);
  const posterImg = `https://image.tmdb.org/t/p/original${props.data.poster}`;
  // console.log(posterImg);
  const modalEnabled = () => {
    movCtx.setMovie({
      id: props.data.id,
      title: props.data.title,
      description: props.data.description,
      backImg: props.data.backdrop,
      posterImg: props.data.poster,
    });
    props.modal();
  };

  return (
    <div className={classes["movie-list__container"]}>
      <div className={classes["movie-list__description"]}>
        <h1>{props.data.title}</h1>
        <p>{props.data.description}</p>
        <button
          onClick={modalEnabled}
          type="button"
          className={classes["movie-btn__watch-now"]}
        >
          Watch now
        </button>
        <button type="button" className={classes["movie-btn__watch-trailer"]}>
          Watch trailer
        </button>
      </div>
      <div
        className={classes["movie-list__image"]}
        style={{
          backgroundImage: `url(${posterImg})`,
        }}
      ></div>
    </div>
  );
};

export default MovieList;
