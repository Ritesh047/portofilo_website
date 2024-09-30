// src/components/Home.js
import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { styled } from '@mui/system';

const BackgroundBox = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginTop: theme.spacing(15), // Adjust this value to match the height of your fixed navbar
  padding: theme.spacing(10, 2),
  backgroundImage: 'url("/path-to-your-background-image.svg")',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
}));

const Home = () => {
  return (
    <BackgroundBox>
      <Container>
        <Typography 
          variant="h3" 
          gutterBottom 
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '2.5rem', md: '4rem' }, 
          }}
        >
          Hey, I'm Ritesh!
        </Typography>
        <Typography 
          variant="h5" 
          color="textSecondary" 
          sx={{ 
            fontSize: { xs: '1.2rem', md: '1.5rem' },
            marginBottom: 4,
          }}
        >
          A passionate <strong style={{ color: '#007bff' }}>Java Full Stack Developer</strong> dedicated to creating 
          <strong style={{ color: '#007bff' }}> dynamic web applications</strong> that enhance user experiences 
          and provide innovative solutions.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ padding: '10px 20px', fontSize: '1.2rem', borderRadius: '5px' }}
        >
          About Me
        </Button>
      </Container>
    </BackgroundBox>
  );
};

export default Home;
