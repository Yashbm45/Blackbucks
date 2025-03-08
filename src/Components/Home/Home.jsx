import React from 'react';
import './Home.css'; // Import custom CSS file for styling
import TestimonialCard from '../Testimonials/TestimonialsCard';
import Courses from '../Courses/Courses';
import Services from '../Services/Services';
// import username from process.env.username;


const Home = () => {
  
    const testimonialsData = [
      {
        id:1,
        quote: "I learned everything I needed to know about the stock market. The courses were clear and easy to follow.",
        name: "Kunal Bhat",
        designation: "( Clould Engineer )",
      },
      {
        id:2,
        quote: "The advanced course helped me become a better trader. The strategies I learned have been a game-changer.",
        name: "Shubham Kolhe",
        designation: "( Senior Electric Engineer )",
      },
      {
        id:3,
        quote: "As a beginner I gained the insightful of equity market and other information about that gave me the ideas to diversify my investment.",
        name: "Abhijeet Kumbhar",
        designation: "( Senior Software Analyst )",
      },
      {
        id:4,
        quote: "The course was very well designed even as a beginner the examples and realtime analysis exercises provided by experts were very helpful to gain confidence for investment.",
        name: "Kunal Patekar",
        designation: "( Full-time Trader )",
      },
      {
        id:5,
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
          <p>Every percent of profit is a brick in the foundation of your fortune.</p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      <section> <Services /> </section>

      {/* Testimonials Section */}
      {/* About Section */}
      <section> <Courses /> </section>

      <section className="testimonials">
      <div className="section-title">
        <h2>What Our Students Say</h2>
      </div>
      <div className="testimonial-list">
        { ...testimonialsData.map((testimonial) => (
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
