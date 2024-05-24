import { Box } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function MyFlights(){

const flights = useSelector(store => store.flights)
const dispatch = useDispatch(); 

useEffect(() => {
    dispatch({ type: 'FETCH_FLIGHTS' })
}, [])

return(
    <main>
        <h1>My Flights</h1>
        <section>
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

export default MyFlights; 