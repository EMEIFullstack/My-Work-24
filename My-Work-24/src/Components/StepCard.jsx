import React from 'react';
import './StepCard.scss';

function StepCard({ title, description, icon }) {
  return (
    <div className="step-card">
      <div className="icon-wrapper">
        {/* We will render the icon here */}
        {icon}
      </div>
      <div className="step-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default StepCard;