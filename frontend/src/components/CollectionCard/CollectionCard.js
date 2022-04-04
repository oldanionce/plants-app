import './CollectionCard.css';
import PlantCard from '../PlantCard/PlantCard';
import PlantModal from '../PlantModal/PlantModal';
import React from 'react';
import Modal from 'react-modal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const closeIcon = <FontAwesomeIcon icon={faXmark} />;

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		padding: 0,
		borderRadius: '10px',
		border: '1px solid var(--medium)',
	},
	overlay: {
		opacity: 1,
		backgroundColor: 'var(--light)',
	},
};

export default function CollectionCard({
	plant,
	addToMyPlants,
	deleteFromMyPlants,
	id,
	isLoading,
	handleNicknameChange,
	nickname,
}) {
	const [modalIsOpen, setIsOpen] = React.useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

	return (
		<li className='CollectionCard' key={id}>
			<PlantCard
				id={id}
				imageUrl={plant.image}
				commonName={plant.commonName}
				interiorExterior={plant.interiorExterior}
				careLevel={plant.careLevel}
				petFriendly={plant.petFriendly}
				addToMyPlants={addToMyPlants}
				deleteFromMyPlants={deleteFromMyPlants}
				// only needed for Collection
				scientificName={plant.scientificName}
				location={plant.location}
				irrigation={plant.irrigation}
				irrigationSummer={plant.irrigationSummer}
				irrigationWinter={plant.irrigationWinter}
				soil={plant.soil}
				// only needed for myPlants
				nickname={plant.nickname}></PlantCard>
			<button onClick={openModal}>Open Modal</button>
			<Modal
				isOpen={modalIsOpen}
				id={id}
				onRequestClose={closeModal}
				style={customStyles}
				addToMyPlants={addToMyPlants}
				contentLabel={plant.commonName}>
				<button className='modalCloseModal' onClick={closeModal}>
					{closeIcon}
				</button>
				<PlantModal
					handleNicknameChange={handleNicknameChange}
					nickname={nickname}
					id={id}
					imageUrl={plant.image}
					commonName={plant.commonName}
					interiorExterior={plant.interiorExterior}
					careLevel={plant.careLevel}
					petFriendly={plant.petFriendly}
					addToMyPlants={addToMyPlants}
					deleteFromMyPlants={deleteFromMyPlants}
					scientificName={plant.scientificName}
					location={plant.location}
					irrigation={plant.irrigation}
					irrigationSummer={plant.irrigationSummer}
					irrigationWinter={plant.irrigationWinter}
					soil={plant.soil}></PlantModal>
			</Modal>
		</li>
	);
}

// --------------------------- IMPORTANT - idea estructura!!

// Fitxa per davant
// Title === Nickname
// image == url foto
// interiorExterior
// Carelevel
// Pet friendly

// Fitxa per darrere
//Common name,
//irrigation
// irrigationSummer
// irrigationWinter
// Botó recordatori per regar

//
//
