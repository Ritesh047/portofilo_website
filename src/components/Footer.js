// src/components/Footer.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ textAlign: 'center', py: 3, mt: 5, backgroundColor: '#f5f5f5' }}>
      <Typography variant="body2" color="textSecondary">
        &copy; 2024 Ritesh Kumar Behera. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
