import React from 'react';
import { AppBar, Toolbar, Typography, Box, Avatar, useMediaQuery, useTheme } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';
import './Appbar.css';
import rituImage from '../assets/images/ritu.jpg'; // Adjust path based on your structure

const AppBarComponent = () => {
  const theme = useTheme(); // Get the current theme
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check if screen is mobile size

  return (
    <AppBar
      position="sticky" // Keep the app bar sticky at the top
      sx={{
        backgroundColor: '#FFFFFF',
        boxShadow: 'none',
        zIndex: 1200, // Ensure it stays above other components
        padding: isMobile ? '10px' : '0 20px', // Add padding for mobile
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box display="flex" alignItems="center" sx={{ flexGrow: 1 }}>
          <Avatar
            alt="Ritesh Kumar Behera"
            src={rituImage} // Use the imported image
            sx={{ width: { xs: 40, md: 56 }, height: { xs: 40, md: 56 }, border: '2px solid #1B263B' }} // Responsive size
          />
          {!isMobile && ( // Hide name on mobile
            <ScrollLink to="home" spy={true} smooth={true} duration={500} offset={-70}>
              <Typography
                variant="h6"
                sx={{
                  marginLeft: 2,
                  color: '#1B263B',
                  fontWeight: 'bold',
                  fontFamily: 'Arial, sans-serif', // Change to your preferred font
                  fontSize: { xs: '1rem', md: '1.5rem' }, // Responsive font size
                  cursor: 'pointer', // Change cursor to pointer for interactivity
                }}
              >
                Ritesh Kumar Behera
              </Typography>
            </ScrollLink>
          )}
        </Box>

        <Box display="flex" alignItems="center">
          {['about', 'projects', 'contact'].map((section) => (
            <ScrollLink
              key={section}
              to={section}
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
            >
              <Typography
                variant="button"
                sx={{
                  marginRight: { xs: 1, md: 3 }, // Adjust margin based on screen size
                  color: '#1B263B',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  fontFamily: 'Courier New, monospace', // Change to your preferred font
                  fontSize: { xs: '0.9rem', md: '1rem' }, // Responsive font size
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)} {/* Capitalize first letter */}
              </Typography>
            </ScrollLink>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
