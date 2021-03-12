import React, { useState, useEffect } from 'react';
import './JobList.css';
import JobCard from './JobCard';
import SearchForm from '../common/SearchForm';
import JoblyApi from '../api';
import useToggleState from '../hooks/useToggleState';
import Loading from '../common/Loading';
import NoResult from '../common/NoResult';

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
	const handleSearch = async ({ search }) => {
		setIsLoading((status) => !status);
		const filteredJobs = await JoblyApi.getJobs(search);
		setJobList(filteredJobs);
		setIsLoading((status) => !status);
	};
	const renderJobList = (jobList) =>
		!!jobList.length ? jobList.map((job) => <JobCard job={job} key={job.id} />) : <NoResult />;
	return (
		<div className='container-fluid container-md JobList mx-auto'>
			<SearchForm handleSearch={handleSearch} />
			{isLoading ? <Loading /> : renderJobList(jobList)}
		</div>
	);
};
export default JobList;
