import React, { Component } from 'react';
import '../App/App.css';
import Reservation from "../Reservation/Reservation"

function ReservationContainer({reservations}) {

  const reservationComponents = reservations.map(reservation => {
    return <Reservation key={reservation.id} reservation={reservation}/>
  })

  return (
    <div className = "resy-container">
      {reservationComponents}
    </div>
  );
};

export default ReservationContainer;