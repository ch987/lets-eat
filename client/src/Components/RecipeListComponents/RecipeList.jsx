import React from 'react';
import Recipe from './Recipe.jsx';
import styled from 'styled-components';

const RecipeList = ({ recipes, saveRecipe, saved, getDetails, details }) => {
  return (
    <StyledList>
      {recipes.map((recipe) => {
        return (
          <Recipe
            key={recipe.id}
            recipe={recipe}
            saveRecipe={saveRecipe}
            saved={saved}
            getDetails={getDetails}
            details={details}
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
    background: #f3d3bd;
  }
  li:nth-child(even) {
    background: #eebb99;
  }
  li:hover {
    background: #eba16f;
  }

  ::-webkit-scrollbar {
    width: 1em;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-track:hover {
    background: rgba(94, 94, 94, 0.3);
  }
  ::-webkit-scrollbar-thumb {
    background-color: #333333;
    border-radius: 10px;
  }
`;

export default RecipeList;
