import React from 'react'
import './Courses.css'
const Courses = () => {
  return (
    <div className="courses">
      <section className="about">
        <div className="section-title">
          <h2>About Our Courses</h2>
          <p>
            Our stock market courses are designed to teach you everything you need to know about stock trading.
            Whether you're a beginner or an experienced trader, we offer courses tailored to different skill levels.
            Learn the basics of stock analysis, technical indicators, chart patterns, and more. Start your journey
            with us and unlock your potential in the stock market!
          </p>
        </div>
      </section>
        <div className="section-title">
          <h2>Our Courses</h2>
        </div>
        <div className="courses-list">
          <div className="course">
            <h3>Beginner's Stock Market Course</h3>
            <p>Learn the fundamentals of the stock market, trading strategies, and risk management.</p>
            <button className="cta-button"><a href='https://forms.gle/YC7AFaEHRt4c1zXi7' style={{color:"white"}}>Enroll Now</a></button>
          </div>
          <div className="course">
            <h3>Advanced Stock Trading Course</h3>
            <p>Master technical analysis, charting, and day trading strategies to boost your profits.</p>
            <a className="cta-button" href="https://forms.gle/YC7AFaEHRt4c1zXi7">Enroll Now</a>
          </div>
          <div className="course">
            <h3>Arthos Premium Membership</h3>
            <p>Learn how to create an investment portfolio and manage it for long-term growth.</p>
            <a className="cta-button" href="https://forms.gle/rdBnCPXcqp49DRBT9">Enroll Now</a>
          </div>
    </div>
    </div>
  )
}

export default Courses
