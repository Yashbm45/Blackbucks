import React from 'react';
import './Card.css'; // You can style this component using the same CSS file

const Card = ({ image, name, title,education, bio }) => {
  return (
    <div className="management-card">
      <div className="management-bio">
        <h3>{name}</h3>
        <h4>- {title} </h4>
        <span>{education}</span>
      </div>
    </div>
  );
}

export default Card;
