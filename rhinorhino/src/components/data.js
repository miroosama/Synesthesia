import React, { Component } from 'react';
import * as d3 from "d3";
import {withFauxDOM} from 'react-faux-dom'
import { connect } from "react-redux"
import User from "./data"

class Data extends Component{

state = {
  clicked: false
}

  componentDidMount () {
    const faux = this.props.connectFauxDOM('div', 'circle')
    d3.select(faux)
      .append('div')
      .html('Hello World!')
    this.props.animateFauxDOM(800)

  }

  handleClick = (e) => {
    console.log(e)

  }

makeLines = () => {
  let num = 200
  let num2 = 100
  console.log("in")
  return mockData.map(user => {
    num += 50
    return <circle onClick={this.handleClick} value={user.user.name} cx={num} cy={num2} r="20"></circle>
  })

for (let i = 0; i < mockData.length; i++){
  num += 20
   return <circle cx={num} cy={num2} r="20"></circle>
  }
}


  render(){
    // console.log(this.props)
    // let circle1 = d3.select("circle:nth-child(1n)")
    // circle1.style("fill", "royalblue")
    // circle1.attr("r", 50)
    return(
      <div>
      <svg width="720" height="720">
      {this.makeLines()}
      </svg>
      {this.state.clicked ? {Data} : null}
      </div>
    )
  }
}

const mapStateToProps = state => {
return{
  data: state
}
}

export default connect(mapStateToProps)(withFauxDOM(Data))

const mockData = [
  {user: {
    name: "zero",
    color:"blue",
    foodPlaces: [{food:"salad", place:"gym"}, {food:"candy", place:"library"}, {food:"pizza", place:"shopping"}, {food:"fruit", place:"bar"}]
  }},
  {user:
  {
    name:"one",
    color:"yellow",
    foodPlaces: [{food:"salad", place:"gym"}, {food:"candy", place:"library"}, {food:"pizza", place:"shopping"}, {food:"fruit", place:"bar"}]
  }}
]
