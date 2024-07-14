// src/components/ClubCard.jsx
import React, { useState } from 'react';

const ClubCard = ({ club }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div
      className="club-card-container"
      onClick={handleFlip}
    >
      <div className={`club-card ${flipped ? 'flipped' : ''}`}>
        <div className="club-card-front">
          <img src={club.image} alt={club.name} className="club-card-image" />
        </div>
        <div className="club-card-back">
          <h2 className="club-card-title">{club.name}</h2>
          <p className="club-card-description">{club.description}</p>
          <button className="club-card-button">Explore</button>
        </div>
      </div>
    </div>
  );
};

export default ClubCard;
