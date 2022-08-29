import React from 'react';
import { useNavigate } from 'react-router-dom';

function TestimonialItem({ image, name, id }) {
  const navigate = useNavigate();
  return (
    <div 
      className='testimonialItem'
      onClick={() => {
        navigate('/testimonial/'+ id)
      }}
      >
        <div style={{ backgroundImage: `url(${image})` }} className='bgImage'/>
        <h1 className='project-title'>{name}</h1>
    </div>
  )
}

export default TestimonialItem