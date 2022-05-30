import classes from "./App.module.css";
import MainHeader from "./components/MainHeader/MainHeader";
import NavigationBar from "./components/MainHeader/NavigationBar/NavigationBar";
import Movies from "./components/Movies/Movies";
import Footer from "./components/Footer/Footer";
import SearchMovies from "./components/SearchMovies/SearchMovies";
import WatchMovieProvider from "./components/context-provider/WatchMovieProvider";
import Modal from "./components/UI/Modal/Modal";

import { useEffect, useState } from "react";

function App() {
  const [popularData, setPopularData] = useState([]);
  const [moviesEnabled, setMoviesEnabled] = useState(false);
  const [dataSearch, setDataSearch] = useState([]);
  const [modalEnabled, setModalEnabled] = useState(false);

  const enableMovieTab = () => {
    setMoviesEnabled(true);
  };

  const homeMovieTab = () => {
    if (moviesEnabled) {
      setMoviesEnabled(false);
    }

    if (modalEnabled) {
      setModalEnabled(false);
    }
  };

  const openModal = () => {
    // console.log("clicked");
    setModalEnabled(true);
  };

  async function getPopularMovie() {
    const resp = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=e911a8842b819f4c3c726955d42d4322&language=en-US&page=1"
    );

    const moviesData = await resp.json();
    // console.log(moviesData.results);
    setPopularData(moviesData.results);
  }

  const headerList = popularData.map((mov, i) => {
    if (i <= 4) {
      return (
        <MainHeader
          key={mov.id}
          id={mov.id}
          backdrop={mov.backdrop_path}
          poster={mov.poster_path}
          title={mov.original_title}
          description={mov.overview}
          enableModal={openModal}
        />
      );
    }
  });

  useEffect(() => {
    getPopularMovie();
  }, []);

  const searchMovieData = (movies) => {
    setDataSearch((prevData) => {
      return [movies, ...prevData];
    });
  };

  // console.log(dataSearch.flat(1));

  return (
    <WatchMovieProvider>
      <NavigationBar homeTab={homeMovieTab} movieTab={enableMovieTab} />
      {modalEnabled && <Modal />}
      {moviesEnabled && <SearchMovies movieData={dataSearch.flat(1)} />}
      {!moviesEnabled && !modalEnabled && (
        <div className={classes["header-movie__list"]}>{headerList}</div>
      )}
      {!moviesEnabled && !modalEnabled && (
        <Movies modalTab={openModal} getMovies={searchMovieData} />
      )}
      <Footer />
    </WatchMovieProvider>
  );
}

export default App;
