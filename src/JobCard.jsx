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
		<div className='JobCard-container'>
			<Card className='JobCard-card'>
				<CardBody>
					<CardTitle tag='h6'>
						{formattedTitle} - <i>{companyName}</i>
					</CardTitle>
					{salary ? (
						<CardText>Salary: ${salary.toLocaleString()}</CardText>
					) : (
						<i>No salary</i>
					)}
					{!!parseFloat(equity) ? (
						<CardText>Equity: {equity}</CardText>
					) : (
						<i>No equity</i>
					)}
				</CardBody>
			</Card>
		</div>
	);
};

export default JobCard;
