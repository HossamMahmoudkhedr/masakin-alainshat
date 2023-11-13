import styled from '@emotion/styled';
import { Stack } from '@mui/material';
import React from 'react';
import { icons } from './icons';

const StyledContactList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 2rem;

	& li {
		font-weight: 600;
		font-size: 1.2rem;
		margin-right: 1rem;
	}
`;

const StyledItems = styled.a`
	display: flex;
	align-items: center;
	gap: 1rem;
`;

const ContactComponent = () => {
	return (
		<Stack spacing={2}>
			<StyledContactList>
				<li>
					<StyledItems href="">{icons.phone} 0507113148 </StyledItems>
				</li>
				<li>
					<StyledItems href="">{icons.mail} info@msakenn.com</StyledItems>
				</li>
				<li>
					<StyledItems href="">{icons.whatsapp} 0545157361</StyledItems>
				</li>
				<li>
					<StyledItems href="">
						{icons.location} حي ظهرة لبن الرياض، السعودية
					</StyledItems>
				</li>
			</StyledContactList>
		</Stack>
	);
};

export default ContactComponent;
