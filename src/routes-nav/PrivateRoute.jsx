import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserContext from '../common/UserContext';

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
