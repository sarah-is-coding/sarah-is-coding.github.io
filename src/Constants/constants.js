

import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faGithub,
	faLinkedin,
	faReact,
} from "@fortawesome/free-brands-svg-icons";
import {
	faBagShopping,
	faBars,
	faDiceD6,
	faEnvelope,
	faWindowRestore,
	faX,
} from "@fortawesome/free-solid-svg-icons";

import {
	avatar,
	awsIcon,
	cssIcon,
	eslintIcon,
	figmaIcon,
	gitIcon,
	githubIcon,
	htmlIcon,
	javaIcon,
	jsIcon,
	HomeCookHub,
	BloomHaven,
	HDR,
	neoIcon,
	nodeIcon,
	psqlIcon,
	pyIcon,
	raspIcon,
	reactIcon,
	viteIcon,
} from "../assets";

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
	htmlIcon,
	cssIcon,
	jsIcon,
	reactIcon,
	awsIcon,
	javaIcon,
	gitIcon,
	githubIcon,
	psqlIcon,
	eslintIcon,
	pyIcon,
	viteIcon,
	nodeIcon,
	raspIcon,
	neoIcon,
	figmaIcon,
	avatar,
};

const icons = {
	faBars,
	faX,
	faWindowRestore,
	faBagShopping,
	faDiceD6,
	faReact,
	faGithub,
	faLinkedin,
	faEnvelope,
};

const introduction = {
	text: [
		"Greetings! I'm thrilled you've stopped by! :)",

		"I'm Sarah, I was born on June, 7 2001 and received my Bachelor's degree in Computer Science from the University of Cincinnati in April of 2024. My enthusiasm lies in the realm of database technologies and user experience (UX).",

		"Beyond my academic pursuits, I find joy in playing in board games with my friends whenever possible. Additionally, I'm a big cat lover and take pleasure in reading as a leisure activity.",

		"I'm always excited to collaborate with individuals and teams who are as passionate as I am about crafting exceptional experiences. Thank you sincerely for exploring my portfolio!",
	],
};


export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "projects",
		title: "Projects",
	},
	{
		id: "skills",
		title: "Skills",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const projects = [
	{
		name: "HomeCookHub",
		description: "A home cook meal planner implemented with React and Node.js. Here you can plan varied and nutritious meals, maintain and automatically generate organized grocery lists, customize recipes to align with specific dietary restrictions and share your own recipes.",
		image: HomeCookHub,
		source_code_link: "https://github.com/sarah-is-coding/HomeCookHub",
		demo_link: "https://www.youtube.com/watch?v=yvtZyR45woM",
	},
	{
		name: "BloomHaven",
		description: "E-commerce website for bouquets using HTML, CSS, and JavaScript",
		image: BloomHaven,
		source_code_link: "https://github.com/sarah-is-coding/BloomHaven",
		demo_link: "https://sarah-is-coding.github.io/BloomHaven/",
	},
	{
		name: "Handwritten Digit Recognizer",
		description: "Handwritten Digit Recognition using Convolutional Neural Network and Kivy GUI",
		image: HDR,
		source_code_link: "https://github.com/sarah-is-coding/Handwritten-Digit-Recognizer",
		demo_link: "https://youtu.be/1o999abiXUw?si=A5xtbF6QhSW6VYUH",
	}
];

const memoji = {
	image: [avatar],
};

const skills = [
	{
		id: "html",
		title: "HTML",
		icon: htmlIcon,
		description:
			"I have a strong command of HTML for organizing web pages and generating meaningful content that can be accessed by all users.",
	},
	{
		id: "css",
		title: "CSS",
		icon: cssIcon,
		description:
			"I possess expertise in utilizing CSS to design web pages and craft visually captivating layouts that enhance the overall user experience.",
	},
	{
		id: "javascript",
		title: "JavaScript",
		icon: jsIcon,
		description:
			"I have substantial experience in employing JavaScript to introduce interactivity and functionality into web pages, resulting in dynamic user interfaces.",
	},
	{
		id: "react",
		title: "React",
		icon: reactIcon,
		description:
			"I am well-versed in React, proficient in creating reusable components and managing application state using hooks and context.",
	},
	{
		id: "aws",
		title: "Amazon Web Services",
		icon: awsIcon,
		description:
			"I am studying to be certified in AWS and I am proficient in working with S3",
	},
	{
		id: "figma",
		title: "Figma",
		icon: figmaIcon,
		description:
			"In my Figma skills, I unleash creativity, designing captivating user interfaces and collaborating seamlessly with designers and developers.",
	},
	{
		id: "git",
		title: "Git",
		icon: gitIcon,
		description:
			"I am proficient in Git, managing code changes, collaborating with others, and resolving conflicts effectively.",
	},
	{
		id: "github",
		title: "GitHub",
		icon: githubIcon,
		description:
			"I am skilled in using GitHub for seamless project collaboration, code sharing, and issue tracking. Through GitHub, I efficiently create and manage repositories and effectively present my work to potential employers.",
	},
	{
		id: "sql",
		title: "SQL",
		icon: psqlIcon,
		description:
			"I have a strong command of SQL, encompassing a wide range of skills such as database normalization, triggers, front-end connectivity, and data analysis using software like Power BI.",
	},
	{
		id: "py",
		title: "Python",
		icon: pyIcon,
		description:
			"With 2 years of Python experience, I am adept at coding functions and unit tests.",
	},
	{
		id: "node",
		title: "Node",
		icon: nodeIcon,
		description:
			"When it comes to building web applications, I prefer using Node as my runtime environment over Yarn. I have expertise in leveraging Node.js to develop powerful and scalable web applications.",
	},
	{
		id: "raspi",
		title: "Raspberry Pi",
		icon: raspIcon,
		description:
			"I have hands-on experience with Raspberry Pi, where I utilized it to put an inventory management system on a kiosk connected to a node.js server for a company.",
	},
];

const experience = [
    {
      id: "web-dev-intern",
      role: "Web Development Intern",
      company: "Logging Magic (Web Analytics Startup Company), Remote",
      duration: "May 2023 - August 2023",
      responsibilities: [
        "Contributed to a three-person Agile development team, utilizing Jira for project management and tracking in an AWS environment.",
        "Devised user navigation structure for account management, processing, and onboarding modules, collaborating closely with the team lead.",
        "Built responsive and dynamic web pages using Laravel Blade files, CSS, and JavaScript.",
        "Created the website's routing mechanism using Laravel's routing system.",
        "Developed the website's database structure with Laravel's Eloquent ORM and migration system.",
        "Pioneered an efficient onboarding system for new users.",
        "Delivered the project within the stipulated time frame, demonstrating strong understanding of Agile principles."
      ],
    },
    {
      id: "cs-intern",
      role: "Computer Science Intern",
      company: "Booz Allen Hamilton, Beavercreek, OH",
      duration: "January 2021 - January 2023",
      responsibilities: [
        "Developed and improved algorithms to identify and verify signal sources, using Python and data analysis techniques.",
        "Enhanced the performance of algorithms that process and analyze signal patterns, using tools like Jupyter Notebook, Pandas, and Matplotlib.",
        "Ensured reliability by writing extensive tests for all modules and functions, and created methods to validate different algorithms.",
        "Participated actively in an Agile team, employing Scrum and Kanban methodologies.",
        "Worked closely with a team using Agile practices like Scrum and Kanban to deliver high-quality software projects on time."
      ],
    },
  ];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export { icons, introduction, markerSvg, media, memoji, projects, skills, experience };
