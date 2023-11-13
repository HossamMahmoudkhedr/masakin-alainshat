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
	& li:hover a {
		color: var(--yellow);
	}
`;

const StyledItems = styled.a`
	display: flex;
	align-items: center;
	gap: 1rem;
	transition: all 0.3s linear;
`;

const ContactComponent = () => {
	return (
		<Stack spacing={2}>
			<StyledContactList>
				<li>
					<StyledItems
						href="tel:+9660507113148"
						target="_blank"
						rel="noreferrer">
						{icons.phone} 0507113148{' '}
					</StyledItems>
				</li>
				<li>
					<StyledItems href="mailto:info@msakenn.com">
						{icons.mail} info@msakenn.com
					</StyledItems>
				</li>
				<li>
					<StyledItems
						href="https://wa.me/+9660545157361?"
						target="_blank"
						rel="noreferrer">
						{icons.whatsapp} 0545157361
					</StyledItems>
				</li>
				<li>
					<StyledItems
						href="https://maps.app.goo.gl/AVBFqdycFMksdcry7"
						target="_blank"
						rel="noreferrer">
						{icons.location} حي ظهرة لبن الرياض، السعودية
					</StyledItems>
				</li>
			</StyledContactList>
		</Stack>
	);
};

export default ContactComponent;
