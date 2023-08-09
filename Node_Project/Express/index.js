const express = require('express');
const app = express();
const port = 3000;

// Middleware to log requests
app.use((req, res, next) => {
  console.log(`Received request: ${req.method} ${req.url}`);
  next();
});

// Route: Home page
app.get('/', (req, res) => {
  res.send('Welcome to the Express.js app!');
});

// Route: About page
app.get('/about', (req, res) => {
  res.send('This is the about page.');
});

app.get('/error', (req, res, next) => {
    const err = new Error('Simulated error');
    next(err);
  });

// Middleware for handling errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});



// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);

  
  
});
