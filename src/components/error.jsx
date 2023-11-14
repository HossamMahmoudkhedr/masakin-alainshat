import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const StyledError = styled.div`
	background: linear-gradient(
		268deg,
		rgb(12, 114, 183) -12.05%,
		rgb(9, 32, 67) 82.1%
	);
	height: 90vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: white;
`;

const StyledLink = styled(Link)`
	font-weight: 600;
	border: 1px solid white;
	padding: 1rem 2rem;
	border-radius: 1rem;
	transition: all 0.2s linear;
	&:hover {
		color: black;
		background-color: var(--yellow);
	}
`;
const Error = () => {
	return (
		<StyledError>
			<h1>هذة الصفحة غير موجودة</h1>
			<StyledLink to={'/'}>اذهب للصفحة الرئيسية</StyledLink>
		</StyledError>
	);
};

export default Error;
