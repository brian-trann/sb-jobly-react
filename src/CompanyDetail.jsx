import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import JoblyApi from './api';
import useToggleState from './hooks/useToggleState';
import JobCard from './JobCard';
import { useParams } from 'react-router-dom';
import './CompanyDetail.css';
// will need to make a request for a specific company handle/name
// use JobCard to display that company's jobs
const CompanyDetail = () => {
	const [ company, setCompany ] = useState(null);
	const [ isLoading, setIsLoading ] = useToggleState(true);
	const { handle } = useParams();

	useEffect(
		() => {
			async function getCompany() {
				const company = await JoblyApi.getCompany(handle);
				setCompany(company);
				setIsLoading((status) => !status);
				console.log(company);
			}
			getCompany();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[ handle ]
	);
	const renderCompanyDetails = () => {
		const { name, description, numEmployees, jobs } = company;
		const hasJobs = !!jobs.length;

		return (
			<React.Fragment>
				<div className='CompanyDetail-container  m-4'>
					<div className='CompanyDetail-body container'>
						<div className='CompanyDetail-title h4'>{name}</div>
						<div className='CompanyDetail-description lead'>{description}</div>
						<div className='CompanyDetail-employees'>
							<i>{numEmployees} employees</i>
						</div>
					</div>
					<div className='CompanyDetail-jobs'>
						{hasJobs ? jobs.map((job) => <JobCard job={job} key={job.id} />) : null}
					</div>
				</div>
				{/* <pre style={{ textAlign: 'left' }}>{JSON.stringify(company, null, 3)} </pre> */}
			</React.Fragment>
		);
	};

	return <React.Fragment>{isLoading ? <Loading /> : renderCompanyDetails()}</React.Fragment>;
};
export default CompanyDetail;
