import React, { useState } from 'react';
// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './LoginForm.css';
const LoginForm = () => {
	const INITIAL_STATE = { username: '', password: '' };
	const [ formData, setFormData ] = useState(INITIAL_STATE);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('formData: ', formData);
		setFormData(INITIAL_STATE);
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
			<div className='LoginForm-Container container'>
				<div className='LoginForm-title text-left h2'>Log In</div>
				<div className='LoginForm-form'>
					<form className='' onSubmit={handleSubmit}>
						<div className='LoginForm-username form-group'>
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
						<div className='LoginForm-password form-group'>
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
						<button className='btn btn-lg btn-outline-primary m-2' type='submit'>
							Submit
						</button>
					</form>
				</div>
			</div>

			<pre>{JSON.stringify(formData, null, 2)}</pre>
		</React.Fragment>
	);
};
export default LoginForm;
