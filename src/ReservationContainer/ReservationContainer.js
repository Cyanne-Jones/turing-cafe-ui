import React from 'react';
import '../App/App.css';
import Reservation from "../Reservation/Reservation";

function ReservationContainer({reservations, deleteReservation}) {

  const reservationComponents = reservations.map(reservation => {
    return <Reservation key={reservation.id} reservation={reservation} deleteReservation={deleteReservation}/>
  })

  return (
    <div className="resy-container">
      {reservationComponents}
    </div>
  );
};

export default ReservationContainer;