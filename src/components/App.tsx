import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PageA from './PageA';
import PageB from './PageB';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <nav>
          <ul>
            <Link to='/'>
              <li>Page A</li>
            </Link>
            <Link to='/b'>
              <li>Page B</li>
            </Link>
          </ul>
        </nav>
        <>
          <Route exact path='/' component={PageA}></Route>
          <Route exact path='/b' component={PageB}></Route>
        </>
      </Router>
    </>
  );
};

export default App;
