import { Container, TextField, Typography, Box, Button, Modal } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useDispatch } from "react-redux";

// Adds a new flight to the database and renders on the homepage 
function AddFlights(){

const [flightTitle, setFlightTitle] = useState('');
const [flightDetails, setFlightDetails] = useState('');
const [flightDate, setFlightDate] = useState(dayjs())
const dispatch = useDispatch()
const [showModal, setShowModal] = useState(false); // sets base state of modal to false so it does not yet appear 

const submitNewFlight = () => {

    dispatch({
        type: 'SUBMIT_NEW_FLIGHT',
        payload: {flightTitle, flightDetails, flightDate}
    })
    setShowModal(true) // opens the modal after submitting a flight to see 
    // if the user wants to add another flight 
}

const handleModalClose = () => {
    setShowModal(false); // Close the modal
    // Reset form fields 
    setFlightTitle('');
    setFlightDetails('');
    setFlightDate(dayjs());
  };

return (

<Container>
    <Container sx={{bgcolor:'#B18C9E', height:'50'}}>
        <Typography fontSize={40} variant="h2" textAlign="center">Add a Flight</Typography>
    </Container>
    <Container>
        <form>
            <TextField 
            onChange={(e) => setFlightTitle(e.target.value)}
            value={flightTitle} 
            label="Flight Title"
            margin="dense"
            multiline
            />
        </form>
        <form>
            <TextField 
            onChange={(e) => setFlightDetails(e.target.value)} 
            multiline
            value={flightDetails} 
            label="Flight Details"
            margin="dense"
            />
        </form>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker 
                onChange={(newValue) => setFlightDate(newValue)}
                value={flightDate} 
                label="Flight Date"
                margin="dense"
                 />
            </LocalizationProvider>
    </Container>

    <Container>
         <Button onClick={submitNewFlight} variant="contained">Submit Flight</Button>
    </Container>

    <Modal open={showModal} onClose={handleModalClose}>
        <Box>
          <Typography variant="h6">Do you want to submit another flight?</Typography>
          <Button onClick={handleModalClose}>No</Button>
          <Button onClick={handleModalClose}>Yes</Button>
        </Box>
      </Modal>
</Container>


)



}

export default AddFlights; 