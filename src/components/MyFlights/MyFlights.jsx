import { Box, Button, Container, Typography, Paper } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import dayjs from "dayjs";

function MyFlights(){

const user_id = useSelector(store=> store.user)
const myflights = useSelector(store => store.myflights)
const dispatch = useDispatch()
const history = useHistory()

function deleteFlight(flight){
    dispatch({type: 'DELETE_FLIGHT', payload: flight})
}

function editFlight(flight) {

    history.push(`/edit_flight/${flight.id}`)

}

useEffect(() => {
    dispatch({ type: 'FETCH_MY_FLIGHTS', payload: user_id })
}, [])

return(
<Container>    
    <main>
    <Container sx={{height:'50'}}>
        <Paper><Typography bgcolor="#717D92" fontSize={40} variant="h2" textAlign="center">My Flights</Typography></Paper>
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
                            border: '2px solid grey', backgroundColor: '#C9C9CB'
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
            <Typography margin={2} fontSize={25} variant="h3" textAlign="center">No flights found! Fly on over to Add a Flight to get started with your first flight</Typography>
        )}
        </section>
    </main>
</Container>
)
}

export default MyFlights; 