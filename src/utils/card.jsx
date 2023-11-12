import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import SubHeader from './subHeader';

//
const Card = ({ title, content, icon, contentColor }) => {
	return (
		<Box
			sx={{
				background:
					'linear-gradient(123deg, #092043 5.83%, rgba(9, 113, 183, 0.69) 94.9%)',
				boxShadow: '0 4px 8px 2px rgba(0,0,0,0.25)',
			}}
			width="100%"
			height="100%"
			borderRadius="1.2rem">
			<Stack
				padding="3rem 2rem"
				rowGap="1rem">
				<Stack
					direction="row"
					alignItems="center"
					gap="1rem">
					{icon || ''}
					<SubHeader
						text={title}
						weight="700"
						color="white"
					/>
				</Stack>
				<Typography
					variant="body1"
					sx={{
						color: contentColor,
					}}>
					{content}
				</Typography>
			</Stack>
		</Box>
	);
};

export default Card;
