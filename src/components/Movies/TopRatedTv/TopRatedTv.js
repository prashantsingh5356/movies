import classes from "./TopRatedTv.module.css";
import MovieItem from "../MovieItem";

const TopRatedTv = (props) => {
  // console.log(props.tvData);
  const topRatedMovies = props.tvData.map((movie) => {
    return (
      <MovieItem
        key={movie.id}
        id={movie.id}
        title={movie.name}
        poster={movie["poster_path"]}
      />
    );
  });
  return (
    <>
      <div className={classes["toprated-tv"]}>
        <div className={classes["toprated-tv__header"]}>
          <div className={classes["toprated-tv__title"]}>
            <h2>Top Rated Tv</h2>
          </div>
          <div className={classes["toprated-tv__btn"]}>
            <button type="button">View More</button>
          </div>
        </div>
        <div className={classes["toprated-tv__list"]}>{topRatedMovies}</div>
      </div>
    </>
  );
};

export default TopRatedTv;
