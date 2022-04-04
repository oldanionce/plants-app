import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownAZ } from "@fortawesome/free-solid-svg-icons";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

import "./Filter.css";

const sortIcon = <FontAwesomeIcon icon={faArrowDownAZ} />;
const petFriendlyIcon = <FontAwesomeIcon icon={faPaw} />;

export default function Filter({ handleSort, handlePetFriendly }) {
  return (
    <div class="filters">
      {/* Care Level selector */}
      <select name="carelevel" className="carelevel">
        <option value="0">Dificultad:</option>
        <option value="1">Fácil</option>
        <option value="2">Medio</option>
        <option value="3">Difícil</option>
      </select>

      {/* Pet Friendly Plants Only */}
      <button className="petfriendly-button" onClick={handlePetFriendly}>
        {petFriendlyIcon}
      </button>

      {/* Alphabetical Order */}
      <button className="order-button" onClick={handleSort}>
        {sortIcon}
      </button>
    </div>
  );
}
