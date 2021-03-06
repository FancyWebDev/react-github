import React from 'react';
import './index.sass';
import { Home } from '../pages/home';
import { About } from '../pages/about';
import { Navbar } from './navbar';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { Profile } from '../pages/profile';
import { Alert } from './alert';
import { AlertState } from '../context/alert/alert-state';
import { GitHubState } from '../context/github/github-state';

export const App = () => {
  return(
    <GitHubState>
      <AlertState>
        <Router>
          <Navbar />
          <div className={'container'}>
            <Alert />
            <Switch>
              <Route path={'/'} component={ Home } exact/>
              <Route path={'/about'} component={ About }/>
              <Route path={'/profile/:name'} component={ Profile }/>
            </Switch>
          </div>
        </Router>
      </AlertState>
    </GitHubState> 
  );
}