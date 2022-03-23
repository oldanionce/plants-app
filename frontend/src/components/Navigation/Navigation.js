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
			<div>
				<NavLink to='/login'>
					<span className='nav__icon'>icon</span>
					<span>Login</span>
				</NavLink>
			</div>
			{/*)} 
			{authData && ( */}
			<div>
				<NavLink to='/collection'>
					<span className='nav__icon'>icon</span>
					<span>Collection</span>
				</NavLink>
			</div>
			<div>
				<NavLink to='/myplants'>
					<span className='nav__icon'>icon</span>
					<span>My Plants</span>
				</NavLink>
			</div>

			<div>
				<span onClick={handleLogoutClick} className='nav__item'>
					<span className='nav__icon'>icon</span>
					<span>Logout</span>
				</span>
			</div>
			{/* )}*/}
		</nav>
	);
}
