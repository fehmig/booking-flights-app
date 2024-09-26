const Reservation = require('../models/reservationModel.js');

// yeni rezervasyon oluşturma işlemi
const createReservation = async (req, res) => {
  const reservationsData = req.body;

  try {
    const newReservation = new Reservation(
      reservationsData
);
    
    await newReservation.save();
    res.status(201).json({ message: 'Reservation successful', reservation: newReservation });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create reservation', error });
  }
};

// tüm rezervasyonları listelemek için
const getReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.status(200).json(reservations);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch reservations', error });
  }
};

module.exports = { createReservation, getReservations };
