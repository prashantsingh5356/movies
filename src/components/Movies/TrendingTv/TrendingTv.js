import classes from "./TrendingTv.module.css";
import MovieItem from "../MovieItem";

const TrendingTv = (props) => {
  const trendingTv = props.tvData.map((movie) => {
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
      <div className={classes["trending-tv"]}>
        <div className={classes["trending-tv__header"]}>
          <div className={classes["trending-tv__title"]}>
            <h2>Trending Tv</h2>
          </div>
          <div className={classes["trending-tv__btn"]}>
            <button type="button">View More</button>
          </div>
        </div>
        <div className={classes["trending-tv__list"]}>{trendingTv}</div>
      </div>
    </>
  );
};

export default TrendingTv;
