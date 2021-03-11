import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import NavBar from './NavBar';
import Routes from './Routes';
import Loading from './Loading';
import JoblyApi from './api';
import UserContext from './UserContext';
import useLocalStorage from './hooks/useLocalStorage';
import useToggleState from './hooks/useToggleState';
import './App.css';
export const TOKEN_STORAGE_ID = 'jobly-token';

function App() {
	const [ token, setToken ] = useLocalStorage(TOKEN_STORAGE_ID);
	const [ isLoading, setIsLoading ] = useToggleState(true);
	const [ currentUser, setCurrentUser ] = useState(null);

	useEffect(
		() => {
			const loadUser = async () => {
				if (token) {
					try {
						const { username } = jwt.decode(token);
						JoblyApi.token = token;
						const user = await JoblyApi.getCurrentUser(username);

						setCurrentUser(user);
					} catch (error) {
						console.error(error);
						setCurrentUser(null);
					} finally {
						setIsLoading((status) => !status);
					}
				} else {
					setIsLoading((status) => !status);
				}
			};

			loadUser();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[ token ]
	);
	const login = async (data) => {
		try {
			const token = await JoblyApi.login(data);
			setToken(token);
			return { success: true };
		} catch (error) {
			console.error('Login Failed', error);
			setIsLoading((status) => !status);
			return { success: false, error };
		} finally {
			setIsLoading((status) => !status);
		}
	};
	const signup = async (data) => {
		try {
			const token = await JoblyApi.signup(data);
			setToken(token);
			return { success: true };
		} catch (error) {
			console.error('Signup Failed', error);
			setIsLoading((status) => !status);
			return { success: false, error };
		} finally {
			setIsLoading((status) => !status);
		}
	};

	const logout = () => {
		setCurrentUser(null);
		setToken(null);
		setIsLoading((status) => !status);
	};

	return (
		<BrowserRouter>
			<UserContext.Provider value={{ currentUser, setCurrentUser }}>
				<div className='App'>
					<NavBar logout={logout} />
					{isLoading ? <Loading /> : <Routes login={login} signup={signup} />}
				</div>
			</UserContext.Provider>
		</BrowserRouter>
	);
}

export default App;
