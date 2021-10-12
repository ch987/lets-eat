const express = require('express');
const path = require('path');
const morgan = require('morgan');
const controllers = require('./controllers/index.js');

let app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/recipes', (req, res) => {
  controllers.get(req, res);
});

module.exports = app;
