import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../homepage/Home';
import LoginForm from '../auth/LoginForm';
import SignupForm from '../auth/SignupForm';
import CompanyList from '../companies/CompanyList';
import CompanyDetail from '../companies/CompanyDetail';
import JobList from '../jobs/JobList';
import Profile from '../profile/Profile';
import PrivateRoute from './PrivateRoute';

const Routes = ({ login, signup }) => {
	return (
		<Switch>
			<Route exact path='/'>
				<Home />
			</Route>
			<Route exact path='/login'>
				<LoginForm login={login} />
			</Route>
			<Route exact path='/signup'>
				<SignupForm signup={signup} />
			</Route>
			<PrivateRoute exact path='/companies'>
				<CompanyList />
			</PrivateRoute>
			<PrivateRoute exact path='/companies/:handle'>
				<CompanyDetail />
			</PrivateRoute>
			<PrivateRoute exact path='/jobs'>
				<JobList />
			</PrivateRoute>
			<PrivateRoute exact path='/profile'>
				<Profile />
			</PrivateRoute>
		</Switch>
	);
};
export default Routes;
