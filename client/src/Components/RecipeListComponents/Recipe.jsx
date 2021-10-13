import React from 'react';
import styled from 'styled-components';

const Recipe = ({ recipe, saveRecipe }) => {
  console.log(recipe);

  const handleClick = (e) => {
    saveRecipe(recipe);
  };

  return (
    <StyledRecipeTile>
      <StyledImage src={recipe.image} alt={recipe.image} />
      <StyledRecipeInfo>
        <div>{recipe.title}</div>
        <button>More Details</button>
      </StyledRecipeInfo>
      <StyledFavoriteButton onClick={handleClick}></StyledFavoriteButton>
    </StyledRecipeTile>
  );
};

const StyledRecipeTile = styled.li`
  list-style-type: none;
  border-radius: 15px;
  margin-bottom: 5px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const StyledImage = styled.img`
  border-radius: 10px;
  width: 100%;
  max-width: 40%;
  margin: 1%;
`;
const StyledRecipeInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  padding: 2%;
`;
const StyledFavoriteButton = styled.button`
  background: rgb(244, 240, 187);
  width: 50px;
  height: 50px;
  border-radius: 15px;
  margin: 10px;
`;

export default Recipe;
