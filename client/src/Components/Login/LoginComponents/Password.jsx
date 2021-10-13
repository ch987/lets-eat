import React from 'react';

const Password = ({ password, handleChange }) => {
  return (
    <div>
      <label>
        <span>Password: </span>
        <input
          type='text'
          maxLength={60}
          name='Password'
          value={password}
          onChange={handleChange}
          placeholder='Password'
        />
      </label>
    </div>
  );
};

export default Password;
