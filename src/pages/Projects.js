import React, { useEffect } from 'react';
import ProjectItem from '../components/ProjectItem';
import { ProjectList } from '../helpers/projectList.js';
import '../styles/Projects.css';

function Projects() {

  useEffect(() => {
    document.title = 'Repin Andrei - Projects';;
  });

  return (
    <div className='projects'>
      <h1>My personal projects</h1>
      <div className='projectList'>
        {ProjectList.map((project, idx) => {
          return <ProjectItem key={idx} id={idx} name={project.name} image={project.image} stack={project.skills}/>
        })}
      </div>
    </div>
  )
}

export default Projects