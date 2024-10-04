import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { styled } from '@mui/system';
import './Home.css'; // Make sure your CSS file contains the correct background

const BackgroundBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  textAlign: 'center',
  padding: theme.spacing(10, 2),
  backgroundImage: 'url("/mnt/data/A_minimalistic_web_page_background_with_flowing,_c.png")', // Use the generated image here
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const TextOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
  color: '#000000',
}));

const Home = () => {
  return (
    <BackgroundBox>
      <TextOverlay>
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '3rem', md: '4rem' }, // Responsive font size
            fontFamily: "'Poppins', sans-serif",  // Use Poppins for the heading
          }}
        >
          Hey, I'm Ritesh!
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: '1.25rem', md: '1.5rem' },
            marginBottom: 4,
            fontFamily: "'Roboto', sans-serif",  // Roboto for the paragraph
            color: '#555555',  // Soft gray for the secondary text
          }}
        >
          A passionate <strong>Full Stack Java Developer</strong> focused on creating
          <strong> innovative web applications</strong> that offer seamless user experiences.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{
            padding: '10px 30px',
            fontSize: '1.1rem',
            borderRadius: '8px',
            fontFamily: "'Poppins', sans-serif",  // Use Poppins for the button
            backgroundColor: '#2E5BFF',  // Blue button color similar to the image
            boxShadow: '0 4px 12px rgba(46, 91, 255, 0.4)',
            '&:hover': {
              backgroundColor: '#0056b3', // Darker shade on hover
            },
          }}
        >
          About Me
        </Button>
      </TextOverlay>
    </BackgroundBox>
  );
};

export default Home;
