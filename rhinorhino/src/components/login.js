import React, { Component } from 'react';
import { Input, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Login extends Component {

  render(){
    return(
      <div>
        <Header as='h2' disabled>
        Log In
        </Header>
        <Input placeholder='Username' />
        <Input placeholder='Password' />
        <Link to={ "/signup"}>Sign Up</Link>
        <img src={'http://wgallia.com/content/images/cubes/cube3.png'}/>
        </div>
    )
  }
}

export default Login
