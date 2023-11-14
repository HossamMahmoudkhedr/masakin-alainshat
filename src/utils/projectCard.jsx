import { Box, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const StyledBox = styled(Box)`
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	bottom: -10%;
	background-color: var(--light-blue);
	border-right: 4px solid black;
	color: white;
	width: 75%;
	height: 25%;
	display: flex;
	align-items: center;
	padding: 0 1rem;
	transition: all 0.2s linear;
`;

const HoveringBox = styled(Box)`
	cursor: pointer;
	&&:hover div {
		bottom: 0;
		left: 0;
		width: 100%;
		transform: translateX(0%);
	}
`;

const ProjectCard = ({ image, text }) => {
	return (
		// 	width: 314px;
		// height: 325px;
		<HoveringBox
			position="relative"
			width={{ xs: '314px', md: '362px' }}
			height={{ xs: '325px', md: '358px' }}>
			<img
				style={{ width: '100%', height: '100%', objectFit: 'cover' }}
				src={require(`../assets/images/${image}.jpg`)}
				alt={text}
				loading="lazy"
			/>
			<StyledBox>
				<Typography variant="body1">{text}</Typography>
			</StyledBox>
		</HoveringBox>
	);
};

export default ProjectCard;
