import classes from "./MovieItem.module.css";

const MovieItem = (props) => {
  const posterImg = `https://image.tmdb.org/t/p/original${props.poster}`;

  //   console.log(posterImg);
  return (
    <div className={classes["movie-item"]}>
      <div
        className={classes["movie-item__image"]}
        style={{ backgroundImage: `url(${posterImg})` }}
      ></div>
      <div className={classes["movie-item__title"]}>
        <p>{props.title}</p>
      </div>
    </div>
  );
};

export default MovieItem;
