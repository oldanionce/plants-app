import './Intro.css';
import LandingLogo from '../../logo.svg';
import { React, useState } from 'react';
import Modal from 'react-modal';
import LoginForm from '../LoginForm/LoginForm.js';

import { NavLink } from 'react-router-dom';
import { useAuthentication } from '../../AuthenticationContext';

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

export default function Intro() {
	const { authData } = useAuthentication();

	const [modalIsOpen, setIsOpen] = useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

	// smooth scrolling from the register button to the register form at the bottom of the page
	function smoothScroll() {
		var element = document.querySelector("#registerForm");
		element.scrollIntoView({ behavior: 'smooth', block: 'start'});
	}

	// in case we click the "register" text link FROM WITHIN the login form,
	// this will close the login modal and scroll down to the register
	function smoothScrollandClose() {
		closeModal();
		var element = document.querySelector("#registerForm");
		element.scrollIntoView({ behavior: 'smooth', block: 'start'});
	}

	return (
		<>
			<div className="container introDiv">
				<div className='intro content'>
					<div className="logo">
						<img src={LandingLogo} alt="logo Plantagotchi"></img>
					</div>
					<div className="introText">
						<h1>Plantagotchi</h1>
						<h2>¡Larga vida a tus plantas!</h2>
						
							{!authData && (
							<div className='register-button'>
								<a onClick={smoothScroll}><button>Regístrate</button></a>
								<p>O si ya tienes una cuenta, <span onClick={openModal}>accede</span></p>
							</div>
							)}
		
					</div>
				</div>
			</div>
			{!authData && (
				<Modal
					isOpen={modalIsOpen}
					onRequestClose={closeModal}
					style={customStyles}
					contentLabel='Log In'
					ariaHideApp={false}>
					<div className="clickToClose" onClick={smoothScrollandClose}></div>
					<LoginForm></LoginForm>
				</Modal>
			)}
		</>
		
	);
}
