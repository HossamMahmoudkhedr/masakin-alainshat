import { Stack } from '@mui/material';
import React from 'react';
import Header from './header';
import SubHeader from './subHeader';
import { motion } from 'framer-motion';

const Heading = ({ headerText, subText }) => {
	return (
		<Stack
			component={motion.div}
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 2, delay: 0.5, type: 'spring' }}
			viewport={{ once: true }}
			alignItems="center"
			textAlign="center"
			margin="2rem 0">
			<Header text={headerText} />
			<SubHeader text={subText} />
		</Stack>
	);
};

export default Heading;
