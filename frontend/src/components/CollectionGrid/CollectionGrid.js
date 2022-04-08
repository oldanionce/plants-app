import React from 'react';
import CollectionItem from '../CollectionItem/CollectionItem';
import './CollectionGrid.css';

export default function CollectionGrid({
	plants,
	alertDuplicatedModalIsOpen,
	handleNicknameChange,
	nickname,
	setNickname,
	alertEmptyModalIsOpen,
	setAlertEmptyModalIsOpen,
	setAlertDuplicatedModalOpen,
	addToMyPlants,
}) {
	return (
		<div>
			<ul className='collectionGrid'>
				{plants.map(plant => (
					<CollectionItem
						alertDuplicatedModalIsOpen={alertDuplicatedModalIsOpen}
						handleNicknameChange={handleNicknameChange}
						alertEmptyModalIsOpen={alertEmptyModalIsOpen}
						nickname={nickname}
						setNickname={setNickname}
						setAlertEmptyModalIsOpen={setAlertEmptyModalIsOpen}
						setAlertDuplicatedModalOpen={setAlertDuplicatedModalOpen}
						key={plant._id}
						id={plant._id}
						plant={plant}
						addToMyPlants={addToMyPlants}></CollectionItem>
				))}
			</ul>
		</div>
	);
}
