import React, { Component } from 'react';
import Circles from './components/circles'
import { Route, Switch, Link } from 'react-router-dom'
import CircleSounds from './components/circleSounds'
import Taste from './components/taste'
import Data from './components/data'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Circles}  />
          <Route path="/taste" component={Taste} />
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
