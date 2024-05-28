import { Container, Typography, Button, Box, TextField } from "@mui/material";
import { useSelector, useDispatch} from "react-redux";
import { useParams, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";

function EditFlight(){

const params = useParams() // will use this id to make a GET request to obtain the data for the single flight to edit 
const idOfFlightToEdit = params.flight_id
const dispatch = useDispatch()
const history = useHistory()

useEffect(() => {
    dispatch({
      type: 'FETCH_FLIGHT_TO_EDIT',
      payload: idOfFlightToEdit
    })
  }, [])

  const FlightToEdit = useSelector(store => store.editflight)
console.log('FlightToEdit is:', FlightToEdit);
  const handleFlightNameChange = (event) => {
    dispatch({
        type: 'EDIT_FLIGHT_TITLE_INPUT',
        payload: event.target.value
    })
  }

  const updateFlight = (event) => {
    event.preventDefault() 

    dispatch({
        type: 'UPDATE_FLIGHT',
        payload: FlightToEdit
    })

    history.push('/my_flight')

  }

return(
<Container>    
    <Container sx={{bgcolor:'#B18C9E', height:'50'}}>
        <Typography fontSize={40} variant="h2" textAlign="center">Edit Flight</Typography>
    </Container>

   <Container>
        <form onSubmit={updateFlight}>
          {FlightToEdit.flight_title && 
                <TextField 
                  value={FlightToEdit.flight_title}
                  onChange={handleFlightNameChange}>
                      {FlightToEdit.flight_title}
                </TextField>
            }
            <Button variant="outlined">Submit Changes</Button>
        </form>
   </Container>


</Container> 

    )

}
export default EditFlight; 

