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

  const transition: any = {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  };

  const transitions = useTransition(location, location.pathname, transition);
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
