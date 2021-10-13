import React from 'react';
import axios from 'axios';
import IngredientForm from './IngredientsFormComponents/IngredientForm.jsx';
import RecipeList from './RecipeListComponents/RecipeList.jsx';
import SavedList from './SavedList/SavedList.jsx';
import styled from 'styled-components';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      savedRecipes: [],
    };
    this.getRecipes = this.getRecipes.bind(this);
    this.handleIngredients = this.handleIngredients.bind(this);
    this.saveRecipe = this.saveRecipe.bind(this);
    this.removeSavedRecipe = this.removeSavedRecipe.bind(this);
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

  saveRecipe(recipe) {
    let savedRecipesCopy = this.state.savedRecipes.slice();
    if (savedRecipesCopy.map((obj) => obj.id).includes(recipe.id)) {
      savedRecipesCopy = savedRecipesCopy.filter((rec) => {
        return rec.id !== recipe.id;
      });
    } else {
      savedRecipesCopy.push(recipe);
    }
    this.setState({
      savedRecipes: savedRecipesCopy,
    });
  }

  removeSavedRecipe(recipe) {
    let savedRecipesCopy = this.state.savedRecipes.slice();
    savedRecipesCopy = savedRecipesCopy.filter((rec) => {
      return rec.id !== recipe.id;
    });
    this.setState({
      savedRecipes: savedRecipesCopy,
    });
  }

  handleIngredients(ingredientsString) {
    this.getRecipes(ingredientsString);
  }

  render() {
    return (
      <div>
        <IngredientForm submit={this.handleIngredients} />
        <Listbox>
          <RecipeList
            recipes={this.state.recipes}
            saveRecipe={this.saveRecipe}
            saved={this.state.savedRecipes}
          />
          <SavedList
            saved={this.state.savedRecipes}
            remove={this.removeSavedRecipe}
          />
        </Listbox>
      </div>
    );
  }
}

const Listbox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export default Main;
