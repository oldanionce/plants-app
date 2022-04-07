import "./CollectionModal.css";

import SaveToMyPlantsForm from "../SaveToMyPlantsForm/SaveToMyPlantsForm";

import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { faTemperatureHalf } from "@fortawesome/free-solid-svg-icons";

const careLevelIcon = <FontAwesomeIcon icon={faLeaf} />;
const locationInteriorIcon = <FontAwesomeIcon icon={faHouse} />;
const locationExteriorIcon = <FontAwesomeIcon icon={faSun} />;
const irrigationIcon = <FontAwesomeIcon icon={faDroplet} />;
const soilIcon = <FontAwesomeIcon icon={faSeedling} />;
const petFriendlyIcon = <FontAwesomeIcon icon={faPaw} />;
const temperatureIcon = <FontAwesomeIcon icon={faTemperatureHalf} />;

export default function CollectionModal({
  id,
  imageUrl,
  commonName,
  interiorExterior,
  careLevel,
  petFriendly,
  addToMyPlants,
  deleteFromMyPlants,
  handleNicknameChange,
  nickname,
  // only needed for Collection
  scientificName,
  location,
  temperature,
  irrigation,
  irrigationSummer,
  irrigationWinter,
  soil,
  //only needed for myPlants
}) {
  let careLevelInfo = [];
  for (var i = 0; i < careLevel; i++) {
    careLevelInfo.push(careLevelIcon);
  }

	return (
		<>
			<div class='modalContent'>
				<div class='modalImage'>
					<img src={`/images/${imageUrl}.jpg`} alt={commonName} />
					<ul>
						<li className="modalCareLevel">
							<h4>Dificultad: </h4>
							<span className="altIcons">
								{careLevelInfo}
							</span>
							<span className="careLevelText">
								{
									{
										1: '(fácil)',
										2: '(media)',
										3: '(difícil)',
									}[careLevel]
								}
							</span>
						</li>
						<li class="modalPetFriendly">
							{petFriendly === true ? (
								<>
									<span className='altIcons' title='Apta para mascotas'>
										{petFriendlyIcon}
									</span>  
									Apta para mascotas
								</>
							) : (
								''
							)}
						</li>
					</ul>
				</div>
				<div class='modalInfo'>
					<h2>{scientificName}</h2>
					<h3>{commonName}</h3>
					<ul>
						<li class='plantLocation'>
							<div>
								{interiorExterior !== 1 ? (
									interiorExterior === 2 ? (
										<span className='altIcons' title='Exterior'>
											{locationExteriorIcon}
										</span>
									) : (
										<span
											className='altIcons double'
											title='Interior y Exterior'>
											{locationInteriorIcon}
											{locationExteriorIcon}
										</span>
									)
								) : (
									<span className='altIcons' title='Interior'>
										{locationInteriorIcon}
									</span>
								)}
							</div>
							<div>{location}</div>
						</li>
						<li class='plantIrrigation'>
							<span className='altIcons' title='Riego'>
								{irrigationIcon}
							</span>
							<div>
								<span>
									{
										{
											1: 'Una vez al mes ',
											2: 'Una vez por semana ',
											3: '2/3 veces a la semana ',
											4: 'A diario ',
										}[irrigationSummer]
									}
									en verano,
								</span>
								<span>
									{
										{
											1: 'una vez al mes ',
											2: 'una vez por semana ',
											3: '2/3 veces a la semana ',
											4: 'a diario ',
										}[irrigationWinter]
									}
									en invierno.
								</span>
								<p>{irrigation}</p>
							</div>
						</li>
						<li className='plantTemp'>
							<span className='altIcons' title='Temperatura'>
								{temperatureIcon}
							</span>
							<div>{temperature}</div>
						</li>
						{soil !== '' && (
						<li>
							<span className='altIcons' title='Sustrato'>
								{soilIcon}
							</span>
							<div>{soil}</div>
						</li>
						)}
					</ul>
				</div>
			</div>
			<SaveToMyPlantsForm
				id={id}
				handleNicknameChange={handleNicknameChange}
				nickname={nickname}
				addToMyPlants={addToMyPlants}></SaveToMyPlantsForm>
		</>
	);

}
