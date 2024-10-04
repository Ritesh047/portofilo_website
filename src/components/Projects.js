import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';
import weatherImage from '../assets/images/weather.jpg'; // Ensure this path is correct
import movieflixImage from '../assets/images/movie.jpg'; // Add CinemaHub image path
import './Project.css'; // Import the CSS file

const projects = [
  {
    title: 'Weather Finder',
    description: 'Real-time weather forecasting and analytics application utilizing OpenWeatherMap API.',
    skills: ['JavaScript', 'React.js', 'Redux', 'HTML', 'CSS', 'OpenWeather API'],
    image: weatherImage,
    link: 'https://locationweatherfinder.netlify.app/',
  },
  {
    title: 'CinemaHub',
    description: 'A movie discovery app to explore top-rated films and access detailed information, leveraging the TMDb API.',
    skills: ['JavaScript', 'React.js', 'Material UI', 'TMDb API', 'CSS', 'Spring-Boot', 'MySQL'],
    image: movieflixImage,
    link: 'https://mvoieflixx.netlify.app/',
  }
];

const Projects = () => {
  return (
    <Container className="container">
      <Typography variant="h4" className="title">
         Projects
      </Typography>
      <Grid container spacing={4} direction="column" justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={15} key={index}> {/* Full width for each project */}
            <Card className="project-card">
              {/* Image Box */}
              <Box
                className="card-image"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              {/* Project Details */}
              <CardContent className="card-content">
                <Typography variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body1">
                  {project.description}
                </Typography>
                {/* Skills */}
                <Box className="skills-container">
                  {project.skills.map((skill, skillIndex) => (
                    <Typography key={skillIndex} className="skill">
                      {skill}
                    </Typography>
                  ))}
                </Box>
                <Button
                  className="button"
                  href={project.link}
                  target="_blank"
                >
                  Check it out
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
