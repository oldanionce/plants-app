import React from 'react';
import CollectionItem from '../CollectionItem/CollectionItem';
import './CollectionGrid.css';


export default function CollectionGrid({ plants, handleNicknameChange, nickname, addToMyPlants }) {
	return (
		/* TODO: <div className={loading ? 'loaderContainer' : 'grid'}>
          <Loader></Loader> */

		<div>
			<ul className='collectionGrid'>
				{plants.map(plant => (
					<CollectionItem
						handleNicknameChange={handleNicknameChange}
						nickname={nickname}
						key={plant._id}
						id={plant._id}
						plant={plant}
						addToMyPlants={addToMyPlants}>
					</CollectionItem>
				))}
			</ul>
		</div>
	);
}
