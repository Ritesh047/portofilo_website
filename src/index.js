import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material/styles'; // Import MUI ThemeProvider

// Define your custom theme here
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Set your primary color
    },
    secondary: {
      main: '#ff4081', // Set your secondary color
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    {/* Wrap your App component with ThemeProvider */}
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root') // Render it to the root div in your HTML
);
