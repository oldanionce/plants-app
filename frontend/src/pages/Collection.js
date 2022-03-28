import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CollectionGrid from "../components/CollectionGrid/CollectionGrid";
import Pagination from "../components/Pagination/Pagination";
import Logo from "../components/Logo/Logo.js";
import Navigation from "../components/Navigation/Navigation.js";
import SearchFilter from "../components/SearchFilter/SearchFilter";
import Footer from "../components/Footer/Footer";

export default function Collection() {
  const navigate = useNavigate();

  const [plants, setPlants] = useState([]);
  const [filterPlants, setFilterPlants] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [plantsPerPage] = useState(10);
  const [input, setInput] = useState("");
  const [isLoading, setLoading] = useState(true);

  // DATA: Fetching the Plants Collection
  function fetchPlants() {
    // setLoading(true);
    fetch("/api/collection")
      .then((response) => response.json())
      .then((data) => {
        setPlants(data.plants);
        setFilterPlants(data.plants);
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchPlants();
  }, []);

  console.log(plants);

  // PAGINATION: get current page of plants list
  const indexOfLastPlant = currentPage * plantsPerPage;
  const indexOfFirstPlant = indexOfLastPlant - plantsPerPage;
  const currentPlants = plants.slice(indexOfFirstPlant, indexOfLastPlant);

  // PAGINATION: change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //Handlers
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmitSearch = () => {
    const searchedWord = input.toLowerCase().trim();
    const newPlants = [...plants];
    setFilterPlants(
      newPlants.filter((plant) =>
        plant.commonName.toLowerCase().includes(searchedWord)
      )
    );
  };

  const handleSortAZ = () => {
    const sortedPlants = [...plants];
    setFilterPlants(
      sortedPlants.sort((a, b) =>
        a.scientificName > b.scientificName ? 1 : -1
      )
    );
  };
  const handleSortZA = () => {
    const sortedPlants = [...plants];
    setFilterPlants(
      sortedPlants.sort((a, b) =>
        a.scientificName > b.scientificName ? -1 : 1
      )
    );
  };

  return (
    <>
      <Logo></Logo>
      <Navigation></Navigation>
      <SearchFilter></SearchFilter>
      <main>
        <Pagination
          plantsPerPage={plantsPerPage}
          totalPlants={plants.length}
          paginate={paginate}
          currentPage={currentPage}
        />
        <CollectionGrid plants={currentPlants}></CollectionGrid>
        <Pagination
          plantsPerPage={plantsPerPage}
          totalPlants={plants.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </main>
      <Footer></Footer>
    </>
  );
}
