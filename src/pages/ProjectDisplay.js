import React from 'react';
import { useParams } from 'react-router-dom';
import { ProjectList } from '../helpers/projectList.js';
import GitHubIcon from '@material-ui/icons/GitHub';
import '../styles/ProjectDisplay.css';

function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id];
    let descElement;
    let gitElementIcon;
    let gitElementText;

    if (project.gitLink) {
        gitElementIcon = <a href={project.gitLink} target='_blank' rel='noopener noreferrer'><GitHubIcon /></a>  
        gitElementText = <a href={project.gitLink} target='_blank' rel='noopener noreferrer'>GitHub Link</a>    
    } else {
        gitElementIcon = <GitHubIcon />
        gitElementText = <p className='project__text'>Private repository</p>
    }
    
    if (project.description) {
        descElement = <p className='project__text project__text_description'>{project.description}</p>     
    }

    return (
        <div className='project'>
            <h1 className='project__title'>{project.name}</h1>
            <p className='project__skills'><b>Skills:</b> {project.skills}</p>
            {descElement}
            <img className='project__image' src={project.image} alt={project.name} />
            {gitElementIcon}
            {gitElementText}
        </div>
    );
}

export default ProjectDisplay