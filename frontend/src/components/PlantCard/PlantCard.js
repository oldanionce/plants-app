import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf } from '@fortawesome/free-solid-svg-icons'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import './PlantCard.css';

const careLevelIcon = <FontAwesomeIcon icon={faLeaf} />
const petFriendlyIcon = <FontAwesomeIcon icon={faPaw} />

export default function PlantCard({
	id,
	imageUrl,
	commonName,
	interiorExterior,
	careLevel,
	petFriendly,
	addToMyPlants,
	deleteFromMyPlants,
	// only needed for Collection
	scientificName,
	location,
	temperature,
	irrigation,
	irrigationSummer,
	irrigationWinter,
	soil,
	//only needed for myPlants
	nickname,
}) {
	
	let careLevelInfo = [];
	for (var i = 0; i < careLevel; i++) {
		careLevelInfo.push(careLevelIcon);
	}

	return (
		<>
			{petFriendly === true ? <div className ='card__petfriendly'><span className="altIcons" title="Pet Friendly">{petFriendlyIcon}</span></div> : ""}
			<div className ='card__image'>
				<img src={`/images/${imageUrl}.jpg`} alt={commonName} />
			</div>
			<div className ='card__info'>
				<h2>{scientificName}</h2>
				<h3>{commonName}</h3>
				<p class='card__carelevel'>{careLevelInfo}</p>
			</div>
		</>
	);
}
