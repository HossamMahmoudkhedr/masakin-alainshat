import { Stack } from '@mui/material';
import React from 'react';
import Header from './header';
import SubHeader from './subHeader';

const Heading = ({ headerText, subText }) => {
	return (
		<Stack
			alignItems="center"
			margin="2rem 0">
			<Header text={headerText} />
			<SubHeader text={subText} />
		</Stack>
	);
};

export default Heading;
