import { React, useState } from 'react';
import Modal from 'react-modal';

import CollectionCard from '../CollectionCard/CollectionCard';
import CollectionModal from '../CollectionModal/CollectionModal';
import AlertDuplicatedModal from '../AlertDuplicatedModal/AlertDuplicatedModal';
import AlertEmptyModal from '../AlertEmptyModal/AlertEmptyModal';

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
		border: '1px solid var(--darkest)',
		backgroundColor: 'var(--lightest)',
		zIndex: 4,
	},
	overlay: {
		zIndex: 3,
		opacity: 1,
		// backgroundColor: 'var(--light)',
		backgroundColor: 'rgba(0, 0, 0, 0.3)',
	},
};

export default function CollectionItem({
	plant,
	addToMyPlants,
	deleteFromMyPlants,
	id,
	isLoading,
	setAlertDuplicatedModalOpen,
	setAlertEmptyModalIsOpen,
	setNickname,
	alertEmptyModalIsOpen,
	handleNicknameChange,
	nickname,
	alertDuplicatedModalIsOpen,
}) {
	const [modalIsOpen, setIsOpen] = useState(false);
	let root = document.getElementById('root');

	function openModal() {
		setNickname('');
		setIsOpen(true);
		setAlertDuplicatedModalOpen(false);
		setAlertEmptyModalIsOpen(false);
	}

	function closeModal() {
		setIsOpen(false);
		setAlertDuplicatedModalOpen(false);
		setAlertEmptyModalIsOpen(false);
	}	

	function afterOpenModal() {	
		root.style.filter = 'blur(5px)';
	}

	function afterCloseModal() {	
		root.style.filter = '';
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
				onAfterOpen={afterOpenModal}
				onAfterClose={afterCloseModal}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel={plant.scientificName}
				ariaHideApp={false}>
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
				{alertDuplicatedModalIsOpen && <AlertDuplicatedModal></AlertDuplicatedModal>}
				{alertEmptyModalIsOpen && <AlertEmptyModal></AlertEmptyModal>}
			</Modal>
		</>
	);
}
