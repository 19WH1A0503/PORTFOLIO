import StarrySky from './StarrySky';
import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <div className="starrySkyWrapper">
        <StarrySky />
      </div>
      <div className="frontPage">
        <div className="small_des">Developer</div>
        <div className="Name">Pragna Bairu</div>
        <div className="description">
          I'm an enthusiastic techie looking to learn and grow my knowledge and skills by contributing to savvy products.
        </div>
      </div>
    </div>
  );
}

export default Home;
