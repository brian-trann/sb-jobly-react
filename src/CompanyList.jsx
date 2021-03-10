import React, { useState, useEffect } from 'react';
import CompanyCard from './CompanyCard';
import SearchForm from './SearchForm';
import JoblyApi from './api';
import useToggleState from './hooks/useToggleState';
import Loading from './Loading';
import './CompanyList.css';

const CompanyList = () => {
	const [ companiesList, setCompaniesList ] = useState(null);
	const [ isLoading, setIsLoading ] = useToggleState(true);
	// the search form will need to search on the BACKEND
	useEffect(() => {
		async function getCompanies() {
			const companies = await JoblyApi.getCompanies();
			setCompaniesList(companies);
			setIsLoading((status) => !status);
		}
		getCompanies();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className='container-fluid container-md CompanyList'>
			<SearchForm />

			{isLoading ? (
				<Loading />
			) : (
				companiesList.map((company) => (
					<CompanyCard
						to={`/companies/${company.handle}`}
						key={company.handle}
						company={company}
					/>
				))
			)}
		</div>
	);
};

export default CompanyList;
/**
 * Make async call to DB. Get all companies.
 * - Save into state?
 * For each company in the list, render a card
 *  - onClick card => /companies/:name
 */
