import React from 'react';
import styled from 'styled-components';

const Recipe = ({ recipe }) => {
  console.log(recipe);
  return (
    <StyledRecipeTile>
      <StyledImage src={recipe.image} alt={recipe.image} />
      <StyledRecipeInfo>
        <div>{recipe.title}</div>
        <button>More Details</button>
      </StyledRecipeInfo>
    </StyledRecipeTile>
  );
};

const StyledRecipeTile = styled.li`
  list-style-type: none;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;
const StyledImage = styled.img`
  border-radius: 10px;
`;
const StyledRecipeInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

export default Recipe;
