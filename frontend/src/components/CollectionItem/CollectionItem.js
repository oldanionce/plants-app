import { React, useState } from 'react';
import Modal from 'react-modal';

import CollectionCard from '../CollectionCard/CollectionCard';
import CollectionModal from '../CollectionModal/CollectionModal';
import AlertModal from '../AlertModal/AlertModal';

import './CollectionItem.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const closeIcon = <FontAwesomeIcon icon={faXmark} />;
const addIcon = <FontAwesomeIcon icon={faPlus} />;

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
		zIndex: 4,
	},
	overlay: {
		zIndex: 3,
		opacity: 1,
		backgroundColor: 'var(--light)',
	},
};

export default function CollectionItem({
	plant,
	addToMyPlants,
	deleteFromMyPlants,
	id,
	isLoading,
	handleNicknameChange,
	nickname,
	alertModalIsOpen,
	setAlertModalOpen,
}) {
	const [modalIsOpen, setIsOpen] = useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

	return (
		<>
			<li className='collectionCard' key={plant._id} onClick={openModal}>
				<CollectionCard
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
					temperature={plant.temperature}
					// only needed for myPlants
					nickname={plant.nickname}></CollectionCard>
				<span className='addIcon' key={plant._id}>
					{addIcon}
				</span>
			</li>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel={plant.scientificName}>
				<button className='modalCloseModal' key={plant._id} onClick={closeModal}>
					{closeIcon}
				</button>
				<CollectionModal
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
					temperature={plant.temperature}
					soil={plant.soil}
					handleNicknameChange={handleNicknameChange}
					nickname={nickname}></CollectionModal>
				{alertModalIsOpen && (
					<AlertModal setAlertModalOpen={setAlertModalOpen}></AlertModal>
				)}
			</Modal>
		</>
	);
}
