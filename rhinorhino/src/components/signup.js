import React, { Component } from 'react';
import { Input, Header } from 'semantic-ui-react'
import '../signup.css'

class SignUp extends Component {

  render(){
    return(
      <div>
        <Header as='h2' disabled>
        Sign Up
        </Header>
        <Input placeholder='Username' />
        <Input placeholder='Password' />
        <Input placeholder='Birthplace' />
        <Input placeholder='Age' />
        <img src={'http://wgallia.com/content/images/cubes/cube3.png'}/>
        </div>
    )
  }
}

export default SignUp

// <div className={"signup"} style={ height }>
