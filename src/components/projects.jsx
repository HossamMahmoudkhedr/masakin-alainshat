import React, { useEffect } from 'react';
import HeroSection from '../utils/heroSection';
import Heading from '../utils/heading';
import { Stack } from '@mui/material';
import { projects } from '../data/projectsData';
import ProjectCard from '../utils/projectCard';
import { motion } from 'framer-motion';

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<HeroSection
				image="josue-isai-ramos-figueroa-Pj4je7OjrME-unsplash"
				position="right"
			/>
			<Heading
				headerText="مشاريعنا"
				subText="في عالم المقاولات، نرسم مشاريعنا بلغة الإبداع ونبنيها بجودة تحدث تحولًا في المستقبل"
			/>
			<Stack
				component={motion.div}
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, type: 'spring' }}
				viewport={{ once: true }}
				direction="row"
				padding="1rem 0rem 6rem 0rem"
				flexWrap="wrap"
				justifyContent={'center'}
				gap={{ xs: '5rem' }}>
				{projects.map((project) => (
					<ProjectCard
						key={parseInt(project.id)}
						image={project.image}
						text={project.content}
					/>
				))}
			</Stack>
		</div>
	);
};

export default Projects;
