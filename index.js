const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const route = require('./routes/userRoute.js');

const app = express();
app.use(bodyParser.json());
dotenv.config();
const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGO_URL;

// Code to connect with Mongo db...
async function connect() {
  await mongoose.connect(MONGOURL);
  console.log('Database is connected successfully');

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
connect();

app.use('/api/user', route);
