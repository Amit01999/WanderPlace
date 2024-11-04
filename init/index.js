const mongoose = require('mongoose');
const initData = require('./data.js');
const Listing = require('../models/listing.js');

const MONGO_URL =
  'mongodb+srv://Shopno:Shopno24@cluster1.npnsgne.mongodb.net/WanderPlace?retryWrites=true&w=majority&appName=Cluster1';

main()
  .then(() => {
    console.log('connected to DB');
  })
  .catch(err => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  // await Listing.deleteMany({});
  initData.data = initData.data.map(obj => ({
    ...obj,
    owner: '66a9d1203c5613a662bc4907',
  }));
  await Listing.insertMany(initData.data);
  console.log('data was initialized');
};

initDB();
