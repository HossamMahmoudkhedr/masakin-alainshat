import { Typography } from '@mui/material';
import React from 'react';

const Header = ({ color, text }) => {
	return (
		<Typography
			variant="h2"
			sx={{
				color: color || 'var(--dark-blue)',
				fontWeight: '700',
				fontSize: '2rem',
			}}>
			{text}
		</Typography>
	);
};

export default Header;
