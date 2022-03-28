import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RegisterForm.css';
import { useNavigate } from 'react-router-dom';
import { useAuthentication } from '../../AuthenticationContext';

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
			navigate('/', { replace: true });
		}
	}

	// Modal

	return (
		<div class='container'>
			<div class='container__form'>
				<form class='form'>
					<input
						name='name__input'
						type='text'
						placeholder='name'
						value={inputName}
						onChange={handleInputChange}
					/>
					<input
						type='email'
						name='email__input'
						placeholder='email address'
						value={inputEmail}
						onChange={handleInputChange}
					/>
					<input
						type='password'
						placeholder='password'
						name='password__input'
						value={inputPassword}
						onChange={handleInputChange}
					/>
					<input
						type='password'
						placeholder='confirm password'
						name='password__input2'
						value={inputPassword2}
						onChange={handleInputChange}
					/>

					<button type='button' onClick={register}>
						create
					</button>
					<p class='input__message'>
						Already registered? <Link to='/login'> Login</Link>
					</p>
				</form>
			</div>
		</div>
	);
}
