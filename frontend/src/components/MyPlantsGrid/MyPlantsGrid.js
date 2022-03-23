//import MyPlantsCard from "./MyPlants-Card";
import "./MyPlants-Grid.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDownAZ,
  faArrowUpZA,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";

import { useLocation } from "react-router-dom";

export default function MoviesGrid({
  movies,
  addToFavoriteMovies,
  deleteFromFavorites,
  isLoading,
  handleSortClickAZ,
  handleSortClickZA,
  handleSortClickRandom,
}) {
  // Hooks
  const location = useLocation();

  // Theme
  const theme = useTheme();
  const style = {
    color: theme === "white" ? "black" : "white",
  };

  // Icon
  const sortAZ = <FontAwesomeIcon icon={faArrowDownAZ} />;
  const sortZA = <FontAwesomeIcon icon={faArrowUpZA} />;
  const sortRandom = <FontAwesomeIcon icon={faShuffle} />;

  return (
    <div className="grid">
      <div className="grid__header">
        <h2 style={style} className="grid__header__title">
          {location.pathname === "/favorites" ? "My Favorites" : "All Movies"}
        </h2>
        <h4
          style={style}
          className={
            location.pathname === "/favorites"
              ? "hidden"
              : "grid__header__sort "
          }
        >
          <span
            className="grid__header__sort__button"
            onClick={handleSortClickAZ}
          >
            {sortAZ}
          </span>
          <span
            className="grid__header__sort__button"
            onClick={handleSortClickZA}
          >
            {sortZA}
          </span>
          <span
            className="grid__header__sort__button"
            onClick={handleSortClickRandom}
          >
            {sortRandom}
          </span>
        </h4>
      </div>
      {movies.length === 0 && !isLoading && (
        <span>You have no favorite movies</span>
      )}
      {movies && (
        <ul className={isLoading ? "loader" : "grid__movies"}>
          {isLoading && <i>📼</i>}
          {movies.map((movie) => (
            <MovieCard
              key={movie.title}
              addToFavoriteMovies={addToFavoriteMovies}
              deleteFromFavorites={deleteFromFavorites}
              movie={movie}
            ></MovieCard>
          ))}
        </ul>
      )}
    </div>
  );
}
