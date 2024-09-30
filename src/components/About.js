import React from 'react';
import './about.css';

const About = () => {
  return (
    <section id="about">
      <h3>About Me</h3>
      
      <div className="content-container">
        {/* Description section */}
        <div className="description">
          <p>
            Hello! I’m Ritesh Kumar Behera, a passionate Java Full Stack Developer with a recent graduate in upskillinng at AcademiXEdu. My journey in technology began with a fascination for coding and problem-solving, which has evolved into a deep love for building dynamic and responsive web applications.
          </p>
          <p>
            I specialize in creating user-friendly and efficient applications using technologies like Java, Spring Boot, React, and Redux. My goal is to deliver seamless experiences through clean, maintainable code and innovative solutions. I enjoy collaborating with teams to bring ideas to life and contribute to projects that make a difference.
          </p>
          <p>
            In my free time, I love exploring new technologies, contributing to open-source projects, and engaging with the developer community. I believe in continuous learning and strive to stay updated with the latest trends in software development.
          </p>
          <button className="about-btn">Projects</button>
        </div>

        {/* Toolkit section */}
        <div className="tech-stack">
          <h5>My Toolkit</h5>
          <div className="chip-container">
            <div className="chip">JavaScript</div>
            <div className="chip">React</div>
            <div className="chip">Redux</div>
            <div className="chip">HTML</div>
            <div className="chip">CSS</div>
            <div className="chip">Spring Boot</div>
            <div className="chip">MongoDB</div>
            <div className="chip">MySQL</div>
            <div className="chip">React Native</div>
            <div className="chip">Git & GitHub</div>
            {/* Add more chips as needed */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
