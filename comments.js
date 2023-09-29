// Create web server application
// To run: npm start
// To test: http://localhost:3000/comments

// Load the express module
const express = require('express');

// Create an instance of express
const app = express();

// Load the body-parser module
const bodyParser = require('body-parser');

// Load the comments module
const comments = require('./comments');

// Load the cors module
const cors = require('cors');

// Configure the body-parser middleware
app.use(bodyParser.json());

// Configure the cors middleware
app.use(cors());

// Configure the static middleware
app.use(express.static('public'));

// Configure the comments middleware
app.use('/comments', comments);

// Create a server that listens on port 3000
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});