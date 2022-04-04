import MyPlantsCard from '../MyPlantsCard/MyPlantsCard.js';
import './MyPlantsGrid.css';

export default function MyPlantsGrid({ plants, addToMyPlants, deleteFromMyPlants, isLoading }) {
	console.log(plants);
	return (
		<div className='grid__container'>
			{plants.length === 0 && <span>You have no plants yet</span>}
			{plants && (
				<ul className='myplants__grid'>
					{plants.map(plant => (
						<MyPlantsCard
							key={plant.plant._id}
							nickname={plant.nickname}
							addToMyPlants={addToMyPlants}
							deleteFromMyPlants={deleteFromMyPlants}
							plant={plant.plant}></MyPlantsCard>
					))}
				</ul>
			)}
		</div>
	);
}
