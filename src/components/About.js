// About.js
import React from 'react';
import './about.css'; // Make sure to create this CSS file

const About = () => {
    return (
        <div id="about">
            <h3 className="section-title">About Me</h3>

            <div className="content-container">
                <div className="description">
                    <h4>Get to know me!</h4>
                    <p>
                        Hello! I’m Ritesh Kumar Behera, a passionate Java Full Stack Developer and recent graduate from 
                        <a 
                            href="https://www.academixedu.net/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="academy-link"
                        >
                            AcademiXEdu
                        </a>.
                    </p>
                    <p>
                        My journey in technology started with a fascination for coding and problem-solving, leading me to specialize in creating dynamic web applications using Java, Spring Boot, React, and Redux.
                    </p>
                    <p>
                        I aim to deliver seamless user experiences through clean, maintainable code and innovative solutions, enjoying collaboration with teams to bring ideas to life.
                    </p>
                    <p>
                        In my free time, I explore new technologies, contribute to open-source projects, and engage with the developer community, all while striving for continuous learning in the evolving landscape of software development.
                    </p>
                    <button className="about-btn">Projects</button>
                </div>

                <div className="tech-stack">
                    <h4>My Skills</h4>
                    <div className="chip-container">
                        <div className="chip">Java</div>
                        <div className="chip">JavaScript</div>
                        <div className="chip">React.js</div>
                        <div className="chip">Node.js</div>
                        <div className="chip">Redux</div>
                        <div className="chip">HTML</div>
                        <div className="chip">CSS</div>
                        <div className="chip">MySQL</div>
                        <div className="chip">MongoDB</div>
                        <div className="chip">Spring Boot</div>
                        <div className="chip">Git & GitHub</div>
                        <div className="chip">Microservices</div>
                        <div className="chip">REST APIs</div>
                        <div className="chip">Docker</div>
                        <div className="chip">Microsoft Office</div>
                        <div className="chip">Good Communication</div>
                        <div className="chip">Problem Solving</div>
                        <div className="chip">Critical Thinking</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
