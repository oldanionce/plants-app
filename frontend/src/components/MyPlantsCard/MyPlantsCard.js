import "./MyPlantsCard.css";
import PlantCard from "../PlantCard/PlantCard";
import { useLocation } from "react-router-dom";

export default function MyPlantsCard({
  plant,
  addToMyPlants,
  deleteFromMyPlants,
  isLoading,
}) {
  // Hooks
  //	const location = useLocation();

  return (
    <li className="myplantscard" key={plant._id}>
      <PlantCard
        id={plant._id}
        url={plant.image}
        addToMyPlants={addToMyPlants}
        deleteFromMyPlants={deleteFromMyPlants}
        commonName={plant.commonName}
        interiorExterior={plant.interiorExterior}
        careLevel={plant.careLevel}
        petFriendly={plant.petFriendly}
      ></PlantCard>
    </li>
  );
}
