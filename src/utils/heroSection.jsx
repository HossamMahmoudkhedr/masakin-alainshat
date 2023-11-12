import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import CustomButton from './customButton';
const HeroSection = ({ image }) => {
	return (
		<Box
			sx={{
				position: 'relative',
				height: '100vh',
				backgroundImage: `url(${require(`../assets/images/${image}.jpg`)})`,
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
				backgroundSize: 'cover',
			}}>
			<Box
				sx={{
					position: 'absolute',
					left: '0',
					top: '0',
					width: '100%',
					height: '100%',
					zIndex: '0',
					backgroundColor: 'black',
					opacity: '0.36',
				}}></Box>
			<Stack
				spacing={3}
				sx={{
					position: 'absolute',
					left: '50%',
					top: '50%',
					width: '100%',
					alignItems: 'center',
					fontWeight: 'bold',
					transform: 'translate(-50%, -40%)',
				}}>
				<Stack alignItems="center">
					<Typography
						variant="h1"
						fontWeight="600"
						color="white">
						مساكن الانشاءات للمقاولات
					</Typography>
					<Typography
						variant="body1"
						textAlign="center"
						fontSize="1.2rem"
						color="white"
						width="41rem">
						نحن لسنا مجرد مقاولون، بل شركاء في تحويل رؤيتك إلى واقع ملموس، نبني
						بجودة واهتمام فائق لضمان بنية قوية وتصميم فريد يعكس هويتك
					</Typography>
				</Stack>
				<CustomButton
					to="/"
					text="تواصل معنا"
					bgColor="var(--light-blue) "
				/>
			</Stack>
		</Box>
	);
};

export default HeroSection;
