import { Box, Stack } from '@mui/material';
import React from 'react';
import Heading from '../utils/heading';
import { projects } from '../data/projectsData';
import ProjectCard from '../utils/projectCard';
import CustomButton from '../utils/customButton';
import { motion } from 'framer-motion';

const ProjectsSection = () => {
	return (
		<Box
			position="relative"
			sx={{
				backgroundImage: `url(${require(`../assets/images/yogendra-singh-KvgMwXK6FFw-unsplash.jpg`)})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				padding: '1rem 0',
				overflow: 'hidden',
			}}>
			<Heading
				headerText="مشاريعنا"
				subText="في عالم المقاولات، نرسم مشاريعنا بلغة الإبداع ونبنيها بجودة تحدث تحولًا في المستقبل"
			/>
			<Box
				sx={{
					position: 'absolute',
					left: '0',
					top: '0',
					width: '100%',
					height: '100%',
					zIndex: '0',
					backgroundColor: 'black',
					opacity: '0.20',
				}}></Box>
			<Stack
				component={motion.div}
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, delay: 2, type: 'spring' }}
				viewport={{ once: true }}
				direction="row"
				padding="1rem 0rem 6rem 0rem"
				flexWrap="wrap"
				justifyContent={'center'}
				gap={{ xs: '5rem', lg: '2rem' }}>
				{projects.slice(0, 3).map((project) => (
					<ProjectCard
						image={project.image}
						text={project.content}
					/>
				))}
			</Stack>
			<Stack
				component={motion.div}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1, delay: 2.5, type: 'spring' }}
				viewport={{ once: true }}
				marginBottom="2rem"
				direction={'row'}
				justifyContent="center">
				<CustomButton
					color="black"
					text="عرض المزيد من المشاريع"
					bgColor="var(--yellow)"
					to="/projects"
				/>
			</Stack>
		</Box>
	);
};

export default ProjectsSection;
