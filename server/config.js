const dotenv = require('dotenv');
const path = require('path');
const mongoose = require('mongoose');

dotenv.config({
  path: path.resolve(__dirname, `.env.${process.env.NODE_ENV}`),
});

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Mongo Connection Successful'))
  .catch((err) => console.log(err));
