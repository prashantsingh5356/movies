import classes from "./NavigationBar.module.css";

const NavigationBar = (props) => {
  const enableMovie = () => {
    props.movieTab();
  };

  const returnHome = () => {
    props.homeTab();
  };

  const homePage = () => {
    props.homeTab();
    console.log("Home Page");
  };
  return (
    <>
      <div className={classes["navigation-bar__container"]}>
        <div className={classes["navigation-bar"]}>
          <section
            onClick={homePage}
            className={classes["navigation-bar__title"]}
          >
            MovieHUB
          </section>
          <section className={classes["navigation-bar__links"]}>
            <button onClick={returnHome} type="button">
              Home
            </button>
            <button onClick={enableMovie} type="button">
              Movies
            </button>
            <button type="button">TV Series</button>
          </section>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
