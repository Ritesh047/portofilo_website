// index.js or main.js (your entry file)
import React from 'react';
import ReactDOM from 'react-dom/client'; // Change this import
import App from './App'; // Adjust the import based on your file structure

// Create a root element
const root = ReactDOM.createRoot(document.getElementById('root')); // Change this line

// Render your App
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
