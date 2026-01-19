const fs = require('fs');
const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');
const user = require('../../model/userModel');
dotenv.config({
  path: '../../.env',
});

//connecting database.
async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Database connected successfully');
  } catch (err) {
    console.log(err);
  }
}
connect();

//READ JSON FILE
const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`, 'utf-8'));
console.log(users);

//Import data..

const importData = async () => {
  try {
    await user.create(users);
    console.log('Data successfully inserted');
  } catch (err) {
    console.log(err);
  }
};

importData();
