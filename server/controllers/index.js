const axios = require('axios');
const models = require('../models/index.js');

module.exports = {
  get: async (req, res) => {
    let removeSpaces = req.query.ingredients.split(' ').join('');
    let ingredientsList = removeSpaces.split(',').join(',+');
    console.log(ingredientsList);
    let queryParams = {
      ingredients: ingredientsList || '',
      number: 3,
      license: true,
      ranking: 2,
      ignore: true,
    };
    //let data = await models.list(queryParams);
    //res.send(data);
    res.send([
      {
        id: 719320,
        title: '20 Celebration ! + $500 GIVEAWAY',
        image: 'https://spoonacular.com/recipeImages/719320-312x231.png',
        imageType: 'png',
        usedIngredientCount: 1,
        missedIngredientCount: 1,
        missedIngredients: [[Object]],
        usedIngredients: [[Object]],
        unusedIngredients: [],
        likes: 105,
      },
      {
        id: 987595,
        title: 'Apple Ginger Kombucha Cocktail',
        image: 'https://spoonacular.com/recipeImages/987595-312x231.jpg',
        imageType: 'jpg',
        usedIngredientCount: 1,
        missedIngredientCount: 1,
        missedIngredients: [[Object]],
        usedIngredients: [[Object]],
        unusedIngredients: [],
        likes: 17,
      },
      {
        id: 47950,
        title: 'Cinnamon Apple Crisp',
        image: 'https://spoonacular.com/recipeImages/47950-312x231.jpg',
        imageType: 'jpg',
        usedIngredientCount: 1,
        missedIngredientCount: 2,
        missedIngredients: [[Object], [Object]],
        usedIngredients: [[Object]],
        unusedIngredients: [],
        likes: 35,
      },
    ]);
  },
};
