import React from 'react';
import './Loading.css';
import loadingLogo from './Loading.svg';
const Loading = () => {
	return (
		<div className='Loading'>
			<img src={loadingLogo} className='Loading-logo' alt='loading-logo' />
		</div>
	);
};
export default Loading;
