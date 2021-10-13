const express = require('express');
const path = require('path');
const morgan = require('morgan');
const controllers = require('./controllers/index.js');

let app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/recipes/:id/information', (req, res) => {
  controllers.getDetails(req, res);
});

app.get('/recipes', (req, res) => {
  controllers.get(req, res);
});

app.get('/*', function (req, res) {
  res.sendFile(
    path.join(__dirname, '../client/dist/index.html'),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

module.exports = app;
