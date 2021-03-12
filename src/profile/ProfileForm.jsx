import React, { useState, useContext } from 'react';
import UserContext from '../common/UserContext';
import JoblyApi from '../api';
import Loading from '../common/Loading';
import useToggleState from '../hooks/useToggleState';
// import {useHistory} from 'react-router-dom'

const ProfileForm = () => {
	const { currentUser, setCurrentUser } = useContext(UserContext);
	const [ isLoading, setIsLoading ] = useToggleState(true);
	const INITIAL_STATE = {
		firstName : currentUser.firstName,
		lastName  : currentUser.lastName,
		email     : currentUser.email,
		password  : ''
	};

	const [ formData, setFormData ] = useState(INITIAL_STATE);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const { username } = currentUser;
		setIsLoading((status) => !status);
		const updatedUser = await JoblyApi.editProfile(username, formData);
		setFormData((fData) => ({ ...fData, password: '' }));
		setCurrentUser(updatedUser);
		setIsLoading((status) => !status);
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((fData) => ({
			...fData,
			[name] : value
		}));
	};

	return (
		<React.Fragment>
			{!isLoading ? (
				<Loading />
			) : (
				<React.Fragment>
					<div className='ProfileForm-container container'>
						<div className='ProfileForm-title text-left h4 px-3 pb-4'>
							Edit profile:
						</div>
						<div className='ProfileForm-form text-left px-3'>
							<form className='' onSubmit={handleSubmit}>
								<div className='ProfileForm-firstName form-group'>
									<label htmlFor='firstName'>First Name:</label>
									<input
										type='text'
										className='form-control form-control-lg flex-grow-1'
										id='firstName'
										name='firstName'
										placeholder={formData.firstName}
										value={formData.firstName}
										onChange={handleChange}
									/>
								</div>
								<div className='ProfileForm-lastName form-group'>
									<label htmlFor='lastName'>Last Name: </label>
									<input
										type='text'
										className='form-control form-control-lg flex-grow-1'
										id='lastName'
										name='lastName'
										placeholder={formData.lastName}
										value={formData.lastName}
										onChange={handleChange}
									/>
								</div>
								<div className='ProfileForm-email form-group'>
									<label htmlFor='email'>Email: </label>
									<input
										type='email'
										className='form-control form-control-lg flex-grow-1'
										id='email'
										name='email'
										placeholder={currentUser.email}
										value={formData.email}
										onChange={handleChange}
									/>
								</div>
								<div className='ProfileForm-password form-group'>
									<label htmlFor='password'>Confirm Password:</label>
									<input
										type='password'
										className='form-control form-control-lg flex-grow-1'
										id='password'
										name='password'
										placeholder='Password'
										value={formData.password}
										onChange={handleChange}
									/>
								</div>

								<button
									className='btn btn-lg btn-outline-primary m-2'
									type='submit'
								>
									Submit
								</button>
							</form>
						</div>
					</div>
				</React.Fragment>
			)}
		</React.Fragment>
	);
};
export default ProfileForm;
