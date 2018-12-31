import React, { Component } from 'react';
import Grid from 'react-css-grid'
import './App.css';

class TimeForm extends Component {

  constructor(props) {
    super(props)

    console.log(this.props.timings)
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

  handleAddFood = () => {
    this.setState({
      foodList: this.state.foodList.concat([{ food: '',time:'', ovenTime:'' }])
    });
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
    this.props.toggleForm()
    this.props.updateTimings(foodDetailsOrder)
  }

  componentDidMount() {
    var updatedFoodList = []
    if (this.props.timings.length === 0) {
      updatedFoodList = [{food:'',time:'',ovenTime:''},
      {food:'',time:'',ovenTime:''},
      {food:'',time:'',ovenTime:''},
      {food:'',time:'',ovenTime:''},
      {food:'',time:'',ovenTime:''}]
    }

    for (var i = 0; i < this.props.timings.length; ++i)
    {
      updatedFoodList.push(this.props.timings[i])
    }

    this.setState({
      foodList: updatedFoodList
    })
  }

  render() {

    console.log(this.state.foodList)


    return (
      <div className="TimeForm">
      {/*<div id="mainContent" className="container" >*/}
        Add foods and cooking time
        {this.state.foodList.map((details, idx) => (
          // var foodRow = "food_"+i.toString()
          // <div key={idx} >
          <Grid
          key={idx}
        width={100}
        gap={30}>

            <div><input
              type="text"
              placeholder={`What food?`}
              value={details.food}
              onChange={this.handleFoodChange(idx)}
            />
            </div><div>
            <input
              type="number"
              placeholder={`minutes to cook`}
              value={details.time}
              min="0"
              onChange={this.handleFoodTimeChange(idx)}
            />
            </div><div className="addbtndiv">

            {idx === this.state.foodList.length-1 && <button className="addButton" onClick={this.handleAddFood}>Add</button>}
            &nbsp;
            </div>
            </Grid>
            // </div>

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
