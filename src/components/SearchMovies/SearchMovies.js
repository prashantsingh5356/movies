import classes from "./SearchMovies.module.css";
import MovieItem from "../Movies/MovieItem";

const SearchMovies = (props) => {
  console.log(props.movieData);
  const searchMovieList = props.movieData.map((movie) => {
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
      <div className={classes["search-movie__container"]}>
        <div className={classes["search-movie__banner"]}></div>
        <div className={classes["search-movie__input"]}>
          <input type="text" />
          <button type="button">Search</button>
        </div>
        <div className={classes["search-movie__list"]}>{searchMovieList}</div>
      </div>
    </>
  );
};

export default SearchMovies;
