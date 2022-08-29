import React, { useEffect } from 'react';
import TestimonialItem from '../components/TestimonialItem';
import '../styles/Testimonials.css';
import { TestimonialList } from '../helpers/testimonialList.js';

function Testimonials() {

  useEffect(() => {
    document.title = 'Repin Andrei - Testimonials';;
  });

  return (
    <div className='testimonials'>
      <h1>Testimonials</h1>
      <div className='testimonialList'>
        {TestimonialList.map((testimonial, idx) => {
          return <TestimonialItem key={idx} id={idx} name={testimonial.name} image={testimonial.image}/>
        })}
      </div>
    </div>
  )
}

export default Testimonials