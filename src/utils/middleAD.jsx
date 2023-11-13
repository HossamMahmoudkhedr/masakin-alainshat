import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import Header from './header';
import { motion } from 'framer-motion';

const MiddleAD = ({ header, content, image }) => {
	return (
		<Stack
			position="relative"
			direction="row"
			justifyContent="center"
			alignItems="center"
			sx={{
				backgroundImage: `url(${require(`../assets/images/${image}.jpg`)})`,
				backgroundPosition: 'left',
				backgroundSize: 'cover',
				// height: '312px',
				padding: '5rem 0',
				margin: '2rem 0',
			}}>
			<Box
				sx={{
					position: 'absolute',
					left: '0',
					top: '0',
					zIndex: '0',
					width: '100%',
					height: '100%',
					backgroundColor: 'var(--blue)',
					opacity: '0.52',
				}}></Box>
			<Stack
				component={motion.div}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 3, delay: 1, type: 'spring' }}
				viewport={{ once: true }}
				spacing={2}
				position="relative"
				alignItems="center"
				zIndex="1"
				textAlign="center">
				<Header
					color="white"
					text={header}
				/>
				<Typography
					variant="body1"
					color="white"
					width={{ xs: '95%', md: '30%' }}>
					{content}
				</Typography>
			</Stack>
		</Stack>
	);
};

export default MiddleAD;
