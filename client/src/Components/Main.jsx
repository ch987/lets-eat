import React from 'react';
import axios from 'axios';
import IngredientForm from './IngredientsFormComponents/IngredientForm.jsx';
import RecipeList from './RecipeListComponents/RecipeList.jsx';
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
    console.log('saved', recipe);
  }

  handleIngredients(ingredientsString) {
    this.getRecipes(ingredientsString);
  }

  render() {
    return (
      <StyledContainer>
        <StyledHeader className='section'>
          <h1>Let's Eat!</h1>
        </StyledHeader>
        <StyledBody className='section'>
          <IngredientForm submit={this.handleIngredients} />
          <RecipeList
            recipes={this.state.recipes}
            saveRecipe={this.saveRecipe}
          />
        </StyledBody>
        <StyledFooter className='section'>
          <div>this is a StyledFooter</div>
        </StyledFooter>
      </StyledContainer>
    );
  }
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  .section {
    position: fixed;
    width: 100%;
    left: 0;
  }
`;
const StyledHeader = styled.div`
  top: 0;
  background-color: rgb(255, 120, 90);
  color: white;
  height: 10%;
`;
const StyledBody = styled.div`
  background-color: white;
  height: 70%;
  padding: 5% 10%;
  top: 10%;
`;
const StyledFooter = styled.div`
  bottom: 0;
  background-color: rgb(76, 59, 77);
  color: white;
  height: 10%;
`;

export default Main;
