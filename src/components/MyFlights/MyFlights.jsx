import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function MyFlights(){}

const myFlights = useSelector(store=> store.MyFlights)
const dispatch = useDispatch(); 

useEffect(() => {
    dispatch({ type: 'FETCH_FLIGHTS' })
}, [])

return(
    <main>
        <h1>My Flights</h1>
        <section>

        </section>



    </main>



)



export default MyFlights; 