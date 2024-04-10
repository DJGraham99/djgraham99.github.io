import React from 'react';
import './CardComponent.css'; // Import CSS file for styling (see below)

const CardComponent = ({ title, subtitle, image, description, classes}) => {
  return (
    <div className={"card " + classes}>
      <div className="card-image" style={ { backgroundImage: `url(${image})`,  color: "white"}}/>
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <h3 className="card-subtitle">{subtitle}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default CardComponent;