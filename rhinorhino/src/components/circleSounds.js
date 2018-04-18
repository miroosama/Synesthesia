import React, { Component } from 'react';

class CircleSounds extends Component{

handlePlay = (e) => {
  e.preventDefault()
  this.playNote();
}

playNote = () => {
  let context = new AudioContext();
  let sound = context.createOscillator()
  let x = context.createGain()

  sound.frequency.value = 261.6;
  x.gain.value = 1
  sound.connect(x)
  sound.connect(context.destination)
  sound.type = 'sine';
  var filter = context.createBiquadFilter();
  sound.connect(filter);
  filter.connect(context.destination);
  filter.type = 'lowpass';
// filter.frequency.value = 440; // Set cutoff to 440 HZ
  sound.connect(x)
  console.log(sound)
  sound.start(context.currentTime);
  sound.stop(context.currentTime + 1);

}


  render(){
    return(
      <div>
      <button onClick={this.handlePlay} type="button">Play</button>
      </div>
    )
  }
}

export default CircleSounds;
