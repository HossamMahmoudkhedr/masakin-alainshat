import React, { useEffect } from 'react';
import HeroSection from '../utils/heroSection';
import Info from '../utils/info';
import MiddleAD from '../utils/middleAD';
import Features from './features';
import ScrollBack from '../utils/scrollBack';

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<ScrollBack />
			<HeroSection image="workers" />
			<Info
				color="var(--text-color)"
				details="نحن في مؤسسة مساكن الانشاءات للمقاولات لدينا أعمال المقاولات عامه إنشاء وتنفيذ مشاريع فلل ، عماير ، استراحات ، ملاحق علوية وأرضية ، شاليهات ، مجالس ، غرف ، مسابح ، ترميم ، بلاط ، دهانات ، لياصه ، ديكورات ، سباكة ، كهرباء ، متخصصون في أعمال البناء كما نوفر خدمات التشطيب والعوازل بجميع أنواعها ، توريد مواد بناء وادوات كهربائية والأثاث المنزلي والمكتبي وتسوير الأراضي واستخراج رخص البناء وتصميم المخططات الهندسية وغير ذلك من الخدمات في السوق السعودي"
				header="مهمتنا"
				hasButton={false}
				image="nicolas-j-leclercq-WJg2bynUWOk-unsplash"
				direction="row"
			/>
			<Info
				color="var(--text-color)"
				details="نسعى ان نكون شركة رائدة في مجال المقاولات بشكل عام, على مستوى المملكة .ساعيين الى بناء علاقة وسمعة جيدة لدى العملاء ، وتقديم خدمات البناء بأعلى مستوى من الجودة والسلامة من خلال تلبية متطلبات العملاء والسعى لاخراجها بشكلاَ أفضل . الان اصبحنا واحدة من الشركات الوطنية في المملكة العربيه السعوديه التي تقدم جميع خدمات المقاولات وتطوير وتنفيذ حلول المشاريع عالية الجودة ونحن على ثقة من اننا سنكون احد رواد البناء في السنوات القليلة القادمة باستخدام افضل ممارسات التنفيذ من الجودة والسلامة للحصول على رضاء العملاء مع الاستفادة من القفزة الاقتصاديه للمملكة العربيه السعوديه تماشيا مع رؤية 2030 م"
				header="رؤيتنا"
				hasButton={false}
				image="scott-blake-bKGpAV4gFnc-unsplash"
				direction="row-reverse"
			/>
			<MiddleAD
				content="في عالم مليء بالتشابه، نقف ملهمين لنخلق التميز، حيث يتجسد روح الإبداع في كل تفصيل من مشاريعنا. نؤمن بأن الفرادة تكمن في تفردها، وهي قيمة نعيشها ونعكسها في كل إنشاء نقوم به."
				header="في عالم مليء بالتشابه نصنع نحن التميز"
				image="philipp-henzler-dgE3lWVyDh8-unsplash"
			/>
			<Features />
		</div>
	);
};

export default About;
