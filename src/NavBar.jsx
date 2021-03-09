import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'reactstrap';
import './NavBar.css';
const NavBar = () => {
	return (
		<div className='NavBar-container'>
			<Navbar className='NavBar-children'>
				<NavLink exact to='/' className='navbar-brand NavBar-brand'>
					Jobly
				</NavLink>

				<Nav>
					<NavItem className='ml-auto mr-4'>
						<NavLink exact to='/login'>
							UnAuth:Login
						</NavLink>
					</NavItem>
					<NavItem className='ml-auto mr-4'>
						<NavLink exact to='/signup'>
							UnAuth:Sign up
						</NavLink>
					</NavItem>
					<React.Fragment>
						<NavItem className='ml-auto mr-4'>
							<NavLink exact to='/companies'>
								Auth:Companies
							</NavLink>
						</NavItem>
						<NavItem className='ml-auto mr-4'>
							<NavLink exact to='/jobs'>
								Auth:Jobs
							</NavLink>
						</NavItem>
						<NavItem className='ml-auto mr-4'>
							<NavLink exact to='/profile'>
								Auth:Profile
							</NavLink>
						</NavItem>
						<NavItem className='ml-auto mr-4'>
							<NavLink exact to='/'>
								Auth:Logout
							</NavLink>
						</NavItem>
					</React.Fragment>
				</Nav>
			</Navbar>
		</div>
	);
};
export default NavBar;
