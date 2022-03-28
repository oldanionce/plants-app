import './Intro.css';
import Logo from '../Logo/Logo.js';
import { React, useRef } from 'react';

import { NavLink } from 'react-router-dom';
import { useAuthentication } from '../../AuthenticationContext';

export default function Intro() {
	const { authData } = useAuthentication();

	return (
		<div className='intro'>
			<Logo></Logo>
			<h1 className='claim'> Larga vida a las plantas</h1>
			{!authData && (
				<NavLink to='/register'>
					<button className='register-button'>Register</button>
				</NavLink>
			)}
		</div>
	);
}
