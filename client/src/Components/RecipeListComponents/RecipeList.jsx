import React from 'react';
import Recipe from './Recipe.jsx';
import styled from 'styled-components';

const RecipeList = ({ recipes }) => {
  return (
    <StyledList>
      {recipes.map((recipe) => {
        return <Recipe key={recipe.id} recipe={recipe} />;
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
  width: 70%;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export default RecipeList;
