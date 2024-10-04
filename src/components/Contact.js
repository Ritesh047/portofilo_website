import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Grid, Alert } from '@mui/material';
import axios from 'axios'; // Import axios to make HTTP requests
import './Contact.css'; // Import the CSS file

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [responseMessage, setResponseMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/contact', formData);

      if (response.status === 200) {
        setResponseMessage('Your message was sent successfully!');
        setIsError(false);
      } else {
        setResponseMessage('Failed to send your message. Please try again.');
        setIsError(true);
      }
    } catch (error) {
      console.error('Error sending message:', error.response ? error.response.data : error.message);
      setResponseMessage('Error sending message: ' + (error.response ? error.response.data : error.message));
      setIsError(true);
    }
  };

  return (
    <Container className="contact-container">
      <Box sx={{ mt: 5 }}>
        <Typography variant="h4" className="contact-title" gutterBottom>
          Contact Me
        </Typography>

        {responseMessage && (
          <Alert severity={isError ? 'error' : 'success'} sx={{ mb: 2 }}>
            {responseMessage}
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12} md={6}>
              <TextField
                label="Your Name"
                fullWidth
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Your Email"
                fullWidth
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                type="email"
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12}>
              <TextField
                label="Your Message"
                fullWidth
                multiline
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </Grid>
          </Grid>
          <Button variant="contained" type="submit">
            Send Message
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Contact;
