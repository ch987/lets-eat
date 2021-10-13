import React from 'react';
import styled from 'styled-components';

const Source = ({ url, name }) => {
  return (
    <h3>
      <StyledLink href={url}>{name}</StyledLink>
    </h3>
  );
};

const StyledLink = styled.a`
  text-decoration: none;
  color: #fcfaf9;
  :hover {
    color: #60ab9a;
  }
`;

export default Source;
