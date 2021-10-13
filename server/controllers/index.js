const axios = require('axios');
const models = require('../models/index.js');
const tempdata = require('./tempdata.js');

module.exports = {
  get: async (req, res) => {
    let ingredientsList = req.query.ingredients;
    console.log(ingredientsList);
    let queryParams = {
      ingredients: ingredientsList || '',
      number: 5,
      license: true,
      ranking: 2,
      ignore: true,
    };
    let data = await models.list(queryParams);
    res.send(data);
    // res.send(tempdata.data);
  },
  getDetails: async (req, res) => {
    let recipeId = req.params.id;
    console.log(recipeId);
    let queryParams = {
      recipeId: recipeId || '',
      nutrition: false,
    };
    let data = await models.details(queryParams);
    console.log(data);
    res.send(data);
  },
};
