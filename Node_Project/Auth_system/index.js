const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const auth = require('./auth'); // Import the auth module

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));

app.get('/', (req, res) => {
  res.send('Welcome to the authentication system!');
});

app.post('/register', (req, res) => {
  const { username, password } = req.body;
  auth.registerUser(username, password);
  res.send('User registered successfully!');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = auth.findUser(username, password);

  if (user) {
    req.session.user = user;
    res.send('Login successful!');
  } else {
    res.send('Invalid username or password.');
  }
});

app.get('/dashboard', (req, res) => {
  if (req.session.user) {
    res.send(`Welcome to your dashboard, ${req.session.user.username}!`);
  } else {
    res.send('You need to log in first.');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
