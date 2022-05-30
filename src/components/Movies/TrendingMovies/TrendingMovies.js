import MovieItem from "../MovieItem";
import classes from "./TrendingMovies.module.css";

const TrendingMovies = (props) => {
  const trendingMovies = props.movieData.map((movie) => {
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
      <div className={classes["trending-movies"]}>
        <div className={classes["trending-movies__header"]}>
          <div className={classes["trending-movies__title"]}>
            <h2>Trending Movies</h2>
          </div>
          <div className={classes["trending-movies__btn"]}>
            <button type="button">View More</button>
          </div>
        </div>
        <div className={classes["trending-movies__list"]}>{trendingMovies}</div>
      </div>
    </>
  );
};

export default TrendingMovies;
