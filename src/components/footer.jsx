import { Box, Grid, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import ContactComponent from '../utils/contactComponent';
import { icons } from '../utils/icons';
import { motion } from 'framer-motion';
const ListStyle = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	align-items: center;

	& li {
		font-weight: 600;
		font-size: 1.2rem;
	}
`;

const Footer = () => {
	const [year, setYear] = useState();
	useEffect(() => {
		let date = new Date();
		setYear(date.getFullYear());
	}, []);
	return (
		<>
			<Box
				sx={{
					background: 'linear-gradient(268deg, #0C72B7 -12.05%, #092043 82.1%)',
					padding: '2rem 3rem',
					color: 'white',
				}}>
				<Grid
					width="100%"
					alignItems="center"
					justifyContent={{ xs: 'center', md: 'center' }}
					container
					spacing={6}>
					<Grid
						item
						paddingLeft={{ xs: '0px !important', md: '40px' }}
						display="flex"
						justifyContent="center"
						lg={3}
						md={4}
						xs={12}>
						{/* <img
						src={require(`../assets/images/لوجو-المؤسسة-1 5.png`)}
						alt=""
					/> */}
						{icons.footerLogo}
					</Grid>
					<Grid
						item
						paddingLeft={{ xs: '0px !important', md: '40px' }}
						lg={3}
						md={4}
						xs={12}>
						<Stack
							spacing={2}
							alignItems="center">
							<Typography
								variant="h4"
								fontSize="2rem"
								fontWeight={700}>
								روابط تهمك
							</Typography>
							<ListStyle>
								<li>
									<NavLink to="/">الرئيسية</NavLink>
								</li>
								<li>
									<NavLink to="/about">من نحن</NavLink>
								</li>
								<li>
									<a href="/#services">خدماتنا</a>
								</li>
								<li>
									<NavLink to="/projects">مشاريعنا</NavLink>
								</li>
							</ListStyle>
						</Stack>
					</Grid>
					<Grid
						item
						paddingLeft={{ xs: '0px !important', md: '40px' }}
						lg={3}
						md={4}
						xs={12}>
						<Stack
							spacing={2}
							textAlign={{ xs: 'center', md: 'unset' }}>
							<Typography
								variant="h4"
								fontSize="2rem"
								fontWeight={700}>
								عن الشركة
							</Typography>
							<Typography
								variant="body1"
								fontSize="1.1rem"
								lineHeight={{ xs: '1.5', md: '1.4', lg: '1.5', xl: '1.64' }}
								height={{ xs: '50%', md: '65%' }}
								width={{ xs: 'unset', lg: '90%;' }}>
								في مؤسسة مساكن الإنشاءات، نجسد رؤية ملهمة تمزج بين الإبداع
								والتميز في مجال المقاولات. نحن ليس فقط متخصصون في إنشاء وتنفيذ
								مشاريع متنوعة، بل نقدم خدمات شاملة تشمل التشطيب والعوازل وتوريد
								المواد والتصميم الهندسي. نحن نسعى لبناء علاقات قائمة على الجودة
								والسلامة، ونطمح أن نكون الرائدين في مجالنا على مستوى المملكة
								العربية السعودية.
							</Typography>
						</Stack>
					</Grid>
					<Grid
						paddingLeft={{ xs: '0px !important', md: '40px' }}
						item
						display={{ xs: 'flex', lg: 'block' }}
						flexDirection="column"
						alignItems={'center'}
						lg={3}
						md={4}
						xs={12}>
						<Typography
							variant="h4"
							fontSize="2rem"
							textAlign={{ xs: 'center', md: 'unset' }}
							marginBottom={'1rem'}
							fontWeight={700}>
							وسائل التواصل
						</Typography>
						<ContactComponent />
					</Grid>
				</Grid>
			</Box>
			<Stack
				direction="row"
				justifyContent="center"
				alignItems="center"
				color="white"
				sx={{
					background: '#102a3f',
					padding: '0.5rem 0',
					textAlign: 'center',
				}}>
				<a
					href="https://hossam-mahmoud-portfolio.vercel.app/"
					target="_blank"
					rel="noreferrer">
					&copy; تصميم وبرمجة {year} - {'  '}
					<motion.span
						initial={{ color: 'white' }}
						whileHover={{ color: '#ff9a8d' }}
						style={{
							color: 'white',
							marginRight: '1px',
							fontFamily: 'fantasy',
						}}>
						Hossam Mahmoud
					</motion.span>
				</a>
			</Stack>
		</>
	);
};

export default Footer;
