import React from 'react';
import './about.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <div className="card-container">
        <div className="card">
          <img src="/assets/img/coding.png" alt="Coding" />
          <h3>Developer Mindset</h3>
          <p>
            I love building clean, responsive user interfaces with React and modern web technologies.
          </p>
        </div>
        <div className="card">
          <img src="/assets/img/learning.png" alt="Learning" />
          <h3>Always Learning</h3>
          <p>
            Whether it’s a new JavaScript feature or a UI trend, I stay updated to deliver modern solutions.
          </p>
        </div>
        <div className="card">
          <img src="/assets/img/teamwork.png" alt="Teamwork" />
          <h3>Team Player</h3>
          <p>
            I enjoy collaborating, sharing ideas, and building projects that make a real impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
