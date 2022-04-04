import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CollectionGrid from '../components/CollectionGrid/CollectionGrid';
import Pagination from '../components/Pagination/Pagination';
import Navigation from '../components/Navigation/Navigation.js';
import Search from '../components/Search/Search.js';
import Filter from '../components/Filter/Filter.js';
import Footer from '../components/Footer/Footer';
import { useAuthentication } from '../AuthenticationContext';

export default function Collection() {
	const navigate = useNavigate();
	const { authData } = useAuthentication();

	const [plants, setPlants] = useState([]);
	const [filterPlants, setFilterPlants] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [plantsPerPage] = useState(10);
	const [input, setInput] = useState('');
	const [isLoading, setLoading] = useState(true);
	const [orderedAZ, setorderedAZ] = useState(true);

	// DATA: Fetching the Plants Collection
	function fetchPlants() {
		// setLoading(true);
		fetch('/api/collection')
			.then(response => response.json())
			.then(data => {
				setPlants(data.plants);
				setFilterPlants(data.plants);
				setLoading(false);
			});
	}

	useEffect(() => {
		fetchPlants();
	}, []);

	// PAGINATION: get current page of plants list
	const indexOfLastPlant = currentPage * plantsPerPage;
	const indexOfFirstPlant = indexOfLastPlant - plantsPerPage;
	const currentPlants = filterPlants.slice(indexOfFirstPlant, indexOfLastPlant);

	// PAGINATION: change page
	const paginate = pageNumber => setCurrentPage(pageNumber);

	//Handlers
	const handleInputChange = e => {
		setInput(e.target.value);
	};

	const handleSubmitSearch = event => {
		if (event.key === 'Enter') {
			const searchedWord = input.toLowerCase().trim();
			const newPlants = [...plants];
			setFilterPlants(
				newPlants.filter(plant => plant.commonName.toLowerCase().includes(searchedWord))
			);
		}
	};

	const handleSort = () => {
		const sortedPlants = [...plants];
		if (orderedAZ) {
			setFilterPlants(
				sortedPlants.sort((a, b) => (a.scientificName > b.scientificName ? 1 : -1))
			);
			setorderedAZ(false);
		} else {
			setFilterPlants(
				sortedPlants.sort((a, b) => (a.scientificName > b.scientificName ? -1 : 1))
			);
			setorderedAZ(true);
		}
	};

	const [nickname, setNickname] = useState('');

	// Input Handlers
	const handleNicknameChange = e => {
		setNickname(e.target.value);
	};

	function addToMyPlants(id) {
		console.log(id, nickname);

		if (!authData) {
			navigate('/login', { replace: true });
		}
		fetch('/api/myplants', {
			method: 'POST',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ _id: id, nickname: nickname }),
		});
	}

	return (
		<>
			<Navigation></Navigation>
			<header className='container plantsTitle'>
				<div className='content'>
					<h1>Collection</h1>
					<Search
						handleInputChange={handleInputChange}
						handleSubmitSearch={handleSubmitSearch}></Search>
					<Filter handleSort={handleSort}></Filter>
				</div>
			</header>

			<main className='container plantsGrid'>
				<div className='content'>
					<div className='gridHeader'>
						{/* HERE: div amb el component 'filters' */}
						<Pagination
							plantsPerPage={plantsPerPage}
							totalPlants={filterPlants.length}
							paginate={paginate}
							currentPage={currentPage}
						/>
					</div>
					<CollectionGrid
						handleNicknameChange={handleNicknameChange}
						nickname={nickname}
						plants={currentPlants}
						addToMyPlants={addToMyPlants}></CollectionGrid>
					<div className='gridFooter'>
						<Pagination
							plantsPerPage={plantsPerPage}
							totalPlants={filterPlants.length}
							paginate={paginate}
							currentPage={currentPage}
						/>
					</div>
				</div>
			</main>
			<Footer></Footer>
		</>
	);
}
