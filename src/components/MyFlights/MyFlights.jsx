import { Box, Button } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


function MyFlights(){

const user_id = useSelector(store=> store.user)
const myflights = useSelector(store => store.myflights)
const dispatch = useDispatch(); 

function deleteFlight(flight){
    dispatch({type: 'DELETE_FLIGHT', payload: flight.id})
}

function editFlight(){


}

useEffect(() => {
    dispatch({ type: 'FETCH_MY_FLIGHTS', payload: user_id })
}, [])

return(
    <main>
        <h1>My Flights</h1>
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
                            <h2> Flight Name: {flight.flight_title}</h2>
                            <p> Flight Date: {flight.flight_date}</p>
                            <p> Details: {flight.flight_details}</p>
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
)
}

export default MyFlights; 