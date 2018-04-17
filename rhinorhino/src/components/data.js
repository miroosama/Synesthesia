import React, { Component } from 'react';
import * as d3 from "d3";
import {withFauxDOM} from 'react-faux-dom'
import { connect } from "react-redux"
import User from "./data"
import { logoutUser } from '../actions/actions'
import DataCard from './dataCard'
class Data extends Component{

state = {
  clicked: false,
  data: ""
}

  componentDidMount () {
    fetch(`http://localhost:3000/api/v1/results`)
    .then(res => res.json())
    .then(json => {
      this.setState({
        data: json
      })
    })

    const faux = this.props.connectFauxDOM('div', 'circle')
    d3.select(faux)
      .append('div')
      .html('Hello World!')
    this.props.animateFauxDOM(800)
  }

  handleClick = (e) => {
    this.setState({
      clicked: true
    })
    console.log(e.target.attributes[0].value)
    this.dataCard(e.target.attributes[0].value)
  }

makeLines = () => {
  let num = 200
  let num2 = 100
  // return daata.map(user => {
  //   num += 50
  //   return <circle onClick={this.handleClick} value={user.user.name} cx={num} cy={num2} r="20"></circle>
  // })
  // let circle = d3.selectAll("circle")
  // circle.data(this.state.data)
  //
let arr = []
 for (let i = 0; i < this.state.data.length; i++){
  num += 20
   arr.push(this.state.data[i])
  }

  return arr.map(user => {
    num += 50
    console.log("hey", user)
    // if cx == 720 then num2 += 50
    return <circle onClick={this.handleClick} value={user.id} cx={num} cy={num2} r="20"></circle>
  })
}

// return <circle onClick={this.handleClick} cx={num} cy={num2} r="20"></circle>
handleSubmit = () => {
  this.props.logoutUser()
  this.props.history.push("/")
}

handleMouse = (e) => {
  let zoom = d3.zoom()
  let circles = d3.selectAll("circle")
  circles
    .call(zoom)
    .on("wheel.zoom", null);
}

dataCard = (num) => {
  let match = this.state.data.find(item=>{
    return item.id == num
  })
return <circle onClick={this.handleClick} value={match} cx={50} cy={50} r="500"></circle>
}

  render(){
    console.log(this.props)
    // let circle1 = d3.select("circle:nth-child(1n)")
    // circle1.style("fill", "royalblue")
    // circle1.attr("r", 50)
    return(
      <div>
      <svg width="720" height="720">
      {this.makeLines()}
       {this.state.clicked ? this.dataCard() : null}
      </svg>
      <button onClick={this.handleSubmit}>Log Out</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
return{
  data: state
}
}

export default connect(mapStateToProps, { logoutUser })(withFauxDOM(Data))

// const mockData = [
//   {user: {
//     name: "zero",
//     color:"blue",
//     foodPlaces: [{food:"salad", place:"gym"}, {food:"candy", place:"library"}, {food:"pizza", place:"shopping"}, {food:"fruit", place:"bar"}]
//   }},
//   {user:
//   {
//     name:"one",
//     color:"yellow",
//     foodPlaces: [{food:"salad", place:"gym"}, {food:"candy", place:"library"}, {food:"pizza", place:"shopping"}, {food:"fruit", place:"bar"}]
//   }}
// ]
