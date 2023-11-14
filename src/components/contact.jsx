import React, { useEffect, useRef, useState } from 'react';
import HeroSection from '../utils/heroSection';
import SubHeader from '../utils/subHeader';
import { Alert, Box, Button, Stack } from '@mui/material';
import ContactComponent from '../utils/contactComponent';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	align-items: center;
	width: 100%;
	& input,
	& textarea {
		width: 100%;
	}
`;

const inputsStyles = `
background-color: transparent;
	padding: 0.5rem 1rem;
	border: 1px solid white;
	border-radius: 10px;
	outline: none;
	color: white;
    &::placeholder {
		color: rgba(198, 198, 198, 0.84);
	}
`;
const StyledInput = styled.input`
	${inputsStyles}
`;

const StyledTextarea = styled.textarea`
	${inputsStyles}
	height: 200px;
	resize: none;
`;

const StyledButton = styled(Button)`
	&&:hover {
		background-color: var(--yellow);
		filter: brightness(10px);
	}
`;

const StyledAlert = styled(Alert)`
	position: fixed;
	left: 30px;
	bottom: 30px;
	z-index: 4;
`;

const Contact = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [sent, setSent] = useState(false);
	const [failed, setfailed] = useState(false);
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		setTimeout(() => {
			setSent(false);
			setfailed(false);
		}, 3000);
	}, [sent, failed]);

	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				process.env.REACT_APP_SERVICE_ID,
				process.env.REACT_APP_TEMPLATE_ID,
				form.current,
				process.env.REACT_APP_PUBLIC_KEY
			)
			.then(
				(result) => {
					console.log(result.text);
					setName('');
					setEmail('');
					setMessage('');
					setSent(true);
				},
				(error) => {
					console.log(error.text);
					setfailed(true);
				}
			);
	};
	return (
		<div>
			{sent && (
				<StyledAlert
					severity="success"
					sx={{ fontSize: '1.2rem', gap: '1rem', alignItems: 'center' }}>
					تم ارسال الرسالة بنجاح
				</StyledAlert>
			)}
			{failed && (
				<StyledAlert
					severity="error"
					sx={{ fontSize: '1.2rem', gap: '1rem', alignItems: 'center' }}>
					حدث خطا، برجاء المحاولة مرة اخرى!
				</StyledAlert>
			)}
			<HeroSection image="charlesdeluvio-AT5vuPoi8vc-unsplash" />
			<Stack
				justifyContent="center"
				padding="3rem 0"
				direction="row">
				<Box width={{ xs: '80%', md: '60%', lg: '40%' }}>
					<SubHeader
						color="var(--dark-blue)"
						text="في مساكن الإنشاءات، نفتح أبواب التواصل لنسمع منك، لتحقيق مشروعك المثالي بأفكارك وتطلعاتك."
						weight="700"
					/>
				</Box>
			</Stack>
			<Stack
				direction={{ xs: 'column', lg: 'row' }}
				justifyContent="center"
				margin="2rem 0 5rem 0"
				padding={{ xs: '0 10%', lg: '0' }}
				gap={'3rem'}>
				<Stack
					spacing={3}
					sx={{
						backgroundColor: 'var(--light-blue)',
						color: 'white',
						padding: '3rem 2rem',
						borderRadius: '1.5rem',
					}}>
					<ContactComponent />
					<Stack>
						<StyledForm
							ref={form}
							onSubmit={sendEmail}>
							<StyledInput
								type="text"
								name="user_name"
								value={name}
								onChange={(e) => {
									setName(e.target.value);
								}}
								placeholder="الاسم"
								required
							/>

							<StyledInput
								type="email"
								name="user_email"
								value={email}
								onChange={(e) => {
									setEmail(e.target.value);
								}}
								placeholder="الايميل"
								required
							/>
							<StyledTextarea
								name="message"
								value={message}
								onChange={(e) => {
									setMessage(e.target.value);
								}}
								placeholder="الرسالة"
								required
							/>
							<StyledButton
								type="submit"
								variant="contained"
								sx={{
									borderRadius: '5px',
									backgroundColor: 'var(--yellow)',
									padding: '0.7rem 3.5rem',
									fontWeight: '700',
									color: `black`,
								}}>
								ارسل
							</StyledButton>
						</StyledForm>
					</Stack>
				</Stack>
				<Box
					width={{ xs: '100%', lg: '50%' }}
					height={{ xs: '50rem', lg: 'auto' }}>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d226.70631949500418!2d46.49409810341429!3d24.61330470910442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f2109dbbaf617%3A0x1eac546d437c27eb!2z2YXYr9mH2KfZhCDYp9io2Ygg2LnYqNiv2KfZhNmE2Yc!5e0!3m2!1sar!2seg!4v1699950475564!5m2!1sar!2seg"
						width="100%"
						height="100%"
						style={{ border: 0, borderRadius: '1.5rem' }}
						allowFullScreen=""
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"></iframe>
				</Box>
			</Stack>
		</div>
	);
};

export default Contact;
