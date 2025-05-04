"use client"
import React, {useState, useEffect} from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
//import projectsData from "./JSON/ProjectList.json";

const ProjectsSection = () => {
	const [tag, setTag] = useState("All");
	const handleTagChange = (newTag) => {
		setTag(newTag);
	}

	const [projectsData, setProjectsData] = useState([]);
	useEffect(() => {
		fetch(`/JSON/ProjectList.json`)
			.then(res => res.json())
			.then(res => setProjectsData(res))
			.catch(_ => null);
	}, []);

	const filteredProjects = projectsData.filter((project) => project.tag.includes(tag));

  console.log(filteredProjects);
  return (
		<section id="projects">
			<div>
				<h2 className="text-center text-4xl font-bold text-white mt-4 mb-4">
					My Projects
				</h2>
				<div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
					<ProjectTag onClicked={handleTagChange} name="All" isSelected={tag === "All"} />
					<ProjectTag onClicked={handleTagChange} name="Unity" isSelected={tag === "Unity"} />
					<ProjectTag onClicked={handleTagChange} name="Unreal" isSelected={tag === "Unreal"} />
					<ProjectTag onClicked={handleTagChange} name="Others" isSelected={tag === "Others"} />
				</div>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-5">
					{filteredProjects.map((project, index) => 
						<ProjectCard 
							key={index} 
							title={project.title} 
							description={project.description}
							languages={project.languages}
							imgUrl={project.image}
							webUrl={project.webUrl}
							previewUrl={project.previewUrl}
						/>)}
				</div>
			</div>
    </section>
  )
}

export default ProjectsSection