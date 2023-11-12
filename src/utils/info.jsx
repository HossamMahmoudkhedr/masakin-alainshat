import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import Header from './header';
import styled from 'styled-components';
import CustomButton from './customButton';

const StyledImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const StyledBox = styled(Box)`
	position: relative;
	width: 388px;
	height: 381px;
	&&::before {
		content: '';
		position: absolute;
		left: -8%;
		bottom: -8%;
		width: 111%;
		height: 85%;
		z-index: -1;
		background-color: transparent;
		border: 10px solid var(--yellow);
	}
`;

const Info = ({ color, header, details, image, hasButton }) => {
	return (
		<Box padding="3rem 6rem">
			<Stack
				direction="row"
				alignItems="center"
				justifyContent="space-between"
				spacing={5}>
				<Stack
					spacing={3}
					width="50%">
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
							width: '85%',
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
				<Stack>
					<StyledBox>
						<StyledImage
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
