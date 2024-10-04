import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import { Link as ScrollLink } from 'react-scroll'; // Import ScrollLink for navigation
import backgroundImage from '../assets/images/home.jpg'; // Correct path to the image

// Define custom font families
const customHeadingFont = "'Montserrat', sans-serif"; // New font for headings
const customBodyFont = "'Open Sans', sans-serif"; // New font for body text

const BackgroundBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  textAlign: 'center',
  padding: theme.spacing(10, 2),
  backgroundImage: `url(${backgroundImage})`, // Use the imported image
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
            fontFamily: customHeadingFont, // New font for the heading
          }}
        >
          Hey, I'm Ritesh!
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: '1.25rem', md: '1.5rem' },
            marginBottom: 4,
            fontFamily: customBodyFont, // New font for the body
            color: '#555555', // Soft gray for the secondary text
            maxWidth: '600px', // Set a max width for better readability
            mx: 'auto', // Center the text horizontally
          }}
        >
          A passionate <strong>Full Stack Java Developer</strong> focused on creating
          <strong> innovative web applications</strong> that offer seamless user experiences.
        </Typography>
        <ScrollLink to="about" spy={true} smooth={true} duration={500} offset={-70}>
          <Button
            variant="contained"
            color="primary"
            sx={{
              padding: '10px 30px',
              fontSize: '1.1rem',
              borderRadius: '8px',
              fontFamily: customBodyFont, // Use body font for the button
              backgroundColor: '#2E5BFF', // Blue button color similar to the image
              boxShadow: '0 4px 12px rgba(46, 91, 255, 0.4)',
              '&:hover': {
                backgroundColor: '#0056b3', // Darker shade on hover
              },
            }}
          >
            About Me
          </Button>
        </ScrollLink>
      </TextOverlay>
    </BackgroundBox>
  );
};

export default Home;
