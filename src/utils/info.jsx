import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import Header from './header';
import styled from 'styled-components';
import CustomButton from './customButton';
import { motion } from 'framer-motion';

const StyledImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const StyledBox = styled(Box)`
	position: relative;
	width: 388px;
	height: 381px;
	&& div {
		position: absolute;
		left: -5.5%;
		bottom: -5.7%;
		width: 111%;
		height: 85%;
		z-index: -1;
		background-color: transparent;
		border: 10px solid var(--yellow);
	}

	@media (max-width: 768px) {
		&& {
			width: 286px;
			height: 290px;
		}
	}
`;

const Info = ({ color, header, details, image, hasButton }) => {
	return (
		<Box padding={{ xs: '3rem 1rem', md: '3rem', lg: '3rem 6rem' }}>
			<Stack
				direction={{ xs: 'column', md: 'row' }}
				gap={{ xs: '2rem', md: 'unset' }}
				alignItems="center"
				justifyContent="space-between"
				spacing={5}>
				<Stack
					component={motion.div}
					initial={{ opacity: 0, x: 50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 1, delay: 0.5, type: 'spring' }}
					viewport={{ once: true }}
					spacing={3}
					width={{ xs: '100%', md: '50%' }}>
					<Header
						color="var(--dark-blue)"
						text={header}
					/>
					<Typography
						variant="body1"
						sx={{
							lineHeight: '23px',
							letterSpacing: '0.32px',
							color: { color },
							width: { xs: '100%', md: '85%' },
						}}>
						{details}
					</Typography>
					{hasButton && (
						<CustomButton
							bgColor="var(--yellow)"
							text="أعرف المزيد"
							to="/about"
							color="black"
						/>
					)}
				</Stack>
				<Stack marginLeft={{ xs: '0', md: '40px' }}>
					<StyledBox>
						<div></div>
						<StyledImage
							as={motion.img}
							initial={{ opacity: 0, y: 100 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{
								duration: 1,
								delay: 0.3,
								type: 'spring',
							}}
							viewport={{ once: true }}
							src={require(`../assets/images/${image}.jpg`)}
							alt={header}
						/>
					</StyledBox>
				</Stack>
			</Stack>
		</Box>
	);
};

export default Info;
