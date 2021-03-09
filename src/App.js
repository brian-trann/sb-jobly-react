import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';
import Routes from './Routes';
import './App.css';

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<NavBar />
				<Routes />
			</div>
		</BrowserRouter>
	);
}

export default App;
