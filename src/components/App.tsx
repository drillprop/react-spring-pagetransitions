import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useTransition } from 'react-spring';
import useRouter from '../hooks/useRouter';
import GlobalStyle from './GlobalStyle';
import PageA from './PageA';
import PageB from './PageB';
import PageC from './PageC';

const App: React.FC = () => {
  const { location } = useRouter();

  const transitions = useTransition(location, location.pathname, {
    from: {
      position: 'absolute',
      clipPath: 'circle(0%)',
      opacity: 0
    },
    enter: [{ opacity: 1 }, { clipPath: 'circle(100%)' }],
    leave: [{ clipPath: 'circle(0%)' }]
  });
  return (
    <>
      <GlobalStyle />
      <>
        {transitions.map(({ item, key, props }) => (
          <Switch location={item} key={key}>
            <Route
              exact
              path='/'
              render={() => <PageA animationProps={props} />}
            />
            <Route
              exact
              path='/b'
              render={() => <PageB animationProps={props} />}
            />
            <Route
              exact
              path='/c'
              render={() => <PageC animationProps={props} />}
            />
          </Switch>
        ))}
      </>
    </>
  );
};

export default App;
