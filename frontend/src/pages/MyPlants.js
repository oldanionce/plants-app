import Logo from '../components/Logo/Logo.js';
import Navigation from '../components/Navigation/Navigation.js';
import Footer from '../components/Footer/Footer';
import Event from '../components/Event/Event.js';
import MyPlantsGrid from '../components/MyPlantsGrid/MyPlantsGrid.js';

import { useState, useEffect } from 'react';

export default function MyPlants() {
	const [myPlants, setMyPlants] = useState([]);
	const [isLoading, setLoading] = useState(true);

	async function getUserMyPlants() {
		const response = await fetch('/api/myplants', {
			method: 'GET',
			credentials: 'include',
			headers: {
				Accept: 'application/json',
			},
		});
		const data = await response.json();

		const dataplants = data.myplants;
		setMyPlants(dataplants);
		setLoading(false);
	}

	function deleteFromMyPlants(nickname) {
		fetch(`/api/myplants/${nickname}`, {
			method: 'DELETE',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
			},
		});
		setLoading(false);
		getUserMyPlants();
	}

	useEffect(() => {
		getUserMyPlants();
	}, []);

	return (
		<>
			<Navigation></Navigation>
			<header className='container myPlantsHeader'>
				<div className='content'>
					<h1>Mis Plantas</h1>
				</div>
			</header>

			<main className='container myPlantsDiv'>
				<div className='content'>
					<MyPlantsGrid
						deleteFromMyPlants={deleteFromMyPlants}
						plants={myPlants}></MyPlantsGrid>
				</div>
			</main>
			<Footer></Footer>
		</>
	);
}
