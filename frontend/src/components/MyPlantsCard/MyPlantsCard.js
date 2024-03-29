import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { faTemperatureHalf } from "@fortawesome/free-solid-svg-icons";
import Event from "../Event/Event";

import { useLocation } from "react-router-dom";

import "./MyPlantsCard.css";

const careLevelIcon = <FontAwesomeIcon icon={faLeaf} />;
const irrigationIcon = <FontAwesomeIcon icon={faDroplet} />;
const trashIcon = <FontAwesomeIcon icon={faTrash} />;
const soilIcon = <FontAwesomeIcon icon={faSeedling} />;
const petFriendlyIcon = <FontAwesomeIcon icon={faPaw} />;

export default function MyPlantsCard({
  id,
  imageUrl,
  commonName,
  careLevel,
  petFriendly,
  deleteFromMyPlants,
  irrigation,
  irrigationSummer,
  irrigationWinter,
  soil,
  nickname,
}) {
  let careLevelInfo = [];
  for (var i = 0; i < careLevel; i++) {
    careLevelInfo.push(careLevelIcon);
  }

  let irrigationInfoSummer = [];
  for (var i = 0; i < irrigationSummer; i++) {
    irrigationInfoSummer.push(irrigationIcon);
  }

  let irrigationInfoWinter = [];
  for (var i = 0; i < irrigationWinter; i++) {
    irrigationInfoWinter.push(irrigationIcon);
  }

  let irrigationText;

  // Hooks
  const weblocation = useLocation();

  return (
    <>
      {petFriendly === true ? <div className ='card__petfriendly'><span className="altIcons" title="Apta para mascotas">{petFriendlyIcon}</span></div> : ""}
      <div className="card__image">
        <img src={`/images/${imageUrl}.jpg`} alt={commonName} />
      </div>

      <div className="card__info">
        <h2>{nickname}</h2>
        <h3>({commonName})</h3>

        <div className="myplants-actions">
          <Event
            nickname={nickname}
            irrigation={irrigation}
            irrigationSummer={irrigationSummer}
            irrigationWinter={irrigationWinter}
          ></Event>
          <span className="deleteButton" title="Eliminar planta" onClick={() => deleteFromMyPlants(nickname)}>{trashIcon}</span>
        </div>

        {/* <ul className="myPlants_plantdetails">
					<li>
						{interiorExterior !== 1 ? (
							interiorExterior === 2 ? (
								<span className='altIcons' title='Exterior'>{locationExteriorIcon}</span>
							) : (
								<span
									className='altIcons'
									title='Interior &amp; Exterior'>
									{locationInteriorIcon}
									{locationExteriorIcon}
								</span>
							)
						) : (
							<span className='altIcons' title='Interior'>
								{locationInteriorIcon}
							</span>
						)}
					</li>
					<li className='plantIrrigation'>
						Riego en verano: <span className='altIcons' 
						title={
							{
								1: 'Una vez al mes ',
								2: 'Una vez a la semana ',
								3: '2/3 veces por semana ',
								4: 'Cada día ',
							}[irrigationSummer]
						}>
							{irrigationInfoSummer}
						</span>
					</li>
					<li className='plantIrrigation'>
						Riego en invierno: <span className='altIcons' 
						title={
							{
								1: 'Una vez al mes ',
								2: 'Una vez a la semana ',
								3: '2/3 veces por semana ',
								4: 'Cada día ',
							}[irrigationWinter]
						}>
							{irrigationInfoWinter}
						</span>
					</li>
					{soil !== '' && (
						<li>
							<span title='Sustrato'>
								{soilIcon}
								{''} {soil}
							</span>
						</li>
					)} 
				</ul> */}
      </div>
    </>
  );
}
