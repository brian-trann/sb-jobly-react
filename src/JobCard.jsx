import React from 'react';
import './JobCard.css';
// import {Link} from 'react-router-dom'
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
const JobCard = ({ job }) => {
	const { id, title, salary, equity, companyHandle, companyName } = job;

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
				</CardBody>
			</Card>
		</div>
	);
};

export default JobCard;
