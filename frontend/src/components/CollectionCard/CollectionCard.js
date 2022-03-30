import './CollectionCard.css';
import PlantCard from '../PlantCard/PlantCard';

export default function CollectionCard({ plant, addToMyPlants, deleteFromMyPlants, isLoading }) {
	return (
		<li className='CollectionCard' key={plant._id}>
			<PlantCard
				id={plant._id}
				url={plant.image}
				commonName={plant.commonName}
				interiorExterior={plant.interiorExterior}
				careLevel={plant.careLevel}
				petFriendly={plant.petFriendly}
				addToMyPlants={addToMyPlants}
				deleteFromMyPlants={deleteFromMyPlants}
				// only needed for Collection
				scientificName={plant.scientificName}
				location={plant.location}
				temperature={plant.temperature}
				irrigation={plant.irrigation}
				irrigationSummer={plant.irrigationSummer}
				irrigationWinter={plant.irrigationWinter}
				soil={plant.soil}
				// only needed for myPlants
				nickname={plant.nickname}></PlantCard>
		</li>
	);
}

// --------------------------- IMPORTANT - idea estructura!!

// Fitxa per davant
// Title === Nickname
// image == url foto
// interiorExterior
// Carelevel
// Pet friendly

// Fitxa per darrere
//Common name,
//irrigation
// irrigationSummer
// irrigationWinter
// Botó recordatori per regar

//
//
