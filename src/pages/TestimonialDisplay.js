import React from 'react';
import { useParams } from 'react-router-dom';
import { TestimonialList } from '../helpers/testimonialList.js';
import '../styles/TestimonialDisplay.css';

function TestimonialDisplay() {
    const { id } = useParams();
    const testimonial = TestimonialList[id];

    return (
        <div className='testimonial'>
            <h1>{testimonial.name}</h1>
            <img src={testimonial.image} alt={testimonial.name} />
        </div>
    );
}

export default TestimonialDisplay