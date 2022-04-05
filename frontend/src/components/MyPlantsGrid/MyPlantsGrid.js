import MyPlantsItem from '../MyPlantsItem/MyPlantsItem.js';
import './MyPlantsGrid.css';

export default function MyPlantsGrid({ plants, addToMyPlants, deleteFromMyPlants, isLoading }) {
	return (
		<div className='grid__container'>
			{plants.length === 0 && <span>Todavía no tienes ninguna planta en tu colección</span>}
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
