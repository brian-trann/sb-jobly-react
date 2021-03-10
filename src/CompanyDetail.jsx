import React from 'react';
import { useParams } from 'react-router-dom';
// will need to make a request for a specific company handle/name
// use JobCard to display that company's jobs
const CompanyDetail = () => {
	const { name } = useParams();
	console.log(name);
	return (
		<React.Fragment>
			<div className=''>{name}</div>
		</React.Fragment>
	);
};
export default CompanyDetail;
