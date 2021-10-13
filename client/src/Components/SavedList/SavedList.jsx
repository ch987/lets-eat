import React from 'react';
import SavedRecipe from './SavedRecipe.jsx';
import styled from 'styled-components';

const SavedList = ({ saved, remove }) => {
  return (
    <StyledList>
      {saved.map((recipe) => {
        return <SavedRecipe key={recipe.id} recipe={recipe} remove={remove} />;
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
  width: 30%;
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

export default SavedList;
