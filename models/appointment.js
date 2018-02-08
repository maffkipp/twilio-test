const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  name: String,
  phoneNumber: String,
  notification: Number,
  timeZone: String,
  time: { type: Date, index: true }
});

const Appointment = mongoose.model('Appointment', AppointmentSchema);

module.exports = {
  Appointment: Appointment
};
