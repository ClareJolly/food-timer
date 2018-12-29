import React, { Component } from 'react';
// import logo from './logo.svg';


import '../containers/App.css';

class TimingList extends Component {

  constructor(props) {
  super(props)

  this.state = {
    timings:this.props.timings

  }

  // this.updateTimings = this.updateTimings.bind(this);
}

render() {



var timingsrows = []
console.log(this.state.timings)
for (var a = 0; a < this.state.timings.length; a++) {
console.log(this.state.timings[a])
timingsrows.push( <div key={a}><b>{this.state.timings[a].food}</b> start cooking @ <b>{('0' + (this.state.timings[a].ovenTime.getHours())).slice(-2)}:{('0' + (this.state.timings[a].ovenTime.getMinutes())).slice(-2)}</b></div>);
//
}



  return (


<div className="timingList">
{timingsrows}

</div>






    
  );
}
}

export default TimingList;
