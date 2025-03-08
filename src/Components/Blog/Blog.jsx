import React from 'react';
import './Blog.css'; // Custom CSS for styling

const blogPosts = [
  {
    title: 'Understanding Stock Market Basics',
    summary: 'A beginner’s guide to understanding the stock market, including how it works, types of stocks, and the importance of market indices.',
    date: 'January 15, 2025',
    link: ''
  },
  {
    title: 'How to Build a Strong Stock Portfolio',
    summary: 'Learn the strategies for creating a diverse and strong stock portfolio to minimize risks and maximize returns over the long term.',
    date: 'February 5, 2025',
    link: 'https://www.linkedin.com/posts/chandresh-mali-143974221_how-to-build-a-strong-stock-portfolio-activity-7300419338136637441-tEvE?utm_medium=ios_app&rcm=ACoAADfZjsMB2aOsfQfEOzaBMxEFnoivg19N8sI&utm_source=social_share_send&utm_campaign=whatsapp'
  },
  {
    title: 'Top 5 Investment Strategies for Beginners',
    summary: 'An overview of the best stock market investment strategies for beginners. This post covers value investing, growth investing, and more.',
    date: 'February 10, 2025',
    link: 'https://www.linkedin.com/posts/chandresh-mali-143974221_top-5-investment-strategies-for-beginners-activity-7298613798666448896-uBWq?utm_medium=ios_app&rcm=ACoAADfZjsMB2aOsfQfEOzaBMxEFnoivg19N8sI&utm_source=social_share_send&utm_campaign=whatsapp'
  },
  {
    title: 'The Impact of Economic Indicators on Stock Prices',
    summary: 'Economic indicators such as GDP, inflation rates, and unemployment figures can significantly affect the stock market. Learn how to interpret them.',
    date: 'February 15, 2025',
    link: 'https://www.linkedin.com/posts/chandresh-mali-143974221_how-to-build-a-strong-stock-portfolio-activity-7300419338136637441-tEvE?utm_medium=ios_app&rcm=ACoAADfZjsMB2aOsfQfEOzaBMxEFnoivg19N8sI&utm_source=social_share_send&utm_campaign=whatsapp'
  },
  {
    title: 'The Role of Risk Management in Stock Market Investing',
    summary: 'Effective risk management is key to successful investing. This post explains risk assessment techniques to help you protect your investments.',
    date: 'February 20, 2025',
    link: '#blog5'
  }
];

const Blog = () => {
  return (
    <div className="blog-section">
      <div className="section-title">
        <h2>Latest Blogs</h2>
        <p>Stay updated with our latest insights, strategies, and tips to enhance your stock market journey.</p>
      </div>

      <div className="blog-posts">
        {blogPosts.map((post, index) => (
          <div className="blog-post" key={index}>
            <h3 className="blog-title">{post.title}</h3>
            <p className="blog-summary">{post.summary}</p>
            <p className="blog-date">{post.date}</p>
            <a href={post.link} className="read-more">Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
