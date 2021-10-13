import React from 'react';
import styled from 'styled-components';

const IngredientsList = ({ ingredients }) => {
  return (
    <div>
      <div>Ingredients:</div>
      <ul>
        {ingredients.map((ing) => {
          return <li key={ing.id}>{ing.original}</li>;
        })}
      </ul>
    </div>
  );
};

export default IngredientsList;
