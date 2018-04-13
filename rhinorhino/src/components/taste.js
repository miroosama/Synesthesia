import React, { Component } from 'react';
import ReactPlayer from 'react-player'
import { Grid, Dropdown, Menu } from 'semantic-ui-react'
import { connect } from "react-redux"
import { foodPlace } from '../actions/actions'
import { Link } from 'react-router-dom'

class Taste extends Component{
  componentDidMount () {
    if(!this.props.currentUser){
      this.props.history.push("/")
    }
  }

  handleSelect = (e, { value, name }) => {
    e.preventDefault()
    console.log(name)
    console.log(value)
    this.props.foodPlace(name, value)
  }

  render(){
console.log(this.props)
    const options = [{key: "Library", text: "Library", value:"Library"}, {key: "Bar", text: "Bar", value:"Bar"}, {key: "Shopping Center", text: "Shopping Center", value:"Shopping Center"}, {key: "Gym", text: "Gym", value:"Gym"}]
    return(
      <Grid divided='vertically'>
        <Grid.Row columns={2}>
          <Grid.Column>
          <div>
          <ReactPlayer url='https://www.youtube.com/watch?v=vbGv7GVvLiE' playing />
          <Menu compact>
            <Dropdown onChange={this.handleSelect} text='Dropdown' name="Salad" options={options} simple item />
          </Menu>
          </div>
          <ReactPlayer url='https://www.youtube.com/watch?v=fXUTFpMp9_Q' playing />
          <Menu compact>
            <Dropdown onChange={this.handleSelect} text='Dropdown' name="Pizza" options={options} simple item />
          </Menu>
          </Grid.Column>
          <Grid.Column>
          <ReactPlayer url='https://www.youtube.com/watch?v=KyhLtqlKtYY' playing />
          <Menu compact>
            <Dropdown onChange={this.handleSelect} text='Dropdown' name="Candy" options={options} simple item />
          </Menu>
          <ReactPlayer url='https://www.youtube.com/watch?v=esNiJPOguyc' playing />
          <Menu compact>
            <Dropdown onChange={this.handleSelect} text='Dropdown' name="Fruit" options={options} simple item />
          </Menu>
          </Grid.Column>
        </Grid.Row>
        <Link to={ "/numbers"}>Next</Link>
      </Grid>
    )
  }
}

const mapStateToProps = state => {
return{
  foodPlaces: state.foodPlaces,
  currentUser: state.user.currentUser
  }
}

export default connect(mapStateToProps, { foodPlace })(Taste)
