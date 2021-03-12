import React, { useState } from 'react';

/**
 * SearchForm Component
 * 
 * onSubmit => 
 * 		- calls fn(handleSearch) from JobList or CompanyList component
 */

const SearchForm = ({ handleSearch }) => {
	const INITIAL_STATE = { search: '' };
	const [ formData, setFormData ] = useState(INITIAL_STATE);

	const handleSubmit = (e) => {
		e.preventDefault();

		handleSearch(formData);
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
			<form className='form-inline SearchForm-form' onSubmit={handleSubmit}>
				<label htmlFor='search' />
				<input
					type='text'
					className='form-control form-control-lg flex-grow-1'
					id='search'
					name='search'
					value={formData.search}
					onChange={handleChange}
				/>
				<button className='btn btn-lg btn-outline-primary m-2' type='submit'>
					Submit
				</button>
			</form>
		</React.Fragment>
	);
};
export default SearchForm;
