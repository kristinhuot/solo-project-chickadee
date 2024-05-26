import { Container, Typography, Button, Box } from "@mui/material";
import { useSelector } from "react-redux";
import { useParams, useHistory, useDispatch } from "react-router-dom/cjs/react-router-dom.min";

function EditFlight(){

const params = useParams()
const idOfFlightToEdit = params.flight_id
const dispatch = useDispatch()
// const history = useHistory()

useEffect(() => {
    dispatch({
      type: 'FETCH_FLIGHT_TO_EDIT',
      payload: idOfFlightToEdit
    })
  }, [])

  const FlightToEdit = useSelector(store => store.flightToEdit)

return(
<Container>    
    <Container sx={{bgcolor:'#B18C9E', height:'50'}}>
        <Typography fontSize={40} variant="h2" textAlign="center">Edit Flight</Typography>
    </Container>
   
</Container> 

    )

}
export default EditFlight; 