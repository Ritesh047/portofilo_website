import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';
import weatherImage from '../assets/images/weather.jpg'; // Ensure this path is correct

const project = {
  title: 'Weather Finder',
  description: 'Real-time weather forecasting and analytics application utilizing OpenWeatherMap API.',
  skills: ['JavaScript', 'React.js', 'Redux', 'HTML', 'CSS', 'OpenWeather API'],
  image: weatherImage, // Use the imported image
};

const Projects = () => {
  return (
    <Container sx={{ marginY: 8, padding: 5 }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={8}>
          <Card
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' }, // Stack vertically on small screens
              borderRadius: 1,
              overflow: 'hidden',
              boxShadow: 10,
            }}
          >
            <Box
              sx={{
                width: { xs: '100%', md: '50%' }, // Full width on small screens, 50% on medium+
                height: { xs: '200px', md: '355px' }, // Adjust height for mobile
                backgroundImage: `url(${project.image})`,
                backgroundSize: 'cover', // Ensure the image fills the Box while maintaining aspect ratio
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat', // Prevent the image from repeating
              }}
            />
            <CardContent
              sx={{
                width: { xs: '100%', md: '50%' }, // Full width on mobile, 50% on larger screens
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: 3,
              }}
            >
              <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', color: '#1B263B' }}>
                {project.title}
              </Typography>
              <Typography variant="body1" sx={{ marginY: 2, color: '#666' }}>
                {project.description}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', marginBottom: 2 }}>
                {project.skills.map((skill, index) => (
                  <Typography
                    key={index}
                    variant="body2"
                    sx={{
                      backgroundColor: '#F6BD60',
                      borderRadius: 2,
                      padding: '4px 8px',
                      marginRight: 1,
                      marginBottom: 1,
                      color: '#1B263B',
                    }}
                  >
                    {skill}
                  </Typography>
                ))}
              </Box>
              <Button variant="contained" color="primary" href="https://yourprojectlink.com" target="_blank">
                Check it
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Projects;
