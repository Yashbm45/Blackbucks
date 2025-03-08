// TestimonialCard.js
import React from 'react';
import './TestimonialsCard.css'

const TestimonialCard = ({ quote, name, designation }) => {
return (
    <div className="testimonial-card">
        <p className="testimonial-quote">"{quote}"</p>
        <span className="testimonial-name">
        - {name} <span className="testimonial-designation">{designation}</span>
        </span>
    </div>
);
};

export default TestimonialCard;
