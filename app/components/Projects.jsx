"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
	{
		id: 1,
		title: "React Job Listings Web Application",
		description:
			"An interactive web application developed using the MERN (MongoDB, Express.js, React, Node.js) stack to incorporate comprehensive CRUD (Create, Read, Update, Delete) functionalities. This full-stack solution seamlessly integrates the front-end and back-end aspects of the website.",
		image: "/images/projects/mern-stack-react-jobs.png",
		tag: ["All", "Web"],
		gitUrl: "www.zakari.netlify.app",
		previewUrl: "www.zakari.netlify.app",
	},
	{
		id: 1,
		title: "E-commerce Application",
		description:
			"A user-friendly web application developed using the Next.js + MERN stack implementing all the features of an online ecommerce trading platform. As at now this project is still under contruction (wip).",
		image: "/images/projects/ecommerce.png",
		tag: ["All", "Mobile"],
		gitUrl: "www.zakari.netlify.app",
		previewUrl: "www.zakari.netlify.app",
	},
];

const Projects = () => {
	const [tag, setTag] = useState("All");

	const handleTagChange = (newTag) => {
		setTag(newTag);
	};

	const filteredProjects = projectsData.filter((project) =>
		project.tag.includes(tag)
	);
	return (
		<>
			<h2 className="text-center text-4xl font-bold text-white mt-4 mb-6 md:mb-12">
				My Projects
			</h2>
			<div className="text-white flex flex-row justify-center items-center gap-2 py-6">
				<ProjectTag
					onClick={handleTagChange}
					name="All"
					isSelected={tag === "All"}
				/>
				<ProjectTag
					onClick={handleTagChange}
					name="Web"
					isSelected={tag === "Web"} 
				/>
				<ProjectTag
					onClick={handleTagChange}
					name="Mobile"
					isSelected={tag === "Mobile"}
				/>
			</div>
			<div className="grid md:grid-cols-2 gap-8 md:gap-12">
				{filteredProjects.map((project) => (
					<ProjectCard
						key={project.id}
						title={project.title}
						description={project.description}
						imgUrl={project.image}
						gitUrl={project.gitUrl}
						previewUrl={project.previewUrl}
					/>
				))}
			</div>
		</>
	);
};

export default Projects;
