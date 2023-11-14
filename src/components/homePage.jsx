import React, { useEffect } from 'react';
import HeroSection from '../utils/heroSection';
import Info from '../utils/info';
import MiddleAD from '../utils/middleAD';
import Services from './services';
import ProjectsSection from './projectsSection';
import ScrollBack from '../utils/scrollBack';

const HomePage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<ScrollBack />
			<HeroSection image={'home-page'} />
			<Info
				color="var(--text-color)"
				header="نحول حلمك الى واقع ملموس"
				details="نحن في مؤسسة مساكن الانشاءات للمقاولات نسعى ان نكون شركة رائدة في مجال المقاولات بشكل عام, على مستوى المملكة .ساعيين الى بناء علاقة وسمعة جيدة لدى العملاء ، وتقديم خدمات البناء بأعلى مستوى من الجودة والسلامة من خلال تلبية متطلبات العملاء والسعى لاخراجها بشكلاَ أفضل. الان اصبحنا واحدة من الشركات الوطنية في المملكة العربيه السعوديه التي تقدم جميع خدمات المقاولات وتطوير وتنفيذ حلول المشاريع عالية الجودة ونحن على ثقة من اننا سنكون احد رواد البناء في السنوات القليلة القادمة باستخدام افضل ممارسات التنفيذ من الجودة والسلامة للحصول على رضاء العملاء مع الاستفادة من القفزة الاقتصاديه للمملكة العربيه السعوديه تماشيا مع رؤية 2030 م"
				image="city"
				hasButton={true}
				direction="row"
			/>
			<MiddleAD
				content="	في مؤسسة مساكن الإنشاءات، نجسد رؤية ملهمة تمزج بين الإبداع والتميز في
					مجال المقاولات. نحن ليس فقط متخصصون في إنشاء وتنفيذ مشاريع متنوعة، بل
					نقدم خدمات شاملة تشمل التشطيب والعوازل وتوريد المواد والتصميم الهندسي."
				header="نحقق الابداع في كل مشروع"
				image="saad-salim-PqRvLsjD_TU-unsplash"
			/>
			<Services />
			<ProjectsSection />
		</div>
	);
};

export default HomePage;
