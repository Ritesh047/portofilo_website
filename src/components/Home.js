import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import { Link as ScrollLink } from 'react-scroll'; // Import ScrollLink for navigation
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'; // Import icons
import backgroundImage from '../assets/images/home.jpg'; // Correct path to the image
import useMediaQuery from '@mui/material/useMediaQuery'; // Import useMediaQuery for responsive behavior

// Define custom font families
const customHeadingFont = "'Montserrat', sans-serif"; // New font for headings
const customBodyFont = "'Open Sans', sans-serif"; // New font for body text

const BackgroundBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  textAlign: 'center',
  padding: theme.spacing(10, 2),
  backgroundImage: `url(${backgroundImage})`, // Use the imported image
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover', // Ensure the background covers the entire area
  backgroundPosition: 'center', // Center the background image
  minHeight: '100vh', // Full viewport height
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '-64px', // Pull it up to overlap the AppBar (adjust based on AppBar height)
}));

const TextOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
  color: '#000000',
}));

// Sidebar for social icons
const Sidebar = styled(Box)(({ theme }) => ({
  position: 'fixed', // Make it fixed on the left side
  left: 0,
  top: '50%',
  transform: 'translateY(-50%)', // Vertically center the icons
  display: 'flex',
  flexDirection: 'column', // Arrange icons vertically
  alignItems: 'center',
  padding: theme.spacing(1),
  zIndex: 2, // Ensure it stays on top of other content
}));

// Individual icon styling
const SocialIconButton = styled(IconButton)(({ theme }) => ({
  color: '#000', // Default icon color
  marginBottom: theme.spacing(2), // Space between icons
  '&:hover': {
    color: '#2E5BFF', // Color change on hover
  },
}));

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const isMobile = useMediaQuery('(max-width:600px)'); // Media query for mobile devices

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    // Hide sidebar if scrolled more than 50px down
    if (scrollPosition > 50) {
      setShowSidebar(false);
    } else {
      setShowSidebar(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <BackgroundBox>
      {/* Social icons sidebar, only show on larger screens and when at the top */}
      {!isMobile && showSidebar && (
        <Sidebar>
          <SocialIconButton
            component="a"
            href="https://www.linkedin.com/in/ritesh-kumar-behera"
            target="_blank"
          >
            <FaLinkedin size={30} />
          </SocialIconButton>
          <SocialIconButton
            component="a"
            href="https://twitter.com/RiteshKumar047"
            target="_blank"
          >
            <FaTwitter size={30} />
          </SocialIconButton>
          <SocialIconButton
            component="a"
            href="https://github.com/Ritesh047"
            target="_blank"
          >
            <FaGithub size={30} />
          </SocialIconButton>
        </Sidebar>
      )}

      {/* Main content */}
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
