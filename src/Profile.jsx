import React, { useContext } from 'react';
import UserContext from './UserContext';
import './Profile.css';
const Profile = () => {
	const { currentUser } = useContext(UserContext);
	const { username, firstName, lastName, email } = currentUser;
	console.log(currentUser);
	// there is also an applications prop on currentUser
	return (
		<React.Fragment>
			<div className='Profile-container container border rounded mt-5 pb-4'>
				<div className='Profile-title h2 mt-2 mb-4 pt-4'>User Profile</div>
				<div className='Profile-profile text-left mx-4'>
					<p>Username: {username}</p>
					<p>
						Name: {firstName} {lastName}
					</p>
					<p>Email: {email}</p>
				</div>
			</div>
		</React.Fragment>
	);
};
export default Profile;
