import React, { useContext, useEffect, useState } from 'react';

export const AuthenticationContext = React.createContext();

const AuthenticationProvider = ({ children }) => {
	const [authData, setAuthData] = useState(null);

	async function getLoggedUser() {
		const response = await fetch(`/api/auth/getuser`, {
			method: 'GET',
			// The following also for myplants url, for authenticated urls
			credentials: 'include',
			headers: {
				Accept: 'application/json',
			},
		});

		try {
			const data = await response.json();
			login(data);
		} catch {
			return null;
		}
	}

	useEffect(() => {
		getLoggedUser();
		// eslint-disable-next-line
	}, []);

	const login = data => {
		setAuthData({ data });
	};

	const logout = () => {
		setAuthData('');
	};

	const value = {
		authData,
		login,
		logout,
	};

	return (
		<AuthenticationContext.Provider value={value}>{children}</AuthenticationContext.Provider>
	);
};

export const useAuthentication = () => {
	return useContext(AuthenticationContext);
};

export default AuthenticationProvider;
