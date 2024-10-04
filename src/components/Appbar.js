// src/components/AppBar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Box, Avatar, Switch } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';
import './Appbar.css';

const AppBarComponent = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  const handleThemeToggle = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <AppBar
      position="sticky" // Change to sticky for a stable app bar
      sx={{
        backgroundColor: '#FFFFFF',
        boxShadow: 'none',
        zIndex: 1200, // Ensure it stays above other components
      }}
    >
      <Toolbar>
        <Box display="flex" alignItems="center" sx={{ flexGrow: 1 }}>
          <Avatar
            alt="Ritesh Kumar Behera"
            src="/assets/image/ritu.jpg" // Replace with your image path
            sx={{ width: 56, height: 56, border: '2px solid #1B263B' }} // Update size and border
          />
          <Typography
            variant="h6"
            sx={{
              marginLeft: 2,
              color: '#1B263B',
              fontWeight: 'bold',
              fontFamily: 'Arial, sans-serif', // Change to your preferred font
            }}
          >
            Ritesh Kumar Behera
          </Typography>
        </Box>

        <Box display="flex" alignItems="center">
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
          >
            <Typography
              variant="button"
              sx={{
                marginRight: 3,
                color: '#1B263B',
                fontWeight: 'bold',
                cursor: 'pointer',
                fontFamily: 'Courier New, monospace', // Change to your preferred font
              }}
            >
              About
            </Typography>
          </ScrollLink>

          <ScrollLink
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
          >
            <Typography
              variant="button"
              sx={{
                marginRight: 3,
                color: '#1B263B',
                fontWeight: 'bold',
                cursor: 'pointer',
                fontFamily: 'Courier New, monospace', // Change to your preferred font
              }}
            >
              Projects
            </Typography>
          </ScrollLink>

          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
          >
            <Typography
              variant="button"
              sx={{
                color: '#1B263B',
                fontWeight: 'bold',
                cursor: 'pointer',
                fontFamily: 'Courier New, monospace', // Change to your preferred font
              }}
            >
              Contact
            </Typography>
          </ScrollLink>
        </Box>

        <Switch
          checked={darkMode}
          onChange={handleThemeToggle}
          color="primary"
          sx={{ marginLeft: 3 }}
        />
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
