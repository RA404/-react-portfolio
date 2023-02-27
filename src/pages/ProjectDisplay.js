import React from "react";
import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/projectList.js";
import GitHubIcon from "@material-ui/icons/GitHub";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  let descElement;
  let gitElementIcon;
  let gitElementText;
  let projectLinkElement;

  if (project.gitLink) {
    gitElementIcon = (
      <a href={project.gitLink} target="_blank" rel="noopener noreferrer">
        <GitHubIcon fontSize="small" />
      </a>
    );
    gitElementText = (
      <a
        className="project__text"
        href={project.gitLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub Link
      </a>
    );
  } else {
    gitElementIcon = <GitHubIcon fontSize="small" />;
    gitElementText = <p className="project__text">Private repository</p>;
  }

  if (project.description) {
    descElement = (
      <p className="project__text project__text_description">
        {project.description}
      </p>
    );
  }

  if (project.projectLink) {
    projectLinkElement = (
      <Box display="flex" gap="10px" alignItems="center">
        <LanguageOutlinedIcon fontSize="small" />
        <a
          className="project__text"
          href={project.projectLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {project.projectLink}
        </a>
      </Box>
    );
  }

  return (
    <div className="project">
      <h1 className="project__title">{project.name}</h1>
      <p className="project__skills">
        <b>Skills:</b> {project.skills}
      </p>
      <Box display="flex" gap="10px" alignItems="center">
        {gitElementIcon}
        {gitElementText}
      </Box>
      {projectLinkElement}
      {descElement}
      <img className="project__image" src={project.image} alt={project.name} />
    </div>
  );
}

export default ProjectDisplay;
