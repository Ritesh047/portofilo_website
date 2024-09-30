// src/components/Projects.js
import React from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';

const projects = [
  {
    title: 'Weather App',
    description: 'A weather forecasting app built with React and OpenWeatherMap API.',
    image: 'project1.png'
  },
  {
    title: 'Movie App',
    description: 'A movie browsing app built with TMDB API and React.',
    image: 'project2.png'
  }
];

const Projects = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        My Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={`assets/images/${project.image}`}
                alt={project.title}
              />
              <CardContent>
                <Typography variant="h5">{project.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
