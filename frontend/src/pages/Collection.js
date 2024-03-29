import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthentication } from '../AuthenticationContext';

import CollectionGrid from '../components/CollectionGrid/CollectionGrid';
import Pagination from '../components/Pagination/Pagination';
import Navigation from '../components/Navigation/Navigation.js';
import Search from '../components/Search/Search.js';
import Filter from '../components/Filter/Filter.js';
import Footer from '../components/Footer/Footer';
import Loader from '../components/Loader/Loader';
import { faLessThanEqual } from '@fortawesome/free-solid-svg-icons';

export default function Collection() {
	const navigate = useNavigate();
	const { authData } = useAuthentication();

	const [plants, setPlants] = useState([]);
	const [filterPlants, setFilterPlants] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [plantsPerPage] = useState(12);
	
	const [input, setInput] = useState('');
	const [isLoading, setLoading] = useState(true);
	const [orderedAZ, setorderedAZ] = useState(0);
	const [isPetFriendly, setIsPetFriendly] = useState(true);

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
		if (orderedAZ === 0 || orderedAZ === 2) {
			setFilterPlants(
				sortedPlants.sort((a, b) => (a.scientificName > b.scientificName ? 1 : -1))
			);
			setorderedAZ(1);
		} else {
			setFilterPlants(
				sortedPlants.sort((a, b) => (a.scientificName > b.scientificName ? -1 : 1))
			);
			setorderedAZ(2);
		}
	};

	const handleCare = e => {
		if (orderedAZ === 0) {
			const newPlants = [...plants];
			if (e.target.value === 'Dificultad:') {
				setFilterPlants(newPlants);
			} else {
				let careValue = parseInt(e.target.value);
				setFilterPlants(newPlants.filter(plant => plant.careLevel === careValue));
			}
		}

		if (orderedAZ === 1) {
			const newPlants = [...plants];
			setFilterPlants(
				newPlants.sort((a, b) => (a.scientificName > b.scientificName ? 1 : -1))
			);

			if (e.target.value === 'Dificultad:') {
				return;
			} else {
				const newPlants = [...plants];
				let careValue = parseInt(e.target.value);
				setFilterPlants(
					newPlants
						.sort((a, b) => (a.scientificName > b.scientificName ? 1 : -1))
						.filter(plant => plant.careLevel === careValue)
				);
			}
		}

		if (orderedAZ === 2) {
			const newPlants = [...plants];
			setFilterPlants(
				newPlants.sort((a, b) => (a.scientificName > b.scientificName ? -1 : 1))
			);

			if (e.target.value === 'Dificultad:') {
				return;
			} else {
				const newPlants = [...plants];

				let careValue = parseInt(e.target.value);
				setFilterPlants(
					newPlants
						.sort((a, b) => (a.scientificName > b.scientificName ? -1 : 1))
						.filter(plant => plant.careLevel === careValue)
				);
			}
		}
	};

	const [nickname, setNickname] = useState('');

	// Input Handlers
	const handleNicknameChange = e => {
		setNickname(e.target.value);
	};

	useEffect(() => {
		setAlertEmptyModalIsOpen(false);
		setAlertDuplicatedModalOpen(false);
	}, []);

	const [alertDuplicatedModalIsOpen, setAlertDuplicatedModalOpen] = useState(false);
	const [alertEmptyModalIsOpen, setAlertEmptyModalIsOpen] = useState(false);

	function addToMyPlants(id) {
		setAlertEmptyModalIsOpen(false);
		setAlertDuplicatedModalOpen(false);
		if (!authData) {
			navigate('/login', { replace: true });
		}
		if (nickname === '') return setAlertEmptyModalIsOpen(true);
		else {
			fetch('/api/myplants', {
				method: 'POST',
				credentials: 'include',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ _id: id, nickname: nickname }),
			}).then(res => {
				console.log(res);
				if (res.status === 500) setAlertDuplicatedModalOpen(true);
				else {
					navigate('/myplants', { replace: true });
				}
				setAlertEmptyModalIsOpen(false);
			});
		}
		setAlertEmptyModalIsOpen(false);
		setAlertDuplicatedModalOpen(false);
	}

	const handlePetFriendly = () => {
		const newPlants = [...plants];
		if (isPetFriendly) {
			setFilterPlants(newPlants.filter(plant => plant.petFriendly));
			setIsPetFriendly(false);
		} else {
			setFilterPlants(newPlants);
			setIsPetFriendly(true);
		}
	};

	return (
		<>
			<Navigation></Navigation>
			<header className='container collectionHeader'>
				<div className='content'>
					<h1>Catálogo</h1>
					<Search
						handleInputChange={handleInputChange}
						handleSubmitSearch={handleSubmitSearch}></Search>
				</div>
			</header>

			<main className='container collectionDiv'>
				<div className={isLoading ? 'content isLoading' : 'content'}>
					<Loader></Loader>
					<div className='gridHeader'>
						<Filter
							handleSort={handleSort}
							handlePetFriendly={handlePetFriendly}
							handleCare={handleCare}></Filter>
						<Pagination
							plantsPerPage={plantsPerPage}
							totalPlants={filterPlants.length}
							paginate={paginate}
							currentPage={currentPage}
						/>
					</div>
					<CollectionGrid
						alertDuplicatedModalIsOpen={alertDuplicatedModalIsOpen}
						handleNicknameChange={handleNicknameChange}
						alertEmptyModalIsOpen={alertEmptyModalIsOpen}
						nickname={nickname}
						plants={currentPlants}
						setNickname={setNickname}
						setAlertEmptyModalIsOpen={setAlertEmptyModalIsOpen}
						setAlertDuplicatedModalOpen={setAlertDuplicatedModalOpen}
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
