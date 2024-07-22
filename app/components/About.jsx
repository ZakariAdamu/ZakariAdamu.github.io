"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const tabData = [
	{
		title: "Skills",
		id: "skills",
		content: (
			<ul className="list-disc pl-2">
				<li>Next.js</li>
				<li>React</li>
				<li>TypeScript</li>
				<li>Node.js</li>
				<li>Express</li>
				<li>MongoDB</li>
			</ul>
		),
	},
	{
		title: "Education",
		id: "education",
		content: (
			<ul className="list-disc pl-2">
				<li>BBA International Open University, Gambia</li>
				<li>Diploma in Front-end Engineering, AltSchool Africa</li>
			</ul>
		),
	},
	{
		title: "Certifications",
		id: "certifications",
		content: (
			<ul className="list-disc pl-2">
				<li>Diploma in Front-end Engineering, AltSchool Africa</li>
				<li>Meta Frontend Developer Certificate</li>
				<li>Google Data Analytics Professional Certificate</li>
			</ul>
		),
	},
];

const About = () => {
	const [tab, setTab] = useState("skills");
	const [isPending, startTransition] = useTransition();
	const handleTabChange = (id) => {
		startTransition(() => {
			setTab(id);
		});
	};
	return (
		<section className="text-white">
			<div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
				<Image
					className="rounded"
					src="/images/about-image.png"
					width={500}
					height={500}
				/>
				<div className="mt-4 md:mt-0 text-left flex flex-col h-full">
					<h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
					<p className="text-base lg:text-lg">
						I am a Front-end web developer with a passion for creating
						interactive and responsive web applications. I have experience
						working with JavaScript, TypeScript, React, Node.js, Express,
						MongoDB, HTML, CSS, and Git. I am a quick learner and I am always
						looking to expand my knowledge and skill set. I am a team player and
						I am excited to work with others to create amazing applications.
					</p>
					<div className="flex flex-row mt-8">
						<TabButton
							selectTab={() => handleTabChange("skills")}
							active={tab === "skills"}
						>
							Skills{""}
						</TabButton>
						<TabButton
							selectTab={() => handleTabChange("education")}
							active={tab === "education"}
						>
							Education{""}
						</TabButton>
						<TabButton
							selectTab={() => handleTabChange("certifications")}
							active={tab === "certifications"}
						>
							Certifications{""}
						</TabButton>
					</div>
					<div className="mt-8">
						{tabData.find((t) => t.id === tab).content}
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
