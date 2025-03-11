import React from 'react';
import './About.css'; // Custom CSS for styling
import Card from '../Card';
const About = () => {
  const foundersData = [
    {
      name : "Pushkar Mahajan",
      title: "CFO & Technical Analyst",
      education: "BE E&TC Engineering",
  },
    {
      name: "Suhas Sathe",
      title: "Tech Lead & Analyst",
      },
    {
      name: "Tejas Khairnar",
      title: "Lead Business Analyst",
    },
    {
      name: "Saurabh Batwal",
      title: "Marketing Head",
    },
    // Add more profiles here as needed
  ];
  return (
    <div className="about-section">
      <div className="section-title">
        <h2>About Black Bucks</h2>
        <p>Meet the Founder and Stock Market Expert</p>
      </div>

      <div className="founder-details">
        <div className="founder-photo">
          <img src="https://github.com/Chandresh-collab/Profile/raw/main/WhatsApp%20Image%202025-02-08%20at%201.09.10%20PM.jpeg" alt="Chandresh Mali" />
        </div>
        <div className="founder-bio">
          <h3>Chandresh Mali - Founder & Stock Market Expert</h3>
          <p>
            Chandresh Mali is the founder of Arthos, a company that aims to educate and empower individuals to make informed decisions in the stock market. With over 4 years of experience, Chandresh has mastered the intricacies of the market and has successfully guided numerous clients in growing their wealth.
          </p>
          <p>
            His expertise lies in strategic portfolio management, risk assessment, and market analysis. With a passion for helping others achieve financial independence, Chandresh started Phoenix Capitals to share his knowledge and strategies with aspiring investors.
          </p>
        </div>
    </div>
    <div className='Team'> 
          <h2>Meet Our Team</h2>
        <div className="founder-profiles-container">
      {foundersData.map((founder) => (
        <Card
          key={founder.name}
          name={founder.name}
          title={founder.title}
        />
      ))}
    </div>
    </div>


      <div className="portfolio-details">
        <h3>Portfolio Performance</h3>
        <p>
          Black Bucks portfolio has seen impressive growth. The average return on investment has consistently outperformed the market over the years. 
        </p>
        <div className="portfolio-stats">
          <div className="stat">
            <h4>4<span>+</span> Years of Experience</h4>
            <p>We successfully navigated the stock market for over 4 years, with a deep understanding of both short-term trends and long-term investment strategies.</p>
          </div>
          <div className="stat">
            <h4>130%<span>+</span> Growth in an year</h4>
            <p>Arthos manages to provide consistent return to their investers, which serves as a testament to our skills in generating wealth in the stock market.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
