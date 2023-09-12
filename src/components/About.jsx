import SkillsCard from "./SkillsCard";
import { skills } from "../data";
import SectionTitle from "./SectionTitle";
import aboutSvg from "../assets/about.svg";

const About = () => {
	return (
		<section className="bg-white py-20" id="about">
			<div className="align-element grid md:grid-cols-2 items-center gap-16">
				<img src={aboutSvg} className="w-full h-64" />
				<article>
					<SectionTitle text="code and tea" />
					<p className="text-slate-600 mt-8 leading-loose">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
						tempora amet voluptatum alias, dolorum facere itaque sed doloremque
						sint accusantium quaerat ipsam. Et hic error nesciunt illo
						exercitationem ad labore?
					</p>
				</article>
			</div>
		</section>
	);
};
export default About;
