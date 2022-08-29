import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProjectItem({ image, name, id, stack }) {
  const navigate = useNavigate();
  return (
    <div 
      className='projectItem'
      onClick={() => {
        navigate('/project/'+ id)
      }}
      >
        <div style={{ backgroundImage: `url(${image})` }} className='bgImage'/>
        <p className='project__stack'>{stack}</p>
        <h1 className='project-title'>{name}</h1>
    </div>
  )
}

export default ProjectItem