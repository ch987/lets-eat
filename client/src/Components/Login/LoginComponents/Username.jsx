import React from 'react';
import styled from 'styled-components';

const Username = ({ username, handleChange }) => {
  return (
    <div>
      <UsernameField>
        <span>Username: </span>
        <StyledInput
          type='text'
          maxLength={60}
          name='Username'
          value={username}
          onChange={handleChange}
          placeholder='Username'
        />
      </UsernameField>
    </div>
  );
};

const UsernameField = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
`;
const StyledInput = styled.input`
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border: 1px solid #333333;
  border-radius: 5px;
  height: 30px;
  width: 300px;
  margin: 0 30px;
  padding: 2px 10px;
  outline: 0;
  background-color: #fcfaf9;
`;

export default Username;
