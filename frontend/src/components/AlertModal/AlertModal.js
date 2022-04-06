import './AlertModal.css';

export default function AlertModal({
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
	return (
		<>
			<div class='modalContent'>
				<div class='modalAlert'>
					<h2>You already have a plant with that nickname!</h2>
				</div>
			</div>
		</>
	);
}
