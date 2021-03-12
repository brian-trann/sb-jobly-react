import React from 'react';
import './Loading.css';
import loadingLogo from './Loading.svg';
/**
 * Loading Component
 * 
 * Usage:
 * - To be used while making async calls
 * 
 * renders a loading svg.
 */
const Loading = () => {
	return (
		<div className='Loading'>
			<img src={loadingLogo} className='Loading-logo' alt='loading-logo' />
		</div>
	);
};
export default Loading;
