import React, { FC } from 'react';
import { StyledLink, StyledWrapper } from '../elements/pageStyles';

const PageB: FC = () => {
  return (
    <StyledWrapper>
      <StyledLink to='/c'>B</StyledLink>
    </StyledWrapper>
  );
};

export default PageB;
