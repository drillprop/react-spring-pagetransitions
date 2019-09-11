import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PageA from './PageA';
import PageB from './PageB';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';

const StyledNavigation = styled.nav`
  width: 100%;
  ul {
    display: flex;
    justify-content: center;
    li {
      text-transform: uppercase;
      margin-left: 50px;
      list-style: none;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <StyledNavigation>
          <ul>
            <StyledLink to='/'>
              <li>Page A</li>
            </StyledLink>
            <StyledLink to='/b'>
              <li>Page B</li>
            </StyledLink>
          </ul>
        </StyledNavigation>
        <>
          <Route exact path='/' component={PageA} />
          <Route exact path='/b' component={PageB} />
        </>
      </Router>
    </>
  );
};

export default App;
