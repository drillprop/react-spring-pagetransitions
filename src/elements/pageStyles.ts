import styled from 'styled-components';
import { animated } from 'react-spring';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 90px;
  color: black;
`;
export const AnimatedStyledWrapper = styled(animated.div)`
  backface-visibility: hidden; /* removes ugly white outline on clip-path */
  padding: 2px;
  width: 100vw;
  background-color: white;
  height: 100vh;
  display: grid;
  place-items: center;
`;
