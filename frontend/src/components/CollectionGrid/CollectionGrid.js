import React from 'react';
import CollectionCard from '../CollectionCard/CollectionCard';
import './CollectionGrid.css';

export default function CollectionGrid({ plants, handleNicknameChange, nickname, addToMyPlants }) {
	return (
		/* <div className={loading ? 'loaderContainer' : 'grid'}>
          <Loader></Loader> */

		<div>
			<ul className='collection__grid'>
				{plants.map(plant => (
					<CollectionCard
						handleNicknameChange={handleNicknameChange}
						nickname={nickname}
						key={plant._id}
						id={plant._id}
						plant={plant}
						addToMyPlants={addToMyPlants}></CollectionCard>
				))}
			</ul>
		</div>
	);
}
