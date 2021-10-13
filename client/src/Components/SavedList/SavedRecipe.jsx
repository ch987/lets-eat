import React from 'react';
import styled from 'styled-components';

const SavedRecipe = ({ recipe, remove, add }) => {
  const handleRemoveClick = (e) => {
    remove(recipe);
  };

  const handleClick = () => {
    add(recipe);
  };

  return (
    <StyledRecipeTile onClick={handleClick}>
      <StyledImage src={recipe.image} alt={recipe.image} />
      <StyledRecipeInfo>
        <div>{recipe.title}</div>
      </StyledRecipeInfo>
      <DeleteButton onClick={handleRemoveClick}></DeleteButton>
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
  border-radius: 50%;
  width: 100px;
  max-width: 100px;
  height: 100px;
  max-height: 100px;
  margin: 3%;
`;
const StyledRecipeInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  padding: 2%;
`;
const DeleteButton = styled.button`
  background: #f4d1ae;
  border: 2px solid;
  border-color: #333333;
  color: #333333;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 10px;
  font-size: 2rem;
  :hover {
    background: #60ab9a;
  }
`;

export default SavedRecipe;
