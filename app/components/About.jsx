"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";

const About = () => {
	const [tab, setTab] = useState("skills");
	const [startTransition, isPending] = useTransition();
	const handleTabChange = (id) => {
		startTransition(() => {
			setTab(id);
		});
	};
	return (
		<section className="text-white">
			<div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
				<Image
					className="rounded-tl"
					src="/images/about-image.png"
					width={500}
					height={500}
				/>
				<div>
					<h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
					<p className="text-base lg:text-lg">
						I am a full-stack web developer with a passion for creating
						interactive and responsive web applications. I have experience
						working with JavaScript, TypeScript, React, Node.js, Express,
						MongoDB, HTML, CSS, and Git. I am a quick learner and I am always
						looking to expand my knowledge and skill set. I am a team player and
						I am excited to work with others to create amazing applications.
					</p>
					<div className="flex flex-row mt-8">
						<span className="mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-purple-500">
							Skills
						</span>
						<span>Education</span>
						<span>Experience</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
