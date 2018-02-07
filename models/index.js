const mongoose = require('mongoose');
require('dotenv').config();

const appointmentModels = require('./appointment');

// fix promise bug
mongoose.Promise = global.Promise;

// connect to MongoDB
mongoose.connection.openUri(process.env.MONGODB_URI || process.env.DB_CONN, {}, (err, conn) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Mongoose successfully connected to MongoDB.');
  }
});

module.exports = {
  Appointment: appointmentModels.Appointment
};
