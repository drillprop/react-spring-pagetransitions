import React, { FC } from 'react';
import { AnimatedStyledWrapper, StyledLink } from '../elements/pageStyles';

const PageC: FC = () => {
  return (
    <AnimatedStyledWrapper>
      <StyledLink to='/'>C</StyledLink>
    </AnimatedStyledWrapper>
  );
};

export default PageC;
