import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './SignupForm.css';

/**
 * SignUp Component
 * 
 * onSubmit => 
 * 		- calls fn(signup) from App
 * 		- redirects to /companies
 */
const SignupForm = ({ signup }) => {
	const INITIAL_STATE = { username: '', password: '', firstName: '', lastName: '', email: '' };
	const [ formData, setFormData ] = useState(INITIAL_STATE);
	const history = useHistory();
	const handleSubmit = async (e) => {
		e.preventDefault();
		const res = await signup(formData);
		if (res.success) {
			history.push('/companies');
		}
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
			<div className='SignupForm-Container container'>
				<div className='SignupForm-title text-left h2'>Sign Up</div>
				<div className='SignupForm-form'>
					<form className='' onSubmit={handleSubmit}>
						<div className='SignupForm-username form-group'>
							<label htmlFor='username' />
							<input
								type='text'
								className='form-control form-control-lg flex-grow-1'
								id='username'
								name='username'
								placeholder='Username'
								value={formData.username}
								onChange={handleChange}
							/>
						</div>
						<div className='SignupForm-password form-group'>
							<label htmlFor='password' />
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
						<div className='SignupForm-firstName form-group'>
							<label htmlFor='firstName' />
							<input
								type='text'
								className='form-control form-control-lg flex-grow-1'
								id='firstName'
								name='firstName'
								placeholder='First Name'
								value={formData.firstName}
								onChange={handleChange}
							/>
						</div>
						<div className='SignupForm-lastName form-group'>
							<label htmlFor='lastName' />
							<input
								type='text'
								className='form-control form-control-lg flex-grow-1'
								id='lastName'
								name='lastName'
								placeholder='Last Name'
								value={formData.lastName}
								onChange={handleChange}
							/>
						</div>
						<div className='SignupForm-email form-group'>
							<label htmlFor='email' />
							<input
								type='email'
								className='form-control form-control-lg flex-grow-1'
								id='email'
								name='email'
								placeholder='Email'
								value={formData.email}
								onChange={handleChange}
							/>
						</div>
						<button className='btn btn-lg btn-outline-primary m-2' type='submit'>
							Submit
						</button>
					</form>
				</div>
			</div>
		</React.Fragment>
	);
};
export default SignupForm;
