import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from '../components/Header'
import TimeForm from './TimeForm'
import TimingList from '../components/TimingList'
import './App.css';

class App extends Component {

  constructor(props) {

    const listLength = 5

  super(props)

  this.state = {
    timings:[]

  }

  this.updateTimings = this.updateTimings.bind(this);
}

  updateTimings = (timings) => {
    this.setState({
      timings: timings
    })
  }

  restart = () => {
    window.location.reload()
  }
  render() {
    return (
      <div className="App">
      <Header />
      {this.state.timings.length === 0 && <TimeForm updateTimings={this.updateTimings} listLength={this.listLength}/>}
      {this.state.timings.length > 0 && <TimingList timings={this.state.timings}/>}
      {this.state.timings.length > 0 && <div><button onClick={this.restart}>Start again</button></div>}
      </div>
    );
  }
}

export default App;
