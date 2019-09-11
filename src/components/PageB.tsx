import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const PageB: FC = () => {
  return <StyledLink to='/'>A</StyledLink>;
};

export default PageB;
