import { React, useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import Modal from 'react-modal';
import Logo from '../Logo/Logo.js';
import LoginForm from '../LoginForm/LoginForm.js';

import { useAuthentication } from '../../AuthenticationContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn } from '@fortawesome/free-solid-svg-icons';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';

import './Navigation.css';

const loginIcon = <FontAwesomeIcon icon={faSignIn} />
const logoutIcon = <FontAwesomeIcon icon={faSignOut} />

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		padding: 0,
		border: 'none',
		borderRadius: '10px',
		backgroundColor: 'var(--dark)',
		boxShadow: '0 3px 6px rgba(0, 0, 0, 0.10), 0 3px 6px rgba(0, 0, 0, 0.05)',
		opacity: 1,
		zIndex: 4,
	},
	overlay: {
		backgroundColor: 'var(--lightest)',
		zIndex: 3,
		opacity: 1,
	},
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

	// in case we click the "register" text link FROM WITHIN the login form,
	// this will close the login modal and scroll down to the register
	function smoothScrollandClose() {
		closeModal();
		var element = document.querySelector("#registerForm");
		element.scrollIntoView({ behavior: 'smooth', block: 'start'});
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
							<li className='nav-login'>
								<span onClick={openModal}>Acceder {loginIcon}</span>
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
								<li className='nav-logout'>
									<span onClick={handleLogoutClick}>
										Salir {logoutIcon}
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
						<div className="clickToClose" onClick={smoothScrollandClose}></div>
					<LoginForm></LoginForm>
				</Modal>
			)}
		</>
	);
}
