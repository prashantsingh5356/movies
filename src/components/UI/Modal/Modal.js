import classes from "./Modal.module.css";
import React, { useContext, useState, useEffect } from "react";
import WatchMovieContext from "../../context/watch-movie/WatchMovieContext";

const Modal = () => {
  const [cast, setCast] = useState([]);
  const [videoKey, setVideoKey] = useState("");
  const movCtx = useContext(WatchMovieContext);
  //   console.log(movCtx.movie);
  const backgroundImg = `https://image.tmdb.org/t/p/original${movCtx.movie.backImg}`;
  const posterImg = `https://image.tmdb.org/t/p/original${movCtx.movie.posterImg}`;
  const id = movCtx.movie.id;
  //   console.log(id);

  let cast1;
  let cast2;
  let cast3;
  let cast4;

  async function getCastDetails(id) {
    const resp = await fetch(
      ` https://api.themoviedb.org/3/movie/${id}/credits?api_key=e911a8842b819f4c3c726955d42d4322&language=en-US`
    );
    const data = await resp.json();
    // console.log(data.cast);

    const castData = data.cast.filter((cast, i) => {
      if (i < 4) {
        return cast;
      }
    });
    setCast(castData);
    // console.log(castData);
  }

  useEffect(() => {
    getCastDetails(id);
  }, [id]);

  async function getMovieVideos(id) {
    const resp = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=e911a8842b819f4c3c726955d42d4322&language=en-US`
    );

    const data = await resp.json();
    // console.log(data.results[0]);
    setVideoKey(data.results[0].key);
  }
  //   console.log(videoKey);

  useEffect(() => {
    getMovieVideos(id);
  }, [id]);

  return (
    <>
      <div className={classes["modal-backdrop"]}>
        <div
          className={classes["modal-backdrop__half"]}
          style={{ backgroundImage: `url(${backgroundImg})` }}
        >
          <div className={classes["modal-backdrop__description"]}>
            <div
              className={classes["modal-description__img"]}
              style={{ backgroundImage: `url(${posterImg})` }}
            ></div>
            <div className={classes["modal-description__text"]}>
              <h1>{movCtx.movie.title}</h1>
              <p>{movCtx.movie.description}</p>
              <div className={classes["modal-description__castList"]}>
                {cast.length > 0 && (
                  <div
                    className={classes["person-1"]}
                    style={{ backgroundImage: `url(${cast1})` }}
                  ></div>
                )}
                {cast.length > 0 && (
                  <div
                    className={classes["person-2"]}
                    style={{ backgroundImage: `url(${cast2})` }}
                  ></div>
                )}
                {cast.length > 0 && (
                  <div
                    className={classes["person-3"]}
                    style={{ backgroundImage: `url(${cast3})` }}
                  ></div>
                )}
                {cast.length > 0 && (
                  <div
                    className={classes["person-4"]}
                    style={{ backgroundImage: `url(${cast4})` }}
                  ></div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={classes.trailer}>
          <iframe
            src={`https://www.youtube.com/embed/${videoKey}`}
            height="600px"
            width="100%"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
            frameBorder="0"
          />
        </div>
      </div>
    </>
  );
};

export default Modal;
