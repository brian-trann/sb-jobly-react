import React from 'react';
import './CompanyCard.css';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
const CompanyCard = ({ company }) => {
	const { name, description, numEmployees, handle } = company;

	return (
		<div className='CompanyCard-container'>
			<Card>
				<Link to={`/companies/${handle}`}>
					<CardBody>
						<CardTitle tag='h5'>{name}</CardTitle>
						<CardText className='text-muted'>{description}</CardText>
						<CardText className='text-muted'>
							<i>
								<small>{numEmployees} employees</small>
							</i>
						</CardText>
					</CardBody>
				</Link>
			</Card>
		</div>
	);
};
export default CompanyCard;
