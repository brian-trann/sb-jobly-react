import React from 'react';
import { useParams } from 'react-router-dom';
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
