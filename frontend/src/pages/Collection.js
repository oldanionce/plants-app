import React, { useState, useEffect } from 'react';
import CollectionGrid from '../components/CollectionGrid/CollectionGrid';
import Pagination from '../components/Pagination/Pagination';
import Logo from "../components/Logo/Logo.js";
import Navigation from "../components/Navigation/Navigation.js";
import Footer from "../components/Footer/Footer";

export default function Collection() {
  const [plants, setPlants] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [plantsPerPage] = useState(10);
  // const [isLoading, setLoading] = useState(true);
  
    // DATA: Fetching the Plants Collection
    function fetchPlants() {
      // setLoading(true);
      fetch('/api/collection')
          .then(response => response.json())
          .then(data => {
              setPlants(data.plants);
              // setLoading(false);
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
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
      <>
	  <Logo></Logo>
	  <Navigation></Navigation>
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
