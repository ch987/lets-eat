const axios = require('axios');
const models = require('../models/index.js');
const tempdata = require('./tempdata.js');

module.exports = {
  get: async (req, res) => {
    let removeSpaces = req.query.ingredients.split(' ').join('');
    let ingredientsList = removeSpaces.split(',').join(',+');
    console.log(ingredientsList);
    let queryParams = {
      ingredients: ingredientsList || '',
      number: 5,
      license: true,
      ranking: 2,
      ignore: true,
    };
    // let data = await models.list(queryParams);
    // res.send(data);

    res.send(tempdata.data);
  },
};
