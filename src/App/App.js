import React, { Component } from 'react';
import './App.css';
import ReservationContainer from "../ReservationContainer/ReservationContainer"

class App extends Component {

  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  componentDidMount = () => {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(response => response.json())
    .then(response => this.setState({reservations: response}))
  }


  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <ReservationContainer />
      </div>
    )
  }
}

export default App;
