import React, { FC } from 'react';
import { AnimatedStyledWrapper, StyledLink } from '../elements/pageStyles';

const PageC: FC<{ animationProps: any }> = ({ animationProps }) => {
  return (
    <AnimatedStyledWrapper style={animationProps}>
      <StyledLink to='/'>C</StyledLink>
    </AnimatedStyledWrapper>
  );
};

export default PageC;
