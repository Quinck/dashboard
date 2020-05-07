import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import './App.css';
import LoginContainer from './containers/login/login-container';
import HomeContainer from './containers/home/home-container';
import UserContainer from './containers/user/user-container';
import StationContainer from './containers/station/station-container';
// import PageNotFound from './containers/page-not-found/page-not-found';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/login">
              <LoginContainer />
            </Route>
            <Route exact path="/home">
              <HomeContainer />
            </Route>
            <Route exact path="/user">
              <UserContainer />
            </Route>
            <Route exact path="/station">
              <StationContainer />
            </Route>
            <Redirect exact from="/" to="login" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
