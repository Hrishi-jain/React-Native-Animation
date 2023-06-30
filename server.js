const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // Change the port number as per your preference

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.post('/login', (req, res) => {
  const { name, email } = req.body;

  console.log('Received data:', name, email);
  res.send('Data received successfully');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});