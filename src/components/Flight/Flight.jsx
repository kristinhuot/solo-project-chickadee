import React from 'react';
import {useSelector} from 'react-redux';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Box, Container, Typography, Paper } from '@mui/material';
import dayjs from 'dayjs';

function Flight(){

const flights = useSelector(store => store.flockmate)
const dispatch = useDispatch(); 

useEffect(() => {
    dispatch({ type: 'FETCH_FLOCK' })
}, [])

console.log('these are the flihts', flights);

return(
<Container>    
    <main>
    <Container sx={{height:'50'}}>
        <Paper><Typography bgcolor="#717D92" fontSize={40} variant="h2" textAlign="center">My Flock's Flights</Typography></Paper>
    </Container>
        <section>  {/* Conditionally renders the flights as long as the flights reducer is not empty. Otherwise, directs users to add their first flight */}
            {flights && flights.length > 0 ? (
                flights.map((flight) => {
                    return ( 
                        <Box key={flight.shared_flight_id}
                        gap={4} 
                        p={2} 
                        m={3}
                        sx={{ 
                            border: '2px solid grey', backgroundColor: '#C9C9CB'
                        }}
                        > 
                            <Typography m={2} fontSize={24} variant='h3'>Flight Name: {flight.flight_title}</Typography>
                            <Typography m={2}>Flight Date: {dayjs(flight.flight_date).format('MMMM DD, YYYY')}</Typography>
                            <Typography m={2}>Details: {flight.flight_details}</Typography>
                        </Box>
                );
            })
        ) : ( 
            <p>No flights found! Please go to Add a Flight to add your first flight</p> 
        )}
        </section>
    </main>
</Container>
)
}

export default Flight; 