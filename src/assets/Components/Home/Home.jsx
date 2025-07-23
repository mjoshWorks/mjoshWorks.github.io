import React from 'react';
import './home.css';


const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1>Hello, I'm <span className="highlight">Mcquinley Josh Maglangit</span></h1>
        <h2>Aspiring Front-End Developer</h2>
        <p>
          I'm passionate about creating user-friendly and visually engaging websites. 
          I focus on clean code, responsive design, and continuously improving my skills in React and web development.
        </p>
        <a href="#reach" className="btn">Get in Touch</a>
      </div>
      <div className="home-image">
        {/* profile image  */}
        <img src="/assets/img/profile.jpg" alt="Josh Profile" />
      </div>
    </section>
  );
};

export default Home;
