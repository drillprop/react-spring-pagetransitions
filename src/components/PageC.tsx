import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const PageC: FC = () => {
  return <StyledLink to='/'>C</StyledLink>;
};

export default PageC;
