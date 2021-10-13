import React from 'react';
import styled from 'styled-components';

const InstructionsList = ({ instructions }) => {
  return (
    <div>
      <div>Instructions:</div>
      <ul>
        {instructions.map((inst, index) => {
          return <li key={index}>{inst.step}</li>;
        })}
      </ul>
    </div>
  );
};

export default InstructionsList;
