import React, { Component } from 'react';

import './App.css';

class TimeForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      foodList:[
        {food:'',time:'',ovenTime:''},
        {food:'',time:'',ovenTime:''},
        {food:'',time:'',ovenTime:''},
        {food:'',time:'',ovenTime:''},
        {food:'',time:'',ovenTime:''}
      ],
      endTime:'17:00',
      timings:[]
    }

  }

  handleChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  handleFoodChange = (idx) => (evt) => {
      const newFood = this.state.foodList.map((details, sidx) => {
        if (idx !== sidx) return details;
        return { ...details, food: evt.target.value };
      });

      this.setState({ foodList: newFood });
  }


  handleFoodTimeChange = (idx) => (evt) => {
    const newFood = this.state.foodList.map((details, sidx) => {
      if (idx !== sidx) return details;
      return { ...details, time: evt.target.value };
    });

    this.setState({ foodList: newFood });
  }

  calculateTimesDynamic = () => {
    console.log("STATE:",this.state.foodList)

    var foods = this.state.foodList.filter(f => f.food !== "")
    console.log(foods)
    var foodDetailsOrder = foods.sort(function(a, b) {
      return a.time - b.time;
    });

    foodDetailsOrder = foodDetailsOrder.reverse()

    var time = this.state.endTime.split(':')

    const now = new Date()
    const end = new Date(now.getFullYear(), now.getMonth(), now.getDate(), time[0], time[1]);
    var endDate = end;


    for (var x = 0; x < foodDetailsOrder.length; ++x) {
      var startdate = new Date(endDate);

      var durationInMinutes = foodDetailsOrder[x].time;

      startdate.setMinutes(endDate.getMinutes() - durationInMinutes);
      foodDetailsOrder[x].ovenTime = startdate;
    // console.log(foodDetailsOrder[x].food, startdate)

    }
    console.log("FINAL",foodDetailsOrder)

    this.setState({
      timings:foodDetailsOrder,
      foodList: foodDetailsOrder
    })

    this.props.updateTimings(foodDetailsOrder)
  }

  componentDidMount() {

  }

  render() {

    console.log(this.state.foodList)


    return (
      <div className="App">
        Add up to 5 foods and cooking time
        {this.state.foodList.map((details, idx) => (
          // var foodRow = "food_"+i.toString()
          <div key={idx}>
            <input
              type="text"
              placeholder={`What food?`}
              value={details.food}
              onChange={this.handleFoodChange(idx)}
            />

            <input
              type="number"
              placeholder={`minutes to cook`}
              value={details.time}
              min="0"
              onChange={this.handleFoodTimeChange(idx)}
            />

          </div>
        ))}
        <div>
          Time to finish?
          <input type="time" name="endTime" onChange={this.handleChange} />
        </div>

        <button onClick={this.calculateTimesDynamic}>Go</button>

      </div>
    );
  }
}

export default TimeForm;
