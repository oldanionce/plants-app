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
		background: 'white',
	},
	overlay: { zIndex: 1000 },
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

	return (
		<>
			<div class="container introDiv">
				<div className='intro content'>
					<div class="logo">
						<img src={LandingLogo} alt="logo Plantagotchi"></img>
					</div>
					<div className="introText">
						<h1>Plantagotchi</h1>
						<h2>¡Larga vida a tus plantas!</h2>
						
							{!authData && (
							<div className='register-button'>
								<NavLink to='/register'>
									<button>Regístrate</button>
								</NavLink>
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
					contentLabel='Log In'>
					<LoginForm></LoginForm>
				</Modal>
			)}
		</>
		
	);
}
