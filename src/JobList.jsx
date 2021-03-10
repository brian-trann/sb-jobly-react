import React, { useState, useEffect } from 'react';
import './JobList.css';
import JobCard from './JobCard';
import SearchForm from './SearchForm';
import JoblyApi from './api';
import useToggleState from './hooks/useToggleState';
import Loading from './Loading';

const JobList = () => {
	const [ jobList, setJobList ] = useState(null);
	const [ isLoading, setIsLoading ] = useToggleState(true);

	useEffect(() => {
		async function getJobs() {
			const jobs = await JoblyApi.getJobs();
			setJobList(jobs);
			setIsLoading((status) => !status);
		}
		getJobs();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<div className='container-fluid container-md JobList'>
			<SearchForm />
			{isLoading ? <Loading /> : jobList.map((job) => <JobCard job={job} key={job.id} />)}
		</div>
	);
};
export default JobList;
