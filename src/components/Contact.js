// src/components/Contact.js
import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

const Contact = () => {
  return (
    <Container>
      <Box sx={{ mt: 5 }}>
        <Typography variant="h4" gutterBottom>
          Contact Me
        </Typography>
        <TextField label="Your Name" fullWidth sx={{ mb: 2 }} />
        <TextField label="Your Email" fullWidth sx={{ mb: 2 }} />
        <TextField label="Your Message" fullWidth multiline rows={4} sx={{ mb: 2 }} />
        <Button variant="contained" color="primary">
          Send Message
        </Button>
      </Box>
    </Container>
  );
};

export default Contact;
