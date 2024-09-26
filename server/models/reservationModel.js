//veritabanı yapısı, kaydettiiğim uçuş bilgileri bunlardır

const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  flightName: { type: String, required: true },
  scheduleDateTime: { type: Date, required: true },
  estimatedLandingTime:{type: Date, required: true},
  origins: { type: String, required: true },
  destinations: { type: String, required: true },
  userName: { type: String, required: true }, 
});

const Reservation = mongoose.model('Reservation', reservationSchema);
module.exports = Reservation;
