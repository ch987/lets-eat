const axios = require('axios');
const config = require('../../config.js');

module.exports = {
  list: (params) => {
    return axios
      .get(
        `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=${params.ingredients}&number=${params.number}&ranking=${params.ranking}&ingore=${params.ignore}`,
        {
          headers: {
            'content-type': 'application/json',
            'x-rapidapi-host': config.RAPID_API_HOST,
            'x-rapidapi-key': config.RAPID_API_KEY,
          },
        }
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.error(err);
        return;
      });
  },
};
