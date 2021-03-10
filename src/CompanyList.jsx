import React, { useState, useEffect } from 'react';
import CompanyCard from './CompanyCard';
import SearchForm from './SearchForm';
import JoblyApi from './api';
import useToggleState from './hooks/useToggleState';
import Loading from './Loading';
import NoResult from './NoResult';
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
