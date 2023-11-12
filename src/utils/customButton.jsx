import { Button } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledButton = styled(Button)`
	&&:hover {
		background-color: ${(props) => props.bgColor};
		filter: brightness(10px);
	}
`;
const CustomButton = ({ text, bgColor, to, color }) => {
	return (
		<NavLink to={to}>
			<StyledButton
				bgColor={bgColor}
				variant="contained"
				sx={{
					borderRadius: '5px',
					backgroundColor: bgColor,
					padding: '0.7rem 2.5rem',
					fontWeight: '700',
					color: `${color || 'white'}`,
				}}>
				{text}
			</StyledButton>
		</NavLink>
	);
};

export default CustomButton;
