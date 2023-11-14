import React from 'react';
import { features } from '../data/featuresData';
import { Box, Grid } from '@mui/material';
import Card from '../utils/card';
import Heading from '../utils/heading';

const Features = () => {
	return (
		<Box marginBottom="3rem">
			<Heading
				headerText="مميزانتا"
				subText="نحن نسعى دائما لتقديم الأفضل"
			/>
			<Grid
				container
				justifyContent="center"
				padding={{ xs: '0rem 2rem', md: 'unset' }}
				gap={4}>
				{features.map((feature) => (
					<Grid
						item
						lg="3"
						md="4"
						xs="12">
						<Card
							icon={feature.icon}
							contentColor="white"
							title={feature.name}
							content={feature.content}
						/>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default Features;
