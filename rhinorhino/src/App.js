import React, { Component } from 'react';
import Circles from './components/circles'
import { Route, Switch, Link } from 'react-router-dom'
import CircleSounds from './components/circleSounds'
import Taste from './components/taste'
import Data from './components/data'
import Numbers from './components/numbers'
import SignUp from './components/signup'
import Login from './components/login'
import React3 from 'react-three-renderer';
import * as THREE from 'three';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login}  />
          <Route exact path="/signup" component={SignUp}  />
          <Route exact path="/circles" component={Circles}  />
          <Route path="/taste" component={Taste} />
          <Route path="/numbers" component={Numbers} />
          <Route path="/data" component={Data} />
        </Switch>
      </div>
    );
  }
}

export default App;
// <Route path="/" component={CircleSounds} />
// <CircleSounds />
// <Circles />
