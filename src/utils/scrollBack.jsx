import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { icons } from '../utils/icons';

const StyledScrollBack = styled.span`
	background-color: #0971b7;
	color: white;
	fill: white;
	width: 40px;
	height: 40px;
	padding: 0.6rem;
	border-radius: 50%;
	position: fixed;
	bottom: 20px;
	right: 20px;
	z-index: 99;
	cursor: pointer;
`;
const ScrollBack = () => {
	const [display, setDisplay] = useState('none');
	useEffect(() => {
		window.onscroll = () => {
			if (window.scrollY > 600) {
				setDisplay('block');
			} else {
				setDisplay('none');
			}
		};
	}, []);
	const scrollBack = () => {
		window.scrollTo(0, 0);
	};
	return (
		<StyledScrollBack
			style={{ display: display }}
			onClick={scrollBack}>
			{icons.arrowTop}
		</StyledScrollBack>
	);
};

export default ScrollBack;
