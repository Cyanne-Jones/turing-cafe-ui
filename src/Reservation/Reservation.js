import React from 'react';
import '../App/App.css';

function Reservation ({reservation, deleteReservation}) {

  return(
    <div className="resy">
      <h2>{reservation.name}</h2>
      <p>{reservation.date}</p>
      <p>{reservation.time} pm</p>
      <p>Number of Guests: {reservation.number}</p>
      <button onClick={() => deleteReservation(reservation)}>Cancel</button>
    </div>
  )
}

export default Reservation;