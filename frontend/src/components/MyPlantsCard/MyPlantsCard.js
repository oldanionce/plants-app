import "./MyPlantsCard.css";
import { useLocation } from "react-router-dom";

export default function MyPlantsCard({
  plants,
  addToMyPlants,
  deleteFromMyPlants,
  isLoading,
}) {
  // Hooks
  const location = useLocation();

  return (
    <li
      className="MyPlantsCard"
      key={
        location.pathname === `/Myplants`
          ? `myplant-${plant.title}`
          : `${plant.title}`
      }
    >
      <PlantCard
        id={plant._id}
        url={plant.image}
        addToMyPlants={addToMyPlants}
        deleteFromMyPlants={deleteFromMyPlants}
        isActive={isActive}
        commonName={plant.commonName}
        interiorExterior={plant.interiorExterior}
        careLevel={plant.careLevel}
        petFriendly={plant.petFriendly}
      ></PlantCard>
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
