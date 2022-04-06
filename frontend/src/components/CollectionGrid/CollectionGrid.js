import React from 'react';
import CollectionItem from '../CollectionItem/CollectionItem';
import './CollectionGrid.css';

export default function CollectionGrid({
	plants,
	alertModalIsOpen,
	setAlertModalOpen,
	handleNicknameChange,
	nickname,
	addToMyPlants,
}) {
	return (
		/* TODO: <div className={loading ? 'loaderContainer' : 'grid'}>
          <Loader></Loader> */

		<div>
			<ul className='collectionGrid'>
				{plants.map(plant => (
					<CollectionItem
						alertModalIsOpen={alertModalIsOpen}
						setAlertModalOpen={setAlertModalOpen}
						handleNicknameChange={handleNicknameChange}
						nickname={nickname}
						key={plant._id}
						id={plant._id}
						plant={plant}
						addToMyPlants={addToMyPlants}></CollectionItem>
				))}
			</ul>
		</div>
	);
}
