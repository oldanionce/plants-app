import './PlantCard.css';

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
	
	const careLevelIcons = [];
	for (let i = 0; i < careLevel; i++) {
		careLevelIcons.push(<i class="fa-solid fa-leaf"></i> );
	}

	return (
		<>
			<div class='card__petfriendly'>
				<span>
					<i class='fa-solid fa-paw'></i>
				</span>
			</div>
			<div class='card__image'>
				<img src={`/images/${imageUrl}.jpg`} alt={commonName} />
			</div>
			<div class='card__info'>
				<h2>{scientificName}</h2>
				<h3>{commonName}</h3>

				<p class='card__carelevel'>{careLevelIcons}</p>
			</div>
		</>
	);
}
