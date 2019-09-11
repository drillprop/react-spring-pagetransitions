import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { animated, useTransition } from 'react-spring';
import styled from 'styled-components';
import useRouter from '../hooks/useRouter';
import GlobalStyle from './GlobalStyle';
import PageA from './PageA';
import PageB from './PageB';
import PageC from './PageC';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  font-size: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App: React.FC = () => {
  const { location } = useRouter();
  const transitions = useTransition(location, location.pathname, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        {transitions.map(({ item, key, props }) => (
          <animated.div key={key} style={props}>
            <Switch location={item}>
              <Route exact path='/' component={PageA} />
              <Route path='/b' component={PageB} />
              <Route path='/c' component={PageC} />
            </Switch>
          </animated.div>
        ))}
      </Wrapper>
    </>
  );
};

export default App;
