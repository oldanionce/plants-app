import './PlantCard.css';

export default function PlantCard({
	id,
	url,
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
	return (
		<>
			{/* TEMP - only until we figure out how to add images to the DDBB */}

			<div class='card__petfriendly'>
				<span>
					<i class='fa-solid fa-paw'></i>
				</span>
			</div>
			<div class='card__image'>
				<img
					src='https://raw.githubusercontent.com/anionce/plants-app/main/plant-images/cactus.jpg'
					alt={commonName}
				/>
			</div>
			<div class='card__info'>
				<h2>{scientificName}</h2>
				<h3>{commonName}</h3>

				<p class='card__carelevel'>
					<i class='fa-solid fa-leaf'></i>
				</p>
			</div>
		</>
	);
}
