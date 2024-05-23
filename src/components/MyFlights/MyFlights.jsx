import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function MyFlights(){

// const flights = useSelector(store => store.flightsReducer)
// const dispatch = useDispatch(); 

// useEffect(() => {
//     dispatch({ type: 'FETCH_FLIGHTS' })
// }, [])

// return(
//     <main>
//         <h1>My Flights</h1>
//         <section>
//             {flights && flights.length > 0 ? (
//                 flights.map((flight) => {
//                     return (
//                         <div key={flight.id}>
//                             <h2>{flight.flight_title}</h2>
//                             <p>{flight.flight_date}</p>
//                             <p>{flight.flight_details}</p>
//                         </div>
//                 );
//             })
//         ) : (
//             <p>No flights found! Please go to Add a Flight to add your first flight</p>
//         )}
//         </section>
//     </main>
// )
}

export default MyFlights; 