import React from 'react';
import { useParams } from 'react-router-dom';
import { TestimonialList } from '../helpers/testimonialList.js';
import '../styles/TestimonialDisplay.css';

function TestimonialDisplay() {
    const { id } = useParams();
    const testimonial = TestimonialList[id];

    return (
        <div className='testimonial'>
            <h1 className='testimonial__title'>{testimonial.name}</h1>
            <img className='testimonial__image' src={testimonial.image} alt={testimonial.name} />
        </div>
    );
}

export default TestimonialDisplay