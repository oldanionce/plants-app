import MyPlantsCard from '../MyPlantsCard/MyPlantsCard.js';
import './MyPlantsGrid.css';

export default function MyPlantsGrid({ plants, addToMyPlants, deleteFromMyPlants, isLoading }) {
	return (
		<div className='grid__container'>
			{plants.length === 0 && <span>You have no plants yet</span>}
			{plants && (
				<ul className='myplants__grid'>
					{plants.map(plant => (
						<MyPlantsCard
							key={plant._id}
							addToMyPlants={addToMyPlants}
							deleteFromMyPlants={deleteFromMyPlants}
							plant={plant}></MyPlantsCard>
					))}
				</ul>
			)}
		</div>
	);
}
