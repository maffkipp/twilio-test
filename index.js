// Dependencies
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// App Setup
const app = express();
const port = process.env.PORT || 3000;

// App Routes
app.get('/', (req, res) => {
  res.send(`App is running on port ${port}`);
});

app.get('/create', (req, res) => {
  res.render('appointments/create');
});

// Run Server
app.listen(port, err => {
  err ? console.log(err) : console.log(`App is running on port ${port}`);
});
