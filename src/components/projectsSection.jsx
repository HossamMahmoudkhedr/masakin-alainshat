import { Box, Grid, Stack } from '@mui/material';
import React from 'react';
import Heading from '../utils/heading';
import { projects } from '../data/projectsData';
import ProjectCard from '../utils/projectCard';
import CustomButton from '../utils/customButton';

const ProjectsSection = () => {
	return (
		<Box
			position="relative"
			sx={{
				backgroundImage: `url(${require(`../assets/images/yogendra-singh-KvgMwXK6FFw-unsplash.jpg`)})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				padding: '1rem 0',
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
				direction="row"
				padding="1rem 0rem 6rem 0rem"
				justifyContent={'center'}
				gap="2rem">
				{projects.slice(0, 3).map((project) => (
					<ProjectCard
						image={project.image}
						text={project.content}
					/>
				))}
			</Stack>
			<Stack
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
