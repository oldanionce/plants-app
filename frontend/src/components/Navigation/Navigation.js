// Default: botó log in
// When logged in: Collection, My Plants, Log Out

import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navigation.css';

// import { useAuthentication } from '../../AuthenticationContext';

export default function Navigation() {
	// const navigate = useNavigate();

	// For later
	// const { authData, logout } = useAuthentication();

	function handleLogoutClick() {
		// For later
		//  logout();
		// navigate('/', { replace: true });
	}

	return (
		<nav>
			{/* {!authData && ( */}
			<div className='nav__div'>
				<NavLink to='/login'>
					<span>Login</span>
				</NavLink>
			</div>
			{/*)} 
			{authData && ( */}
			<div className='nav__div active'>
				<NavLink to='/collection'>
					<span>Collection</span>
				</NavLink>
			</div>
			<div className='nav__div'>
				<NavLink to='/myplants'>
					<span>My Plants</span>
				</NavLink>
			</div>

			<div className='nav__div'>
				<span onClick={handleLogoutClick} className='nav__item'>
					<span>Log Out</span>
				</span>
			</div>
			{/* )}*/}
		</nav>
	);
}
