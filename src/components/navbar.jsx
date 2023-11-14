import { Box, Stack } from '@mui/material';
import React, { useState } from 'react';
import { icons } from '../utils/icons';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const transitionStyles = `
    transition: all 0.2s linear;
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

	@media (max-width: 768px) {
		color: black;
		flex-direction: column;

		align-items: center;
		// width: inherit;
		// transition: inherit;
		// transition-delay: 0.3s;
		& li {
			display: none;
		}
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
	&.active svg {
		fill: var(--yellow);
	}

	&&:hover {
		${colorStyles}
		width: 100%;
		gap: 1rem;
	}
	&&:hover svg {
		fill: var(--yellow);
	}

	&&:hover::before,
	&&.active::before {
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
	@media (max-width: 768px) {
		&::before {
			background-color: black;
		}
		& svg {
			fill: black;
		}
	}
`;

const ResponsiveMenu = styled.div`
	@media (max-width: 768px) {
		position: fixed;
		display: none;
		left: 0;
		top: 0;
		background: #bbb;
		color: black;
		height: 100vh;
		width: 70%;
		// width: 0;
		flex-direction: column;
		align-items: center;
		text-align: center;
		transition: all 0.2s linear;

		&.active {
			display: flex;
			padding: 7rem 5rem;
		}

		&.active li {
			display: block;
		}
	}
`;

const ResponsiveBox = styled(Box)`
	color: white;
	@media (max-width: 768px) {
		color: black;
		position: fixed;
		bottom: 10vh;
		left: 10px;
		color: black;
		display: none;
		&.active {
			display: block;
		}
	}
`;

const StyledClose = styled.span`
	display: none;
	transition: inherit;
	transition-delay: 0.3s;
	@media (max-width: 768px) {
		display: ${(props) => (props.active ? 'block' : 'none')};
		position: absolute;
		top: 15px;
		right: 20px;
		width: 2rem;
		cursor: pointer;
	}
`;

const StyledMenu = styled.span`
	display: none;
	@media (max-width: 768px) {
		cursor: pointer;
		display: block;
		width: 1.6rem;
	}
`;

const Navbar = () => {
	const [active, setActive] = useState(false);
	const handleMenu = () => {
		setActive(!active);
	};
	return (
		<>
			<Box
				onClick={handleMenu}
				sx={{
					display: active ? 'block' : 'none',
					cursor: 'pointer',
					position: 'fixed',
					left: '0',
					top: '0',
					width: '100%',
					height: '100%',
					background: 'rgba(0,0,0,0.50)',
					zIndex: '2',
				}}></Box>
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
					<ResponsiveMenu className={active ? 'active' : ''}>
						<StyledClose
							onClick={handleMenu}
							active={active}>
							{icons.close}
						</StyledClose>
						<StyledList>
							<li>
								<NavLink
									onClick={() => {
										setActive(false);
									}}
									to="/">
									الرئيسية
								</NavLink>
							</li>
							<li>
								<NavLink
									onClick={() => {
										setActive(false);
									}}
									to="/about">
									من نحن
								</NavLink>
							</li>
							<li>
								<a
									onClick={() => {
										setActive(false);
									}}
									href="/#services">
									خدماتنا
								</a>
							</li>
							<li>
								<NavLink
									onClick={() => {
										setActive(false);
									}}
									to="/projects">
									مشاريعنا
								</NavLink>
							</li>
						</StyledList>
					</ResponsiveMenu>
					<ResponsiveBox
						width="100px"
						className={active ? 'active' : ''}>
						<StyledNavLink
							onClick={() => {
								setActive(false);
							}}
							to="/contact">
							اتصل بنا{icons.leftArrow}
						</StyledNavLink>
					</ResponsiveBox>
					<StyledMenu onClick={handleMenu}>{icons.menu}</StyledMenu>
				</Stack>
			</Box>
		</>
	);
};

export default Navbar;
