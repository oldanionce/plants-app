import MyPlantsCard from "../MyPlantsCard/MyPlantsCard.js";
import "./MyPlantsGrid.css";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faArrowDownAZ,
//   faArrowUpZA,
//   faShuffle,
// } from "@fortawesome/free-solid-svg-icons";

import { useLocation } from "react-router-dom";

export default function MyPlantsGrid({
  plants,
  addToMyPlants,
  deleteFromMyPlants,
  isLoading,
}) {
  // Hooks
  const location = useLocation();

  // // Icon
  // const sortAZ = <FontAwesomeIcon icon={faArrowDownAZ} />;
  // const sortZA = <FontAwesomeIcon icon={faArrowUpZA} />;
  // const sortRandom = <FontAwesomeIcon icon={faShuffle} />;

  return (
    <div className="grid">
      <div className="grid__header">
        <h2 className="grid__header__title">
          {location.pathname === "/myplants" ? "My Plants" : "All Plants"}
        </h2>
        <h4
          className={
            location.pathname === "/myplants" ? "hidden" : "grid__header__sort "
          }
        >
          {/* <span
            className="grid__header__sort__button"
            //onClick={handleSortClickAZ}
          >
           {sortAZ}
          </span>
          <span
            className="grid__header__sort__button"
            //onClick={handleSortClickZA}
          >
            {sortZA}
          </span>
          <span
            className="grid__header__sort__button"
            //onClick={handleSortClickRandom}
          >
            {sortRandom}
          </span> */}
        </h4>
      </div>
      {plants.length === 0 && !isLoading && <span>You have no plants yet</span>}
      {plants && (
        <ul className={isLoading ? "loader" : "plants"}>
          {isLoading && <i>🪴</i>}
          {plants.map((plant) => (
            <MyPlantsCard
              key={plants._id}
              addToMyPlants={addToMyPlants}
              deleteFromMyPlants={deleteFromMyPlants}
              plant={plant}
            ></MyPlantsCard>
          ))}
        </ul>
      )}
    </div>
  );
}
