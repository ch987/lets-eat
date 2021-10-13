import React from 'react';
import Recipe from './Recipe.jsx';
import styled from 'styled-components';

const RecipeList = ({ recipes, saveRecipe, saved }) => {
  return (
    <StyledList>
      {recipes.map((recipe) => {
        return (
          <Recipe
            key={recipe.id}
            recipe={recipe}
            saveRecipe={saveRecipe}
            saved={saved}
          />
        );
      })}
    </StyledList>
  );
};

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding-inline-start: 0;

  height: auto;
  max-height: 70vh;
  width: 65%;
  overflow-y: scroll;
  overflow-x: hidden;

  li:nth-child(odd) {
    background: rgb(120, 180, 128);
  }
  li:nth-child(even) {
    background: rgb(150, 210, 158);
  }

  ::-webkit-scrollbar {
    width: 1em;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track:hover {
    background: rgba(150, 150, 150, 0.3);
  }
  ::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    border-radius: 10px;
  }
`;

export default RecipeList;
