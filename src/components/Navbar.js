// src/components/AppBar.js
import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Box, Avatar, Switch } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';

const AppBarComponent = () => {
  const [visible, setVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setVisible(false);
      } else {
        // Scrolling up
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const handleThemeToggle = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: '#FFFFFF', // Change to white or your desired color
        boxShadow: 'none',
        transition: 'top 0.3s ease', // Smooth transition effect
        top: visible ? 0 : '-64px', // Change -64px based on your AppBar height
      }}
    >
      <Toolbar>
        <Box display="flex" alignItems="center" sx={{ flexGrow: 1 }}>
          <Avatar
            alt="Cătălin Onuțu" // Replace with your name
            src="/path/to/your/image.jpg" // Replace with your image path
            sx={{ width: 40, height: 40, border: '2px solid #1B263B' }} // Add a border around the avatar
          />
          <Typography variant="h6" sx={{ marginLeft: 2 }}>
            Cătălin Onuțu,
          </Typography>
        </Box>

        <Box>
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
          >
            <Typography variant="button" sx={{ marginRight: 2, color: '#1B263B', fontWeight: 'bold', cursor: 'pointer' }}>
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
            <Typography variant="button" sx={{ marginRight: 2, color: '#1B263B', fontWeight: 'bold', cursor: 'pointer' }}>
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
            <Typography variant="button" sx={{ color: '#1B263B', fontWeight: 'bold', cursor: 'pointer' }}>
              Contact
            </Typography>
          </ScrollLink>
        </Box>

        {/* Theme Toggle Switch */}
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
