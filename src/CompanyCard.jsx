import React from 'react';
import './CompanyCard.css';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
const CompanyCard = ({ company }) => {
	const { name, description, numEmployees, handle } = company;
	// const handleClick = () => {
	// 	console.log('click');
	// };
	return (
		<div className='container-fluid container-md CompanyCard-container'>
			<Card>
				<CardBody>
					<CardTitle tag='h5'>{name}</CardTitle>
					<CardText className='text-muted'>{description}</CardText>
					<CardText className='text-muted'>
						<i>
							<small>{numEmployees} employees</small>
						</i>
					</CardText>
				</CardBody>
			</Card>
		</div>
	);
};
export default CompanyCard;
