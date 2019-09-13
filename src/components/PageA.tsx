import React, { FC } from 'react';
import { StyledWrapper, StyledLink } from '../elements/pageStyles';

const PageA: FC = () => {
  return (
    <StyledWrapper>
      <StyledLink to='/b'>A</StyledLink>
    </StyledWrapper>
  );
};

export default PageA;
