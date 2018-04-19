import React, { Component } from 'react';
import * as d3 from "d3";
import {withFauxDOM} from 'react-faux-dom'
import DataCard from './dataCard'

class ColorFilter extends Component {
  state = {
    clicked: false,
    matchNum: null
  }
  componentDidMount () {
    const faux = this.props.connectFauxDOM('div', 'circle')
    d3.select(faux)
      .append('div')
      .html('Hello World!')
    this.props.animateFauxDOM(800)
  }
  colorSubmit = () => {
    let num = 200
    let num1 = 200
    let num2 = 100
  let arr = []
   for (let i = 0; i < this.props.data.length; i++){
    num += 20
    console.log(this.props.data[i])
    if(this.props.data[i].color == `${this.props.color}`)
     arr.push(this.props.data[i])
    }

    return arr.map(user => {
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
  handleClick = (e) => {
    console.log("AYYYYYYYYY", e)
    this.setState({
      clicked: true,
      matchNum: e.target.attributes[0].value
    })
    // this.dataCard(e.target.attributes[0].value)
  }

  render(){
    console.log(this.state.matchNum)
    let dataCard = <DataCard data={this.props.data} match={this.state.matchNum} />
    return(
      <svg>
      {this.colorSubmit()}
      {this.state.clicked ? dataCard : <rect cx={50} cy={50} r="1"></rect> }
      </svg>
    )
  }
}

export default withFauxDOM(ColorFilter)
