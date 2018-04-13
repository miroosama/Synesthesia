import React, { Component } from 'react';
import { Input, Header, Form } from 'semantic-ui-react'
import '../signup.css'
import { signUp } from '../actions/actions'
import { connect } from "react-redux"

class SignUp extends Component {
state= {
  username: "",
  password: "",
  birthplace: "",
  age: ""
}

handleChange = (event) => {
  this.setState({
    [event.target.name]: event.target.value
  })
}

  handleSubmit = (event)=> {
    console.log(this.state)
    this.props.signUp(this.state.username, this.state.password, this.state.birthplace, this.state.age, this.props.history)
  }

  render(){
    return(
      <div>
        <Header as='h2' disabled>
        Sign Up
        </Header>
        <Form.Field>
        <Input placeholder='Username' name='username' value={this.state.username} onChange={this.handleChange}/>
        <Input placeholder='Password' name='password' value={this.state.password} onChange={this.handleChange}/>
        <Input placeholder='Birthplace' name='birthplace' value={this.state.birthplace} onChange={this.handleChange}/>
        <Input placeholder='Age' name='age' value={this.state.age} onChange={this.handleChange}/>
        </Form.Field>
        <button onClick={this.handleSubmit}>Sign Up</button>
        <img src={'http://wgallia.com/content/images/cubes/cube3.png'}/>
        </div>
    )
  }
}

export default connect(null, {signUp})(SignUp)

// <div className={"signup"} style={ height }>
