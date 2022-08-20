require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const ITEMS_PATH = require('./routes/api/items');
const CATEGORIES_PATH = require('./routes/api/categories');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/public/dist'));
}

app.use(express.static(__dirname + '/assets'));

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`Mongo Connection Successful URI: ${process.env.MONGO_URI}`))
  .catch((err) => console.log(err));

app.use('/api/items', ITEMS_PATH);
app.use('/api/categories', CATEGORIES_PATH);

if (process.env.NODE_ENV === 'production') {
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './dist', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
