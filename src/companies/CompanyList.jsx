import React, { useState, useEffect } from 'react';
import CompanyCard from './CompanyCard';
import SearchForm from '../common/SearchForm';
import JoblyApi from '../api';
import useToggleState from '../hooks/useToggleState';
import Loading from '../common/Loading';
import NoResult from '../common/NoResult';
import './CompanyList.css';

/**
 * CompanyList Component
 * 
 * Loads Companies from the API. Loading Component is rendered while there is not a response
 * 
 * CompanyList includes a SearchForm
 */

const CompanyList = () => {
	const [ companiesList, setCompaniesList ] = useState(null);
	const [ isLoading, setIsLoading ] = useToggleState(true);

	useEffect(() => {
		async function getCompanies() {
			const companies = await JoblyApi.getCompanies();
			setCompaniesList(companies);
			setIsLoading((status) => !status);
		}
		getCompanies();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	const handleSearch = async ({ search }) => {
		setIsLoading((status) => !status);
		const filteredCompanies = await JoblyApi.getCompanies(search);
		setCompaniesList(filteredCompanies);
		setIsLoading((status) => !status);
	};
	const renderCompaniesList = (companiesList) =>
		!!companiesList.length ? (
			companiesList.map((company) => (
				<CompanyCard
					to={`/companies/${company.handle}`}
					key={company.handle}
					company={company}
				/>
			))
		) : (
			<NoResult />
		);

	return (
		<div className='container-fluid container-md CompanyList mx-auto'>
			<SearchForm handleSearch={handleSearch} />
			{isLoading ? <Loading /> : renderCompaniesList(companiesList)}
		</div>
	);
};

export default CompanyList;
