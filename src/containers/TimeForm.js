import React, { Component } from 'react';

import './App.css';

class TimeForm extends Component {

constructor(props) {
super(props)

this.state = {
  foodName_0:'',
  foodName_1:'',
  foodName_2:'',
  foodName_3:'',
  foodName_4:'',
  foodTime_0:'',
  foodTime_1:'',
  foodTime_2:'',
  foodTime_3:'',
  foodTime_4:'',
  endTime:'17:00',
  timings:[]

}

}

handleChange = (event) => {
  // console.log(event.target.name)
  this.setState({
    [event.target.name] : event.target.value
  })

}

calculateTimes = () => {
  console.log("STATE:",this.state)
  var foodDetails_single = {}
  var foodDetails = []

  for (var i = 0; i < 5; ++i) {
    var foodName = "foodName_" + i.toString()
    var foodTime = "foodTime_" + i.toString()
    if (this.state[foodName] !== '') {
      foodDetails_single = {food: this.state[foodName], time: this.state[foodTime]}
      foodDetails.push(foodDetails_single)
    }
  }

  var foodDetailsOrder = foodDetails.sort(function(a, b) {
    return a.time - b.time;
});

foodDetailsOrder = foodDetailsOrder.reverse()
  // console.log(foodDetailsOrder.reverse())

console.log(this.state.endTime)
var time = this.state.endTime.split(':')
console.log(time)
const now = new Date()
const end = new Date(now.getFullYear(), now.getMonth(), now.getDate(), time[0], time[1]);
var endDate = end;
console.log("end:",end)

for (var x = 0; x < foodDetailsOrder.length; ++x) {
  var startdate = new Date(endDate);

  var durationInMinutes = foodDetailsOrder[x].time;

  startdate.setMinutes(endDate.getMinutes() - durationInMinutes);
foodDetailsOrder[x].ovenTime = startdate;
console.log(foodDetailsOrder[x].food, startdate)

}
console.log("FINAL",foodDetailsOrder)

this.setState({
  timings:foodDetailsOrder
})

this.props.updateTimings(foodDetailsOrder)
}

  render() {

    console.log(this.state)
    var rows = [];
    var foodName
    var foodTime
for (var i = 0; i < 5; i++) {
  foodName = "foodName_" + (i).toString()
  foodTime = "foodTime_" + (i).toString()
  // console.log(fieldName)
// note: we add a key prop here to allow react to uniquely identify each
// element in this array. see: https://reactjs.org/docs/lists-and-keys.html
rows.push( <div key={i}><input type="text" name={foodName} placeholder="what food?" onChange={this.handleChange}/><input type="number" name={foodTime} placeholder="minutes to cook" min="0" onChange={this.handleChange}/></div>);
}

var timingsrows = []
console.log(this.state.timings)
for (var a = 0; a < this.state.timings.length; a++) {
  console.log(this.state.timings[a])
timingsrows.push( <div key={a}><b>{this.state.timings[a].food}</b> start cooking @ <b>{('0' + (this.state.timings[a].ovenTime.getHours())).slice(-2)}:{('0' + (this.state.timings[a].ovenTime.getMinutes())).slice(-2)}</b></div>);
//
}



    return (
      <div className="App">
      Add up to 5 foods and cooking time
      {rows}
      <div>Time to finish?<input type="time" name="endTime" placeholder="Time to finish?" value="17:00" onChange={this.handleChange} /></div>
      <button onClick={this.calculateTimes}>Go</button>
      <div>

<div className="timingList">
{/*{timingsrows}*/}

</div>






      </div>
      </div>
    );
  }
}

export default TimeForm;
