import React, { FC } from 'react';
import { AnimatedStyledWrapper, StyledLink } from '../elements/pageStyles';

const PageA: FC<{
  animationProps: any;
}> = ({ animationProps }) => {
  return (
    <AnimatedStyledWrapper style={animationProps}>
      <StyledLink to='/b'>A</StyledLink>
    </AnimatedStyledWrapper>
  );
};

export default PageA;
