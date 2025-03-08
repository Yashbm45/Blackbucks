import React, { useEffect } from 'react';
import './FallingMoney.css'; // Make sure to create the accompanying CSS file

const FallingMoney = () => {
  useEffect(() => {
    // You can add more logic if you want to control when and how the money falls
  }, []);

  return (
    <div className="money-animation">
      <span className="money-icon">$</span>
      <span className="money-icon">€</span>
      <span className="money-icon">¥</span>
      <span className="money-icon">₹</span>
      <span className="money-icon">£</span>
    </div>
  );
};

export default FallingMoney;
