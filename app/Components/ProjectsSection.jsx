import React from 'react';
import ProjectCard from './ProjectCard';
import projectsData from "./JSON/ProjectList.json";


const ProjectsSection = () => {
  console.log(projectsData);
  return (
    <div>
			<h2 className="text-center text-4xl font-bold text-white mt-4">My Projects</h2>
			<div className="gird md:grid-cols-3 gap-8 md:gap-12">
				{projectsData.map((project, index) => 
					<ProjectCard 
						key={index} 
						title={project.title} 
						description={project.description} 
						imgUrl={project.image}
						webUrl={project.webUrl}
						previewUrl={project.previewUrl}
					/>)}
			</div>
		</div>
    
  )
}

export default ProjectsSection