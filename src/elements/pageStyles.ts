import styled from 'styled-components';
import { animated } from 'react-spring';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 90px;
  color: inherit;
`;
export const AnimatedStyledWrapper = styled(animated.div)`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
`;
