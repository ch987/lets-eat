const express = require('express');
const path = require('path');
const morgan = require('morgan');

let app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/', (req, res) => {
  res.send('hello');
});

module.exports = app;
