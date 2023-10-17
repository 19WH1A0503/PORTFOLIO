import React from 'react';
import './StarrySky.css';

const StarrySky = () => {
  const createStars = () => {
    const stars = [];

    for (let i = 0; i < 1000; i++) {
      const size = Math.random() * 3;
      const animationDuration = 5 + Math.random() * 5;
      const left = Math.random() * 100;
      const top = Math.random() * 50;

      const starStyle = {
        width: `${size}px`,
        height: `${size}px`,
        left: `${left}%`,
        top: `${top}%`,
        animationDuration: `${animationDuration}s`,
      };

      stars.push(<div key={i} className="star" style={starStyle}></div>);
    }

    return stars;
  };

  return (
    <div className="starry-sky">
      {createStars()}
    </div>
  );
};

export default StarrySky;
