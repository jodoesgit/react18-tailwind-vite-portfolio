import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";

export const links = [
	{ id: nanoid(), href: "#home", text: "home" },
	{ id: nanoid(), href: "#skills", text: "skills" },
	{ id: nanoid(), href: "#about", text: "about" },
	{ id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
	{
		id: nanoid(),
		title: "HTML&CSS",
		icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
		text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
	},
	{
		id: nanoid(),
		title: "Javascript",
		icon: <FaJs className="h-16 w-16 text-emerald-500" />,
		text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
	},
	{
		id: nanoid(),
		title: "React",
		icon: <FaReact className="h-16 w-16 text-emerald-500" />,
		text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
	},
];

export const projects = [
	{
		id: nanoid(),
		img: "../src/assets/mixmaster.png",
		url: "https://react18-router-query-cocktails.vercel.app/",
		github: "https://github.com/jodoesgit/react18-router-query-cocktails",
		title: "MixMaster",
		text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
	},
	{
		id: nanoid(),
		img: "../src/assets/unsplash.png",
		url: "https://react18-query-vite-unsplash-s4j7.vercel.app/",
		github: "https://github.com/jodoesgit/react18-query-vite-unsplash-clone",
		title: "Unsplash Clone",
		text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
	},
	{
		id: nanoid(),
		img: "../src/assets/cart.png",
		url: "https://react18-redux-shopping-cart.vercel.app/",
		github: "https://github.com/jodoesgit/react18-redux-shopping-cart",
		title: "Ecommerce Cart",
		text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
	},
];
