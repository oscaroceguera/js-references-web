import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import GlobalStyles from './globalCSS';

import Header from './components/Header';

const Home = React.lazy(() => import('./pages/Home'));
const Editor = React.lazy(() => import('./pages/Editor'));

import Loader from './components/Loader';

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <Suspense fallback={<Loader secondary />}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/editor">
              <Editor />
            </Route>
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
};

export default App;
