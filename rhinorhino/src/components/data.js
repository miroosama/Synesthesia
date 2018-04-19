import React, { Component } from 'react';
import * as d3 from "d3";
import {withFauxDOM} from 'react-faux-dom'
import { connect } from "react-redux"
import User from "./data"
import { logoutUser } from '../actions/actions'
import DataCard from './dataCard'
import ColorFilter from './colorFilter'

class Data extends Component{

state = {
  clicked: false,
  data: "",
  matchNum: null,
  colorFilter: false,
  color: ""
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
      clicked: true,
      matchNum: e.target.attributes[0].value
    })
    console.log(e.target.attributes[0].value)
    // this.dataCard(e.target.attributes[0].value)
  }

makeLines = () => {
  let num = 200
  let num1 = 200
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
    console.log("hey", user)
    if(num1 >= 650){
      num2 += 50
      num1 = 250
    }  else {
      num1 += 50
    }
    d3.selectAll("circle")
    .classed('item--transitioning', true)
    .style('fill', 'white')
    .attr("r", 30)
    .transition().duration(750)
    .attr("r", 20)
    .style('fill', 'black')
    return <circle onClick={this.handleClick} value={user.id} cx={num1} cy={num2} r="20"></circle>
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

colorSubmit = (e) => {
  if(e.target.value == "all"){
    this.setState({
      colorFilter:false
    })
  } else{
  console.log("COLOR", e.target.value)
  this.setState({
    colorFilter: true,
    color: e.target.value
    })
  }
}
  render(){
    console.log(this.props)
  //   if(this.state.clicked){
  //   let circle1 = d3.select("circle")
  //   circle1.style("fill", "royalblue")
  // }
    // circle1.attr("r", 50)
    let dataCard = <DataCard data={this.state.data} match={this.state.matchNum} />
    let colorShow = <ColorFilter data={this.state.data} color={this.state.color} onClick={this.handleClick}/>
    return(
      <div>
      <svg width="1300" height="720">
      {this.state.clicked ? dataCard : <rect cx={50} cy={50} r="1"></rect> }
      {this.state.colorFilter ? colorShow : this.makeLines()}
      </svg>
      <select onChange={this.colorSubmit}>
      <option value="all">All</option>
      <option value="red">Red</option>
      <option value="yellow">Yellow</option>
      <option value="blue">Blue</option>
      </select>
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
// {this.dataCard()}
// {this.addText()}
// {this.dataCard()}
// {this.addText()}
// {this.state.clicked ? this.dataCard() : null}
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

// dataCard = (num) => {
//   if(this.state.clicked){
//   let match = this.state.data.find(item=>{
//     return item.id == num
//   })
//   console.log("send", match )
// // this.addText(match)
//     return <circle onClick={this.handleClick} value={match} cx={50} cy={50} r="500"></circle>
// } else {
//     return <circle cx={50} cy={50} r="1"></circle>
//   }
// }

// addText = (match) => {
//   console.log(match)
//   if(match == undefined){
//     match = "nothing"
//   } else {
//   if(this.state.clicked){
//     return <text x="50" y="50" fontFamily="sans-serif" fontSize="90px" fill="white">`${match}`</text>
//
//   }
//   else{
//     null
//     }
//   }
// }
