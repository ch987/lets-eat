import React from 'react';

const Username = ({ username, handleChange }) => {
  return (
    <div>
      <label>
        <span>Username: </span>
        <input
          type='text'
          maxLength={60}
          name='Username'
          value={username}
          onChange={handleChange}
          placeholder='Username'
        />
      </label>
    </div>
  );
};

export default Username;
