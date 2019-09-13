import React from 'react';
import { Route, Switch, match } from 'react-router-dom';
import { useTransition } from 'react-spring';
import styled from 'styled-components';
import useRouter from '../hooks/useRouter';
import GlobalStyle from './GlobalStyle';
import PageA from './PageA';
import PageB from './PageB';
import PageC from './PageC';
import { History, Location } from 'history';
import { StaticContext } from 'react-router';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  font-size: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

type RouterProps = {
  history: History<any>;
  location: Location<any>;
  match: match<any>;
  staticContext?: StaticContext | undefined;
};

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
          <Switch location={item} key={key}>
            <Route exact path='/'>
              {(otherProps: RouterProps) => (
                <PageA animationProps={props} {...otherProps} />
              )}
            </Route>
            <Route exact path='/b'>
              {(otherProps: RouterProps) => (
                <PageB animationProps={props} {...otherProps} />
              )}
            </Route>
            <Route exact path='/c'>
              {(otherProps: RouterProps) => (
                <PageC animationProps={props} {...otherProps} />
              )}
            </Route>
          </Switch>
        ))}
      </Wrapper>
    </>
  );
};

export default App;
