import Logo from "../components/Logo/Logo.js";
import Navigation from "../components/Navigation/Navigation.js";
import Footer from "../components/Footer/Footer";
import Event from "../components/Event/Event.js";
import MyPlantsGrid from "../components/MyPlantsGrid/MyPlantsGrid.js";

import { useState, useEffect } from "react";

export default function MyPlants() {
  const [myPlants, setMyPlants] = useState([]);
  const [isLoading, setLoading] = useState(true);

  async function getUserMyPlants() {
    const response = await fetch("/api/users/myPlants", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
      },
    });
    const data = await response.json();
    const myPlants = data.myPlants;
    setMyPlants(myPlants);
    setLoading(false);
  }

  function deleteFromMyPlants(_id) {
    fetch(`/api/users/myPlants/${_id}`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    setLoading(false);
    getUserMyPlants();
  }

  useEffect(() => {
    getUserMyPlants();
  }, []);

  return (
    <div>
      <Navigation></Navigation>
      <MyPlantsGrid
        isLoading={isLoading}
        plants={myPlants}
        deleteFromMyPlants={deleteFromMyPlants}
      ></MyPlantsGrid>
      <Footer></Footer>
    </div>
  );
}
