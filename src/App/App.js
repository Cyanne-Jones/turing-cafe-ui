import React, { Component } from 'react';
import './App.css';
import ReservationContainer from "../ReservationContainer/ReservationContainer"
import Form from "../Form/Form"

class App extends Component {

  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  saveReservation = (reservation) => {
    this.setState({reservations: [...this.state.reservations, reservation]})
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
        <Form saveReservation={this.saveReservation} reservations={this.state.reservations}/>
        <ReservationContainer reservations={this.state.reservations}/>
      </div>
    )
  }
}

export default App;
