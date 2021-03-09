import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import CompanyList from './CompanyList';
import CompanyDetail from './CompanyDetail';
import JobList from './JobList';
import Profile from './Profile';

const Routes = () => {
	return (
		<Switch>
			<Route exact path='/'>
				<Home />
			</Route>
			<Route exact path='/login'>
				<LoginForm />
			</Route>
			<Route exact path='/signup'>
				<SignupForm />
			</Route>
			<Route exact path='/companies'>
				<CompanyList />
			</Route>
			<Route exact path='/companies/:name'>
				<CompanyDetail />
			</Route>
			<Route exact path='/jobs'>
				<JobList />
			</Route>
			<Route exact path='/profile'>
				<Profile />
			</Route>
		</Switch>
	);
};
export default Routes;
