import React from 'react';
import styled from 'styled-components';

const Recipe = ({ recipe, saveRecipe, saved }) => {
  const handleClick = (e) => {
    saveRecipe(recipe);
  };

  let star = (
    <StyledFavoriteButtonOff onClick={handleClick}>☆</StyledFavoriteButtonOff>
  );
  if (saved.map((recipe) => recipe.id).includes(recipe.id)) {
    star = (
      <StyledFavoriteButtonOn onClick={handleClick}>★</StyledFavoriteButtonOn>
    );
  }

  return (
    <StyledRecipeTile>
      <StyledImage src={recipe.image} alt={recipe.image} />
      <StyledRecipeInfo>
        <div>{recipe.title}</div>
        <button>More Details</button>
      </StyledRecipeInfo>
      {star}
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
const StyledFavoriteButtonOn = styled.button`
  background: rgb(244, 240, 187);
  border: 2px solid;
  border-color: #ff785a;
  color: #ff785a;
  width: 50px;
  height: 50px;
  border-radius: 15px;
  margin: 10px;
  font-size: 2rem;
  :hover {
    background: rgb(224, 220, 167);
  }
`;
const StyledFavoriteButtonOff = styled.button`
  background: rgb(244, 240, 187);
  border: 2px solid;
  border-color: rgb(135, 195, 143);
  color: rgb(135, 195, 143);
  width: 50px;
  height: 50px;
  border-radius: 15px;
  margin: 10px;
  font-size: 2rem;
  :hover {
    background: rgb(224, 220, 167);
  }
`;

export default Recipe;
