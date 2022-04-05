import './MyPlantsItem.css';
import MyPlantsCard from '../MyPlantsCard/MyPlantsCard';
import { useLocation } from 'react-router-dom';

export default function MyPlantsItem({
	plant,
	nickname,
	addToMyPlants,
	deleteFromMyPlants,
	isLoading,
}) {
	// Hooks
	//	const location = useLocation();

	return (
		<li className='myPlantsCard' key={plant._id}>
			<MyPlantsCard
				id={plant._id}
				nickname={nickname}
				imageUrl={plant.image}
				addToMyPlants={addToMyPlants}
				deleteFromMyPlants={deleteFromMyPlants}
				commonName={plant.commonName}
				interiorExterior={plant.interiorExterior}
				careLevel={plant.careLevel}
				irrigation={plant.irrigation}
				irrigationSummer={plant.irrigationSummer}
				irrigationWinter={plant.irrigationWinter}
				location={plant.location}
				soil={plant.soil}
				petFriendly={plant.petFriendly}>
			</MyPlantsCard>
		</li>
	);
}
