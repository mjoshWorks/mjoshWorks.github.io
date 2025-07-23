import React from 'react';
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';
import './socialLinks.css';

const SocialLinks = () => {
  return (
    <section id="sociallinks" className="social-links">
      <a
        href="https://github.com/mjoshWorks"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.facebook.com/m.josh03"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
      >
        <FaFacebook />
      </a>
      <a
        href="https://www.linkedin.com/in/mcquinley-josh-maglangit-08a957281/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
      >
        <FaLinkedin />
      </a>
    </section>
  );
};

export default SocialLinks;
