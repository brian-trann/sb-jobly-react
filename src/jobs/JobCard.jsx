import React, { useState, useEffect, useContext } from 'react';
import UserContext from '../common/UserContext';
import './JobCard.css';

import { Card, CardText, CardBody, CardTitle } from 'reactstrap';

/**
 * JobCard Component
 * 
 * Renders a JobCard.
 * Users have option to apply to the job
 */
const JobCard = ({ job }) => {
	const { title, salary, equity, companyName, id } = job;
	const [ applied, setApplied ] = useState();
	const { hasAppliedToJob, applyToJob } = useContext(UserContext);

	useEffect(
		() => {
			setApplied(hasAppliedToJob(id));
		},
		[ id, hasAppliedToJob ]
	);

	const handleApply = async (e) => {
		if (hasAppliedToJob(id)) return;
		const applied = applyToJob(id);
		if (!!applied) {
			setApplied(true);
		}
	};
	const formattedTitle = title
		.split(' ')
		.map((word) => word[0].toUpperCase() + word.slice(1))
		.join(' ');

	return (
		<div className='JobCard-container mx-auto  '>
			<Card className='JobCard-card '>
				<CardBody>
					<CardTitle tag='h6'>
						{formattedTitle} <i>{!!companyName ? `- ${companyName}` : null}</i>
					</CardTitle>
					<CardText>
						{salary ? `Salary: $${salary.toLocaleString()}` : <i>No salary</i>}
					</CardText>
					<CardText>
						{!!parseFloat(equity) ? `Equity: ${equity}` : <i>No equity</i>}
					</CardText>
					<button
						className='btn btn-sm btn-outline-info float-right'
						onClick={handleApply}
						disabled={applied}
					>
						{applied ? 'Applied' : 'Apply'}
					</button>
				</CardBody>
			</Card>
		</div>
	);
};

export default JobCard;
