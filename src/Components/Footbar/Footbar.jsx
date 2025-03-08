import React from 'react';
import './Footbar.css'; // The CSS file to style the footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section-about">
          <h2>About Black Bucks</h2>
          <p>
            We are dedicated to providing stock market education and
            portfolio management services to help investors achieve their
            financial goals.
          </p>
        </div>

        <div className="footer-section services">
          <h2>Services</h2>
          <ul>
            <li><a href="#online-classes">Online Classes</a></li>
            <li><a href="#portfolio-management">Portfolio Management</a></li>
            <li><a href="#financial-advice">Financial Advice</a></li>
          </ul>
        </div>


        <div className="footer-section-contact">
          <h2>Contact</h2>
          <ul>
            <li>Email: <a href="mailto:contact@phoenixcapitals.com">malichetas@gmail.com</a></li>
            <li>Phone: +91 9421935014</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <p>&copy; 2025 Arthos | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
