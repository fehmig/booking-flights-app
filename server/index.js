const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const database = require('./config/database.js');
const reservationRoutes = require('./routes/reservationRoutes.js');
const axios = require('axios')


dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json({limit:'30mb', extended: true}));
app.use(bodyParser.urlencoded({limit:'30mb', extended: true}));
app.use('/api/reservations', reservationRoutes);


// uçuşları almak için endpoint
app.get('/api/flights', async (req, res) => {


  try {
    const response = await axios.get('https://api.schiphol.nl/public-flights/flights', {
     
      headers: {
        Accept: "application/json",
        app_id: process.env.appId,
        app_key: process.env.appKey,
        ResourceVersion: "v4",
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error("API çağrısı sırasında hata:", error.message);
    res.status(500).json({ message: "Uçuşlar alınırken bir hata oluştu" });
  }
});


const PORT = process.env.PORT || 5000;

database();

app.listen(PORT, () => {
    console.log("Server is running on: ", PORT);
});