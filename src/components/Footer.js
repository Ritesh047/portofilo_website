// src/components/Footer.js
import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { LinkedIn, GitHub, Twitter } from '@mui/icons-material'; // Import social media icons
import './Footer.css'; 

const Footer = () => {
  return (
    <Box sx={{ 
      textAlign: 'center', 
      py: 3, 
      backgroundColor: '#1B263B', // Dark background
      color: 'white', 
      position: 'relative', 
      zIndex: 10 
    }}>
      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
        Ritesh Kumar Behera
      </Typography>
      <Typography variant="body2" sx={{ mb: 1 }}>
      A passionate Full Stack Java Developer focused on creating
       innovative web applications that offer seamless user experiences.
      </Typography>
      <Typography variant="body2" sx={{ mb: 2 }}>
        &copy; 2024 Ritesh Kumar Behera. All Rights Reserved.
      </Typography>
      
      {/* Social Media Icons */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <IconButton href="www.linkedin.com/in/ritesh-kumar-behera" color="inherit">
          <LinkedIn />
        </IconButton>
        <IconButton href="https://github.com/Ritesh047" color="inherit">
          <GitHub />
        </IconButton>
        <IconButton href="https://twitter.com/RiteshKumar047" color="inherit">
          <Twitter />
        </IconButton>
       
      </Box>

      
    </Box>
  );
};

export default Footer;
