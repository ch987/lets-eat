import React from 'react';
import styled from 'styled-components';

const InstructionsList = ({ instructions }) => {
  return (
    <div>
      <h3>Instructions:</h3>
      <StyledList>
        {instructions.map((inst, index) => {
          return <li key={index}>{inst.step}</li>;
        })}
      </StyledList>
    </div>
  );
};

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 0;
  padding-inline-start: 0;

  height: auto;
  max-height: 20vh;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;

  li {
    padding: 5px;
  }

  ::-webkit-scrollbar {
    width: 0.5em;
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

export default InstructionsList;
