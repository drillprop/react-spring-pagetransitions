import React, { FC } from 'react';
import { StyledLink, AnimatedStyledWrapper } from '../elements/pageStyles';

const PageB: FC<{ animationProps: any }> = ({ animationProps }) => {
  return (
    <AnimatedStyledWrapper style={animationProps}>
      <StyledLink to='/c'>B</StyledLink>
    </AnimatedStyledWrapper>
  );
};

export default PageB;
