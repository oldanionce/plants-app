import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

import { useLocation } from 'react-router-dom';

import './CollectionCard.css';

const careLevelIcon = <FontAwesomeIcon icon={faLeaf} />;
const petFriendlyIcon = <FontAwesomeIcon icon={faPaw} />;

export default function CollectionCard({
	imageUrl,
	commonName,
	careLevel,
	petFriendly,
	scientificName,
	nickname,
}) {

	let careLevelInfo = [];
	for (var i = 0; i < careLevel; i++) {
		careLevelInfo.push(careLevelIcon);
	}

	// Hooks
	const weblocation = useLocation();

	return (
		<div className="collectionCard_inner">
			{petFriendly === true ? <div className ='card__petfriendly'><span className="altIcons" title="Apta para mascotas">{petFriendlyIcon}</span></div> : ""}
			<div className ='card__image'>
				<img src={`/images/${imageUrl}.jpg`} alt={commonName} />
			</div>

			<div className='card__info'>
				{weblocation.pathname !== '/myplants' && <h2>{scientificName}</h2>}
				<h3>{commonName}</h3>
				<h3>{nickname}</h3>
				<p className='card__carelevel'>{careLevelInfo}</p>
			</div>
		</div>
	);
}
