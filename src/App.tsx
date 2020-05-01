import React from 'react';
import { BrowserRouter as Router,
  Switch,
  Route} from 'react-router-dom';

import './App.css';
import LoginContainer from './containers/login/login-container';
import HomeContainer from './containers/home/home-container';
import UserContainer from './containers/user/user-container';
import StationContainer from './containers/station/station-container';

class App extends React.Component<{},{}> {

  public render(){
    return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            <LoginContainer />
          </Route>
          <Route path="/home">
            <HomeContainer />
          </Route>
           <Route path="/user">
            <UserContainer/>
          </Route>
          <Route path="/station">
            <StationContainer />
          </Route>
        </Switch>
      </div>
    </Router>
  ); 
  }
 
}

export default App;
