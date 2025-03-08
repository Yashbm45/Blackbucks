import React from 'react';
import './Home.css'; // Import custom CSS file for styling
import TestimonialCard from '../Testimonials/TestimonialsCard';
import Courses from '../Courses/Courses';
import Services from '../Services/Services';

const Home = () => {
  const testimonialsData = [
    {
      id: 1,
      quote: "I learned everything I needed to know about the stock market. The courses were clear and easy to follow.",
      name: "Kunal Bhat",
      designation: "( Cloud Engineer )",
    },
    {
      id: 2,
      quote: "The advanced course helped me become a better trader. The strategies I learned have been a game-changer.",
      name: "Shubham Kolhe",
      designation: "( Senior Electric Engineer )",
    },
    {
      id: 3,
      quote: "As a beginner, I gained insightful knowledge about the equity market and other information that helped me diversify my investments.",
      name: "Abhijeet Kumbhar",
      designation: "( Senior Software Analyst )",
    },
    {
      id: 4,
      quote: "The course was very well designed. Even as a beginner, the examples and real-time analysis exercises provided by experts were very helpful in gaining confidence for investment.",
      name: "Kunal Patekar",
      designation: "( Full-time Trader )",
    },
    {
      id: 5,
      quote: "Initially, I was afraid of trading, but Arthos helped me overcome my fear and gain confidence. Now, I’m eager to learn more with Arthos.",
      name: "Abhishek Dudde",
      designation: "( Solar & Renewable Energy Dept, GOV of Maharashtra )",
    },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Black Bucks</h1>
          <p>Every percent of profit is a brick in the foundation of your fortune. <span className='quote'> - Chandresh Mali </span></p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      {/* Services Section */}
      <section>
        <Services />
      </section>

      {/* Courses Section */}
      <section>
        <Courses />
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="section-title">
          <h2>What Our Students Say</h2>
        </div>
        <div className="testimonial-list">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              quote={testimonial.quote}
              name={testimonial.name}
              designation={testimonial.designation}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;