// Dependencies
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// DB import (move to seperate 'routes' dir)
const db = require('./models');
const appointment = require('./models/appointment');

// App Setup
const app = express();
const port = process.env.PORT || 3000;

app.set('views', './views');
app.set('view engine', 'ejs');

// App Routes
app.get('/', (req, res) => {
  res.send(`App is running on port ${port}`);
});

app.get('/create', (req, res) => {
  const newAppointment = new db.Appointment({
    name: 'Test appointment',
    phoneNumber: '1111111111',
    notification: 12,
    timeZone: 'CST',
    time: Date.now()
  });
  newAppointment.save((err, savedAppointment) => {
    if (err) console.error(err);
    else {
      console.log('Appointment Saved!!!!');
    }
  });
  res.redirect('/');
});

// Run Server
app.listen(port, err => {
  err ? console.log(err) : console.log(`App is running on port ${port}`);
});
