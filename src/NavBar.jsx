import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'reactstrap';
import UserContext from './UserContext';
import './NavBar.css';

const NavBar = ({ logout }) => {
	const { currentUser } = useContext(UserContext);

	const renderAuthUser = () => {
		const { username, firstName } = currentUser;
		return (
			<React.Fragment>
				<NavItem className='ml-auto mr-4'>
					<NavLink exact to='/companies'>
						Companies
					</NavLink>
				</NavItem>
				<NavItem className='ml-auto mr-4'>
					<NavLink exact to='/jobs'>
						Jobs
					</NavLink>
				</NavItem>
				<NavItem className='ml-auto mr-4'>
					<NavLink exact to='/profile'>
						Profile
					</NavLink>
				</NavItem>
				<NavItem className='ml-auto mr-4'>
					<NavLink exact to='/' onClick={logout}>
						Logout {username || firstName}
					</NavLink>
				</NavItem>
			</React.Fragment>
		);
	};

	const renderUnAuthUser = () => (
		<React.Fragment>
			<NavItem className='ml-auto mr-4'>
				<NavLink exact to='/login'>
					Login
				</NavLink>
			</NavItem>
			<NavItem className='ml-auto mr-4'>
				<NavLink exact to='/signup'>
					Sign up
				</NavLink>
			</NavItem>
		</React.Fragment>
	);

	return (
		<div className='NavBar-container'>
			<Navbar className='NavBar-children'>
				<NavLink exact to='/' className='navbar-brand NavBar-brand'>
					Jobly
				</NavLink>

				<Nav>{currentUser ? renderAuthUser() : renderUnAuthUser()}</Nav>
			</Navbar>
		</div>
	);
};
export default NavBar;
