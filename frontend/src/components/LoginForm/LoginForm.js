import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthentication } from '../../AuthenticationContext';
import './LoginForm.css';

export default function LoginForm() {
	// State
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	// Hooks
	const { login } = useAuthentication();
	const navigate = useNavigate();
	// const location = useLocation();
	// const from = location.state?.from?.pathname || '/';

	// Input Handlers
	const handleInputChange = e => {
		if (e.target.name === 'email__input') {
			setEmail(e.target.value);
		}

		if (e.target.name === 'password__input') {
			setPassword(e.target.value);
		}
	};

	// Click Handler
	async function handleLoginClick(event) {
		event.preventDefault();

		const data = {
			email: email,
			password: password,
		};

		const response = await fetch(`/api/auth/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},

			body: JSON.stringify(data),
		});

		if (response.status === 200) {
			login({ email: data.email });
			navigate('/collection', { replace: true });
		}
	}

	return (
		<div className='container loginForm'>
			<div className='container__form'>
				<form className='form'>
					<input
						type='email'
						placeholder='email'
						className='email__input'
						name='email__input'
						value={email}
						onChange={handleInputChange}
					/>
					<input
						type='password'
						placeholder='password'
						name='password__input'
						className='password__input'
						value={password}
						onChange={handleInputChange}
					/>

					<button onClick={handleLoginClick}>accede</button>
					<p className='input__message'>
						¿No te has registrado? <span>Únete</span>
					</p>
				</form>
			</div>
		</div>
	);
}
