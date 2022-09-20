import React, { useEffect } from 'react';
import ProjectItem from '../components/ProjectItem';
import { ProjectList } from '../helpers/projectList.js';
import '../styles/Projects.css';
import { metaAdder } from '../helpers/metaAdder';

function Projects() {

  useEffect(() => {
    document.title = 'Repin Andrei - Projects';
    metaAdder('description', "My projects (commercial projects, pet-projects and study projects)");
  });

  return (
    <div className='projects'>
      <h1 className='projects__title'>My personal projects</h1>
      <div className='projectList'>
        {ProjectList.map((project, idx) => {
          return <ProjectItem key={idx} id={idx} name={project.name} image={project.image} stack={project.skills}/>
        })}
      </div>
    </div>
  )
}

export default Projects