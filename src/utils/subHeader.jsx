import { Typography } from '@mui/material';
import React from 'react';

const SubHeader = ({ text, color, weight }) => {
	return (
		<Typography
			variant="body2"
			fontSize={{ xs: '1.2rem', md: '1.5rem' }}
			textAlign="center"
			color={color || 'var(--sub-header-color)'}
			fontWeight={weight || '400'}>
			{text}
		</Typography>
	);
};

export default SubHeader;
