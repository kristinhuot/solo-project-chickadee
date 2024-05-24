import React from 'react';
import {useSelector} from 'react-redux';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Box } from '@mui/material';

function FlockFlights(){
    
const flights = useSelector(store => store.flights)
const dispatch = useDispatch(); 
const user = useSelector((store) => store.user);

useEffect(() => {
    dispatch({ type: 'FETCH_FLIGHTS' })
}, [])

return(
    <main>
        <h2>Welcome, {user.username}!</h2>
        <h1>My Flock's Flights</h1>
        <section>  {/* Conditionally renders the flights as long as the flights reducer is not empty. Otherwise, directs users to add their first flight */}
            {flights && flights.length > 0 ? (
                flights.map((flight) => {
                    return (
                        <Box key={flight.id}
                        gap={4} 
                        p={2} 
                        m={3}
                        sx={{ 
                            border: '2px solid grey', backgroundColor: '#AE9C8E'
                        }}
                        > 
                            <h2> Flight Name: {flight.flight_title}</h2>
                            <p> Flight Date: {flight.flight_date}</p>
                            <p> Details: {flight.flight_details}</p>
                        </Box>
                );
            })
        ) : ( 
            <p>No flights found! Please go to Add a Flight to add your first flight</p> 
        )}
        </section>
    </main>
)
}

export default FlockFlights; 