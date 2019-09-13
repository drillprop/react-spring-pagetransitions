import React, { FC } from 'react';
import { StyledLink, AnimatedStyledWrapper } from '../elements/pageStyles';

const PageB: FC = () => {
  return (
    <AnimatedStyledWrapper>
      <StyledLink to='/c'>B</StyledLink>
    </AnimatedStyledWrapper>
  );
};

export default PageB;
