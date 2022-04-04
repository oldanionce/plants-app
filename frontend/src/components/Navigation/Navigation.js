import { React, useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import Modal from 'react-modal';
import Logo from '../Logo/Logo.js';
import LoginForm from '../LoginForm/LoginForm.js';

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
	overlay: { zIndex: 1000 },
};

export default function Navigation() {
	const navigate = useNavigate();
	const location = useLocation();

	const [modalIsOpen, setIsOpen] = useState(false);

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
			<div className={location.pathname === '/' ? 'navigationDiv navigationLanding container' : 'navigationDiv container'}>
				<nav className='content'>
					<Logo></Logo>

					<ul>
						{!authData && (
							<li className='nav-item'>
								<span onClick={openModal}>Accede</span>
							</li>
						)}
						{authData && (
							<>
								<li className='nav-item'>
									<NavLink to='/collection'>
										<span>Catálogo</span>
									</NavLink>
								</li>
								<li className='nav-item'>
									<NavLink to='/myplants'>
										<span>Mis Plantas</span>
									</NavLink>
								</li>
								<li className='nav-item'>
									<span onClick={handleLogoutClick} className='nav__item'>
										<span>Salir</span>
									</span>
								</li>
							</>
						)}
					</ul>
				</nav>
			</div>
			{!authData && (
				<Modal
					isOpen={modalIsOpen}
					onRequestClose={closeModal}
					style={customStyles}
					contentLabel='Log In'>
					<LoginForm></LoginForm>
				</Modal>
			)}
		</>
	);
}
