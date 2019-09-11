import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PageA from './PageA';
import PageB from './PageB';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  font-size: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Router>
          <Route exact path='/' component={PageA} />
          <Route exact path='/b' component={PageB} />
        </Router>
      </Wrapper>
    </>
  );
};

export default App;
