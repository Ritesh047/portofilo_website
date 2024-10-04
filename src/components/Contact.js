import React from 'react';
import { Container, Typography, TextField, Button, Box, Grid } from '@mui/material';
import './Contact.css'; // Import the CSS file

const Contact = () => {
  return (
    <Container className="contact-container">
      <Box sx={{ mt: 5 }}>
        <Typography variant="h4" className="contact-title" gutterBottom>
          Contact Me
        </Typography>
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={12} md={6}>
            <TextField label="Your Name" fullWidth className="text-field" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField label="Your Email" fullWidth className="text-field" />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={12}>
            <TextField label="Your Message" fullWidth multiline rows={4} className="text-field" />
          </Grid>
        </Grid>
        <Button variant="contained" className="send-button">
          Send Message
        </Button>
      </Box>
    </Container>
  );
};

export default Contact;
