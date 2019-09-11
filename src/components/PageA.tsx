import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const PageA: FC = () => {
  return <StyledLink to='/b'>B</StyledLink>;
};

export default PageA;
