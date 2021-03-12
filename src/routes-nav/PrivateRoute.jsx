import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserContext from '../common/UserContext';

/**
 * PrivateRoute component
 * 
 * - A wrapper for Route Component, that will use context to redirect to /login
 * 		or allow access to Route
 */
const PrivateRoute = ({ exact, path, children }) => {
	const { currentUser } = useContext(UserContext);

	return (
		<React.Fragment>
			{!currentUser ? (
				<Redirect to='/login' />
			) : (
				<Route exact={exact} path={path}>
					{children}
				</Route>
			)}
		</React.Fragment>
	);
};
export default PrivateRoute;
