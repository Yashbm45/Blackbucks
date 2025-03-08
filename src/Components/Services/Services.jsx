import React from 'react';
import './Services.css'; // Import custom CSS for styling
import SchoolIcon from '@mui/icons-material/School'; // Use School Icon for online classes
import PortfolioIcon from '@mui/icons-material/AccountBalance'; // MUI Icon for portfolio management
import AdviceIcon from '@mui/icons-material/Person'; // MUI Icon for personal advice
import FinancialIcon from '@mui/icons-material/AttachMoney'; // MUI Icon for financial advice

const ServicesSection = () => {
  return (
    <div className="services-section">
      <div className="section-title">
        <h2>Our Services</h2>
        <p>We offer a range of services to help you succeed in the stock market. Whether you're looking for personal advice or professional portfolio management, we got you covered.</p>
      </div>

      <div className="services-container">
        {/* Online Classes Service */}
        <div className="service">
          <SchoolIcon className="service-icon" />
          <h3>Online Classes</h3>
          <p>Learn at your own pace with our comprehensive online stock market courses. From beginner to advanced levels, we provide all the tools you need to succeed.</p>
        </div>

        {/* Personal Portfolio Management Service */}
        <div className="service">
          <PortfolioIcon className="service-icon" />
          <h3>Personal Portfolio Management</h3>
          <p>We help you build and manage a personalized investment portfolio that aligns with your financial goals and risk tolerance.</p>
        </div>

        {/* Personal Advice Service */}
        <div className="service">
          <AdviceIcon className="service-icon" />
          <h3>Personal Advice</h3>
          <p>Get one-on-one advice tailored to your specific needs, whether you're just starting out or looking to optimize your trading strategy.</p>
        </div>

        {/* Financial Advice Service */}
        <div className="service">
          <FinancialIcon className="service-icon" />
          <h3>Financial Advice</h3>
          <p>Our financial experts provide insightful guidance on investment strategies, market trends, and how to navigate the complexities of finance.</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
