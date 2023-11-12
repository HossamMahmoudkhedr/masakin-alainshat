import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar';

const RootLayout = () => {
	return (
		<div className="App">
			<Navbar />
			<Outlet />
		</div>
	);
};

export default RootLayout;
