import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import CompanyList from './CompanyList';
import CompanyDetail from './CompanyDetail';
import JobList from './JobList';
import Profile from './Profile';
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
