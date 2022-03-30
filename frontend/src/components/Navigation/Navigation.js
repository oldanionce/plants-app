// Default: botó log in
// When logged in: Collection, My Plants, Log Out

import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navigation.css';
import Logo from "../Logo/Logo.js";

import { useAuthentication } from '../../AuthenticationContext';

export default function Navigation() {
	const navigate = useNavigate();
	

	// For later
	const { authData, logout } = useAuthentication();

	function handleLogoutClick() {
		logout();
		navigate('/', { replace: true });
	}

	return (
		<div className="navigationDiv container">
			<nav className="content">
			<Logo></Logo>
			
			<ul>
				{!authData && (
					<li className='nav__div'>
						<NavLink to='/login'>
							<span>Login</span>
						</NavLink>
					</li>
				)}
				{authData && (
					<>
						<li className='nav__div active'>
							<NavLink to='/collection'>
								<span>Collection</span>
							</NavLink>
						</li>
						<li className='nav__div'>
							<NavLink to='/myplants'>
								<span>My Plants</span>
							</NavLink>
						</li>
						<li className='nav__div'>
							<span onClick={handleLogoutClick} className='nav__item'>
								<span>Log Out</span>
							</span>
						</li>
					</>
				)}
			</ul>
			</nav>
		</div>
	);
}
