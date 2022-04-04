import { React, useState } from 'react';
import Modal from 'react-modal';

import PlantCard from '../PlantCard/PlantCard';
import PlantModal from '../PlantModal/PlantModal';

import './CollectionCard.css';

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
		zIndex: 3,
	},
	overlay: {
		zIndex: 2,
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
	const [modalIsOpen, setIsOpen] = useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

	return (
		<li className='collectionCard' key={plant._id} onClick={openModal}>
			<PlantCard
				id={plant._id}
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
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel={plant._id}>
				<button className='modalCloseModal' onClick={closeModal}>
					{closeIcon}
				</button>
				<PlantModal
					id={plant._id}
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
					soil={plant.soil}
					handleNicknameChange={handleNicknameChange}
					nickname={nickname}></PlantModal>
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
