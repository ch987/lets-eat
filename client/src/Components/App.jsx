import React from 'react';
import axios from 'axios';
import IngredientForm from './IngredientsFormComponents/IngredientForm.jsx';
import RecipeList from './RecipeListComponents/RecipeList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      savedRecipes: [],
    };
    this.getRecipes = this.getRecipes.bind(this);
    this.handleIngredients = this.handleIngredients.bind(this);
  }

  getRecipes(ingredientsList) {
    axios
      .get(`/recipes?ingredients=${ingredientsList}`)
      .then(({ data }) => {
        this.setState({
          recipes: data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  handleIngredients(ingredientsString) {
    this.getRecipes(ingredientsString);
  }

  render() {
    return (
      <div>
        <h1>Let's Eat!</h1>
        <IngredientForm submit={this.handleIngredients} />
        <RecipeList recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
