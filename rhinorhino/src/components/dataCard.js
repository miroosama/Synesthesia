import React, { Component } from 'react';
import * as d3 from "d3";
import {withFauxDOM} from 'react-faux-dom'

class DataCard extends Component {
  componentDidMount () {
    const faux = this.props.connectFauxDOM('div', 'circle')
    d3.select(faux)
      .append('div')
      .html('Hello World!')
    this.props.animateFauxDOM(800)
  }



  render(){
    console.log("AHAHAH",this.props)
    let info = this.props.data.find(item=>{
      return item.id == this.props.match
    })
    console.log(info)
    let name = `${info.user_info.username}`
    let detail = `${info.user_info.birthplace}, ${info.user_info.age}`
    let color = `${info.color}`
    let food = `${info.food_place}`
    let time = `${info.shape_time}`

    let circle2 = d3.select("circle:nth-child(2n)")
    circle2.style("fill", `${info.color}`)
  d3.select("circle:nth-child(1n)")
    .transition()
    .attr("delay", function(d,i){return 1000*i})
    .attr("duration", function(d,i){return 1000*(i+1)})
    .attr("cy", function(d,i){return 30*(i+1)})

    return(
      <svg>
        <circle cx={900} cy={50} r="50"></circle>
        <circle cx={900} cy={50} r="400"></circle>
        <text x="900" y="50" fontFamily="sans-serif" fontSize="60px" fill="white">{name}</text>
        <text x="900" y="100" fontFamily="sans-serif" fontSize="30px" fill="white">{detail}</text>
        <text x="900" y="150" fontFamily="sans-serif" fontSize="20px" fill="white">{color}</text>
        <text x="730" y="200" fontFamily="sans-serif" fontSize="12px" fill="white">{food}</text>
        <text x="900" y="250" fontFamily="sans-serif" fontSize="20px" fill="white">{time}</text>
      </svg>
    )
  }
}

export default withFauxDOM(DataCard)
