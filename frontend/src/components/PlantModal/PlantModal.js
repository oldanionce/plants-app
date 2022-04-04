import './PlantModal.css';

import SaveToMyPlantsForm from '../SaveToMyPlantsForm/SaveToMyPlantsForm';

import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';
import { faDroplet } from '@fortawesome/free-solid-svg-icons';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

const careLevelIcon = <FontAwesomeIcon icon={faLeaf} />;
const locationInteriorIcon = <FontAwesomeIcon icon={faHouse} />;
const locationExteriorIcon = <FontAwesomeIcon icon={faSun} />;
const irrigationIcon = <FontAwesomeIcon icon={faDroplet} />;
const soilIcon = <FontAwesomeIcon icon={faSeedling} />;
const petFriendlyIcon = <FontAwesomeIcon icon={faPaw} />;

export default function PlantModal({
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
						<li class='card__carelevel'>
							<h4>Care Level: </h4> {careLevelInfo}
						</li>
						<li>
							{petFriendly === true ? (
								<span className='altIcons' title='Pet Friendly'>
									{petFriendlyIcon}
								</span>
							) : (
								''
							)}
						</li>
					</ul>
				</div>
				<div class='modalInfo'>
					<h2>{scientificName}</h2>
					<h3>{commonName}</h3>
					{/* <p>{_id}</p> */}
					<ul>
						<li class='plantLocation'>
							<p>
								{interiorExterior !== 1 ? (
									interiorExterior === 2 ? (
										<span className='altIcons' title='Exterior'>
											{locationExteriorIcon}
										</span>
									) : (
										<span className='altIcons' title='Interior &amp; Exterior'>
											{locationInteriorIcon}
											{locationExteriorIcon}
										</span>
									)
								) : (
									<span className='altIcons' title='Interior'>
										{locationInteriorIcon}
									</span>
								)}
								{location}
							</p>
						</li>
						<li class='plantIrrigation'>
							<span className='altIcons' title='Irrigation'>
								{irrigationIcon}
							</span>
							<span>
								{
									{
										1: 'Once a month',
										2: 'Once a week',
										3: '2/3 times a week',
										4: 'Every day',
									}[irrigationSummer]
								}{' '}
								in Summer,{' '}
							</span>
							<span>
								{
									{
										1: 'once a month',
										2: 'once a week',
										3: '2/3 times a week',
										4: 'every day',
									}[irrigationWinter]
								}{' '}
								in Winter.
							</span>
							<p>{irrigation}</p>
						</li>
						<li>
							<span className='altIcons' title='Soil'>
								{soilIcon}
							</span>
							{soil}
						</li>
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
