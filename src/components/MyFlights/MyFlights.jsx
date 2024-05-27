import { Box, Button, Container, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";

function MyFlights(){

const user_id = useSelector(store=> store.user)
const myflights = useSelector(store => store.myflights)
const dispatch = useDispatch(); 

function deleteFlight(flight){
    dispatch({type: 'DELETE_FLIGHT', payload: flight})
}

function editFlight(){


}

useEffect(() => {
    dispatch({ type: 'FETCH_MY_FLIGHTS', payload: user_id })
}, [])

return(
<Container>    
    <main>
    <Container sx={{bgcolor:'#B18C9E', height:'50'}}>
        <Typography fontSize={40} variant="h2" textAlign="center">My Flights</Typography>
    </Container>
        <section>
            {myflights && myflights.length > 0 ? (
                myflights.map((flight) => {
                    return (
                        <Box key={flight.id}
                        gap={4} 
                        p={2} 
                        m={3}
                        sx={{ 
                            border: '2px solid grey', backgroundColor: '#AE9C8E'
                        }}
                        > 
                        <Typography m={2} fontSize={24} variant='h3'>Flight Name: {flight.flight_title}</Typography>
                        <Typography m={2}>Flight Date: {dayjs(flight.flight_date).format('MMMM DD, YYYY')}</Typography>
                        <Typography m={2}>Details: {flight.flight_details}</Typography>
                            <Button onClick={() => deleteFlight(flight)} variant="outlined">Delete</Button>
                            <Button onClick={() => editFlight(flight)} variant="outlined">Edit</Button>
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

export default MyFlights; 