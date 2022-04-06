import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RegisterForm.css';
import { useNavigate } from 'react-router-dom';
import { useAuthentication } from '../../AuthenticationContext';

import Modal from 'react-modal';
import LoginForm from '../LoginForm/LoginForm.js';

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

export default function Register() {
	const [inputEmail, setInputEmail] = useState('');
	const [inputPassword, setInputPassword] = useState('');
	const [inputPassword2, setInputPassword2] = useState('');
	const [inputName, setInputName] = useState('');

	const navigate = useNavigate();
	const { login } = useAuthentication();

	const handleInputChange = e => {
		if (e.target.name === 'email__input') {
			setInputEmail(e.target.value);
		}

		if (e.target.name === 'name__input') {
			setInputName(e.target.value);
		}
		if (e.target.name === 'password__input') {
			setInputPassword(e.target.value);
		}
		if (e.target.name === 'password__input2') {
			setInputPassword2(e.target.value);
		}
	};

	async function register(event) {
		event.preventDefault();
		const data = {
			name: inputName,
			email: inputEmail,
			password: inputPassword,
		};

		const response = await fetch(`/api/auth/register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},

			body: JSON.stringify(data),
		});

		if (response.status === 200) {
			login({ email: data.email, name: data.name });
			navigate('/myplants', { replace: true });
		}
	}

	// Modal Login, in case you click the link to log in from this component
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

	return (
		<>
		<div id="registerForm" className='container registerFormDiv'>
			<div className='container__form'>
				<form className='form'>
					<input
						name='name__input'
						type='text'
						placeholder='nombre'
						value={inputName}
						onChange={handleInputChange}
					/>
					<input
						type='email'
						name='email__input'
						placeholder='dirección email'
						value={inputEmail}
						onChange={handleInputChange}
					/>
					<input
						type='password'
						placeholder='contraseña'
						name='password__input'
						value={inputPassword}
						onChange={handleInputChange}
					/>
					<input
						type='password'
						placeholder='confirmar contraseña'
						name='password__input2'
						value={inputPassword2}
						onChange={handleInputChange}
					/>

					<button type='button' onClick={register}>
						crear cuenta
					</button>
					<p className='input__message'>
						¿Ya te has registrado? <span onClick={openModal}> Entra</span>
					</p>
				</form>
			</div>
		</div>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel='Log In'>
				<div className="clickToClose" onClick={smoothScrollandClose}></div>
				<LoginForm></LoginForm>
			</Modal>
		</>
	);
}
