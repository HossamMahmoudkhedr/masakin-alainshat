import { Box, Stack } from '@mui/material';
import React from 'react';
import { icons } from '../utils/icons';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const transitionStyles = `
    transition: all 0.3s linear;
`;
const colorStyles = `
    color: var(--yellow);
`;

const StyledList = styled.ul`
	color: white;
	display: flex;
	gap: 2rem;

	& li {
		${transitionStyles}
	}

	& li:hover {
		${colorStyles}
	}
`;

const StyledNavLink = styled(NavLink)`
	&& {
		position: relative;
		width: 90%;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		${transitionStyles}
	}

	& svg {
		fill: white;
		${transitionStyles}
	}
	&&:hover {
		${colorStyles}
		width: 100%;
		gap: 1rem;
	}
	&&:hover svg {
		fill: var(--yellow);
	}

	&&:hover::before {
		background-color: var(--yellow);
	}
	&::before {
		content: '';
		position: absolute;
		right: 0;
		bottom: -5px;
		width: 92%;
		height: 2px;
		background-color: white;
	}
`;

const Navbar = () => {
	return (
		<Box
			className="navbar"
			sx={{
				position: 'absolute',
				left: '0',
				top: '0',
				width: '100%',
				zIndex: '3',
			}}>
			<Stack
				direction="row"
				sx={{
					background: 'transparent',
					padding: '1rem 3rem',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}>
				<Box>
					<NavLink to="/">{icons.Logo}</NavLink>
				</Box>
				<StyledList>
					<li>
						<NavLink to="/">الرئيسية</NavLink>
					</li>
					<li>
						<NavLink to="/about">من نحن</NavLink>
					</li>
					<li>
						<a href="#">خدماتنا</a>
					</li>
					<li>
						<NavLink to="/projects">مشاريعنا</NavLink>
					</li>
				</StyledList>
				<Box
					color="white"
					width="100px">
					<StyledNavLink to="/contact">اتصل بنا{icons.leftArrow}</StyledNavLink>
				</Box>
			</Stack>
		</Box>
	);
};

export default Navbar;
