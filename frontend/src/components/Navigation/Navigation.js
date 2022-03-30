import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import Logo from "../Logo/Logo.js";
import LoginForm from "../LoginForm/LoginForm.js";

import { useAuthentication } from '../../AuthenticationContext';

import './Navigation.css';

const customStyles = {
	content: {
	  top: '50%',
	  left: '50%',
	  right: 'auto',
	  bottom: 'auto',
	  marginRight: '-50%',
	  transform: 'translate(-50%, -50%)',
	  background: 'white',
	},
	overlay: {zIndex: 1000}
  };

export default function Navigation() {
	const navigate = useNavigate();

	const [modalIsOpen, setIsOpen] = React.useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}
	

	// For later
	const { authData, logout } = useAuthentication();

	function handleLogoutClick() {
		logout();
		navigate('/', { replace: true });
	}

	return (
		<>
		<div className="navigationDiv container">
			<nav className="content">
			<Logo></Logo>
			
			<ul>
				{!authData && (
					<li className='nav__div'>
						<span onClick={openModal}>Login</span>
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
		<Modal
			isOpen={modalIsOpen}
			onRequestClose={closeModal}
			style={customStyles}
			contentLabel="Example Modal"
		>
			<LoginForm></LoginForm>
		</Modal>
		</>
	);
}
