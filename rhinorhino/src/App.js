import React, { Component } from 'react';
import Circles from './components/circles'
import { Route, Switch, Link } from 'react-router-dom'
import CircleSounds from './components/circleSounds'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" component={Circles} />
        </Switch>
      </div>
    );
  }
}

export default App;
// <Route path="/" component={CircleSounds} />
// <CircleSounds />
// <Circles />
