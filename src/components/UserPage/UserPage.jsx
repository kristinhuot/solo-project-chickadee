import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function FlockFlights(){

const flights = useSelector(store => store.flightsReducer)
const dispatch = useDispatch(); 
const user = useSelector((store) => store.user);

useEffect(() => {
    dispatch({ type: 'FETCH_FLIGHTS' })
}, [])

return(
    <main>
        <h2>Welcome, {user.username}!</h2>
        <h1>My Flock's Flights</h1>
        <section>
            {flights && flights.length > 0 ? (
                flights.map((flight) => {
                    return (
                        <div key={flight.id}>
                            <h2>{flight.flight_title}</h2>
                            <p>{flight.flight_date}</p>
                            <p>{flight.flight_details}</p>
                        </div>
                );
            })
        ) : (
            <p>No flights found! Please go to Add a Flight to add your first flight</p>
        )}

          {/* <LogOutButton className="btn" />     */}
        </section>
    </main>
)
}

export default FlockFlights; 