import React, { Component } from 'react';
import Circles from './components/circles'
import { Route, Switch, Link, withRouter } from 'react-router-dom'
import CircleSounds from './components/circleSounds'
import Taste from './components/taste'
import Data from './components/data'
import Numbers from './components/numbers'
import SignUp from './components/signup'
import Login from './components/login'
import React3 from 'react-three-renderer';
import { connect } from "react-redux"
import * as THREE from 'three';
import {getUser} from './actions/actions'

class App extends Component {
  componentDidMount(){

    let jwt = localStorage.getItem("token")
    if(jwt){
      this.props.getUser(jwt)
    }
  }
  render() {
    console.log(this.props)
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

function mapStateToProps(state){
  return{
    currentUser: state.user.currentUser
  }
}
export default withRouter(connect(mapStateToProps, { getUser })(App));
// <Route path="/" component={CircleSounds} />
// <CircleSounds />
// <Circles />
