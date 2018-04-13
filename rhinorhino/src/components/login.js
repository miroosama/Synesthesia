import React, { Component } from 'react';
import { Input, Header, Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { logIn } from '../actions/actions'
import { connect } from "react-redux"


class Login extends Component {
  state = {
    username: "",
    password: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

    handleSubmit = (event)=> {
      event.preventDefault()
      console.log(this.state)
      this.props.logIn(this.state.username, this.state.password, this.props.history)
    }

  render(){
    return(
      <div>
        <Header as='h2' disabled>
        Log In
        </Header>
        <Form.Field>
        <Input placeholder='Username' name="username" value={this.state.username} onChange={this.handleChange}/>
        <Input placeholder='Password' name="password" value={this.state.password} onChange={this.handleChange}/>
        </Form.Field>
        <button onClick={this.handleSubmit}>Log In</button>
        <Link to={ "/signup"}>Sign Up</Link>
        <img src={'http://wgallia.com/content/images/cubes/cube3.png'}/>
        </div>
    )
  }
}

export default connect(null, { logIn })(Login)
