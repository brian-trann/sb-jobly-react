import React, { useContext } from 'react';
import UserContext from '../common/UserContext';

/**
 * Home Component
 * 
 * Uses context to generate a homepage for UnAuth or Auth user
 * 
 */
const Home = () => {
	const { currentUser } = useContext(UserContext);

	return (
		<React.Fragment>
			<div className='Home-container container'>
				<div className='Home-jumbotron jumbotron my-5'>
					<p className='h2'>Jobly</p>
					<p className='lead mt-4'>
						{!currentUser ? (
							'All the jobs in one, convenient place.'
						) : (
							`Welcome back, ${currentUser.firstName}.`
						)}{' '}
					</p>
				</div>
			</div>
		</React.Fragment>
	);
};
export default Home;
