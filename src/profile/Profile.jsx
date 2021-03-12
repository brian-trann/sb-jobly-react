import React, { useContext } from 'react';
import UserContext from '../common/UserContext';
import ProfileForm from './ProfileForm';
import './Profile.css';

/**
 * Profile Component
 * 
 * Uses context from App Component
 */
const Profile = () => {
	const { currentUser: { username } } = useContext(UserContext);
	return (
		<div className='Profile-container container border rounded mt-5 pb-4'>
			<div className='Profile-title h2 mt-2 mb-4 pt-4'>{username}'s Profile</div>
			<ProfileForm />
		</div>
	);
};
export default Profile;
