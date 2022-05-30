import classes from "./Movies.module.css";
import TrendingMovies from "./TrendingMovies/TrendingMovies";
import { useEffect, useState, useCallback } from "react";
import TopRatedMovies from "./TopRatedMovies/TopRatedMovies";
import TrendingTv from "./TrendingTv/TrendingTv";
import TopRatedTv from "./TopRatedTv/TopRatedTv";

const Movies = (props) => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [topRatedMovie, setTopRatedMovies] = useState([]);
  const [trendingTv, setTrendingTv] = useState([]);
  const [topRatedTv, setTopRatedTv] = useState([]);

  const getTrendingMovies = useCallback(async () => {
    const resp = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=e911a8842b819f4c3c726955d42d4322"
    );

    const data = await resp.json();
    // console.log(data.results);

    setTrendingMovies(data.results);
    props.getMovies(data.results);
  });

  const getTopRatedMovies = useCallback(async () => {
    const resp = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=e911a8842b819f4c3c726955d42d4322&language=en-US&page=1"
    );

    const data = await resp.json();
    // console.log(data.results);

    setTopRatedMovies(data.results);
    props.getMovies(data.results);
  });

  async function getTrendingTv() {
    const resp = await fetch(
      "https://api.themoviedb.org/3/trending/tv/day?api_key=e911a8842b819f4c3c726955d42d4322"
    );

    const data = await resp.json();
    // console.log(data.results);

    setTrendingTv(data.results);
  }

  async function getTopRatedTv() {
    const resp = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?api_key=e911a8842b819f4c3c726955d42d4322&language=en-US&page=1"
    );

    const data = await resp.json();
    // console.log(data.results);

    setTopRatedTv(data.results);
  }

  useEffect(() => {
    getTrendingMovies();
  }, []);

  useEffect(() => {
    const topRatedMovieTimer = setTimeout(() => {
      getTopRatedMovies();
    }, 1000);

    return () => clearTimeout(topRatedMovieTimer);
  }, []);

  useEffect(() => {
    const topTrendingTvTimer = setTimeout(() => {
      getTrendingTv();
    }, 2000);

    return () => clearTimeout(topTrendingTvTimer);
  }, []);

  useEffect(() => {
    const topRatedTvTimer = setTimeout(() => {
      getTopRatedTv();
    }, 3000);

    return () => clearTimeout(topRatedTvTimer);
  }, []);

  return (
    <div className={classes["movies-container"]}>
      <TrendingMovies movieData={trendingMovies} />
      {topRatedMovie.length > 0 && <TopRatedMovies movieData={topRatedMovie} />}
      {trendingTv.length > 0 && <TrendingTv tvData={trendingTv} />}
      {topRatedTv.length > 0 && <TopRatedTv tvData={topRatedTv} />}
    </div>
  );
};

export default Movies;
