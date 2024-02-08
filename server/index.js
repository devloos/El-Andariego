require('./config');
const express = require('express');
const cors = require('cors');
const path = require('path');
const enforce = require('express-sslify');

const app = express();
const PORT = process.env.PORT || 3080;

// Middleware
app.use(cors());
app.use(express.json());

app.use('/api/categories', require('./routes/api/categories'));
app.use('/api/items', require('./routes/api/items'));
app.use('/api/blog', require('./routes/api/blog'));

// Third party
app.use('/api/sendgrid', require('./routes/api/send-grid'));

if (process.env.NODE_ENV === 'production') {
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
  app.use(express.static(__dirname + '/dist'));
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './dist', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
