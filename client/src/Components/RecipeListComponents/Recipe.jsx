import React from 'react';
import styled from 'styled-components';

const Recipe = ({ recipe }) => {
  console.log(recipe);
  return (
    <div>
      <img src={recipe.image} alt={recipe.image} />
      <div>{recipe.title}</div>
      <button>More Details</button>
    </div>
  );
};

const StyledList = styled.ul`
  list-style-type: none;

  display: flex;
  flex-direction: row;
`;

export default Recipe;
