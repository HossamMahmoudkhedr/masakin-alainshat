import { Box, Grid } from '@mui/material';
import React from 'react';
import Heading from '../utils/heading';
import Card from '../utils/card';
import { services } from '../data/servicesData';

const Services = () => {
	return (
		<Box
			marginBottom="3rem"
			id="services">
			<Heading
				headerText="خدماتنا"
				subText="تكامل الخدمات لدينا يضمن تحقيق رؤيتك بدقة واحترافية"
			/>
			<Grid
				container
				justifyContent="center"
				padding={{ xs: '0rem 2rem', md: 'unset' }}
				gap={4}>
				{services.map((service) => (
					<Grid
						item
						lg="3"
						md="4"
						xs="12">
						<Card
							contentColor="var(--gray)"
							title={service.name}
							content={service.content}
						/>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default Services;
