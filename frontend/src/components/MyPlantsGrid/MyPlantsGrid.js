import { React } from 'react';
import { NavLink } from 'react-router-dom';

import MyPlantsItem from '../MyPlantsItem/MyPlantsItem.js';
import './MyPlantsGrid.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const arrowRightIcon = <FontAwesomeIcon icon={faArrowRight} />

export default function MyPlantsGrid({ plants, addToMyPlants, deleteFromMyPlants, isLoading }) {
	return (
		<div className='grid__container'>
			{plants.length === 0 && (
				<div className="noPlantsYet">
					<span>Todavía no tienes ninguna planta en tu colección</span>
					<NavLink className="startCollection" to='/collection'>
						Comenzar {arrowRightIcon}
					</NavLink>
				</div>
			)}
			{plants && (
				<ul className='myPlantsGrid'>
					{plants.map(plant => (
						<MyPlantsItem
							key={plant.plant._id}
							nickname={plant.nickname}
							addToMyPlants={addToMyPlants}
							deleteFromMyPlants={deleteFromMyPlants}
							plant={plant.plant}></MyPlantsItem>
					))}
				</ul>
			)}
		</div>
	);
}
