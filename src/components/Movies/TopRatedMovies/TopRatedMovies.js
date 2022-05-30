import classes from "./TopRatedMovies.module.css";
import MovieItem from "../MovieItem";

const TopRatedMovies = (props) => {
  //   console.log(props.movieData);
  const topRatedMovies = props.movieData.map((movie) => {
    return (
      <MovieItem
        key={movie.id}
        id={movie.id}
        title={movie.title}
        poster={movie["poster_path"]}
      />
    );
  });

  return (
    <>
      <div className={classes["toprated-movies"]}>
        <div className={classes["toprated-movies__header"]}>
          <div className={classes["toprated-movies__title"]}>
            <h2>Top Rated Movies</h2>
          </div>
          <div className={classes["toprated-movies__btn"]}>
            <button type="button">View More</button>
          </div>
        </div>
        <div className={classes["toprated-movies__list"]}>{topRatedMovies}</div>
      </div>
    </>
  );
};

export default TopRatedMovies;
