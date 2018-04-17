import React, { Component } from 'react';
import * as d3 from "d3";
import {withFauxDOM} from 'react-faux-dom'
import { connect } from "react-redux"
import { selectColor } from '../actions/actions'
import CircleSounds from './circleSounds'
import { Route, Switch, Link } from 'react-router-dom'

class Circles extends Component{
  componentDidMount () {
    if(!this.props.currentUser){
      this.props.history.push("/")
    } else {
    const faux = this.props.connectFauxDOM('div', 'circle')
    d3.select(faux)
      .append('div')
      .html('Hello World!')
    this.props.animateFauxDOM(800)
    }
  }


// colors = () => {
//   return       <circle className="a" cx="100" cy="60" fill r="10"></circle>
//         <circle cx="300" cy="60" r="10"></circle>
//         <circle cx="500" cy="60" r="10"></circle>
// }

handleClick = (e) => {
  e.preventDefault()
  // console.log(e.target.attributes[0].value)
  this.props.selectColor(e.target.attributes[0].value)
  this.props.history.push("/taste")
}
//
// handleNext = (e) => {
//   e.preventDefault()
//
// }


  render(){
    let circle1 = d3.select("circle:nth-child(1n)")
    circle1.style("fill", "royalblue")
    circle1.attr("r", 125)
    let circle2 = d3.select("circle:nth-child(2n)")
    circle2.style("fill", "orangered");
    circle2.attr("r", 125);
    let circle3 = d3.select("circle:nth-child(3n)")
    circle3.style("fill", "yellow")
    circle3.attr("r", 125)
    circle1.transition()
    .duration(1250)
    .attr('opacity', 1)
    console.log(this.props)
    return(
      <div>
      <svg width="1100" height="575">
      <circle onClick={this.handleClick} name="blue" cx="150" cy="250" r="10"></circle>
      <circle onClick={this.handleClick} value="red" cx="550" cy="250" r="10"></circle>
      <circle onClick={this.handleClick} value="yellow" cx="950" cy="250" r="10"></circle>
      </svg>
      <CircleSounds />
      </div>
    )
  }
}

// <Link to={ "/taste"}>Next</Link>

const mapStateToProps = state => {
return{
  color: state.color,
  currentUser: state.user.currentUser
}
}

export default connect(mapStateToProps, { selectColor })(withFauxDOM(Circles))
