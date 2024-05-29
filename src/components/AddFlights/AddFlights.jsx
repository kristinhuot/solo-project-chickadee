import { Container, TextField, Typography, Box, Button, Modal, Paper } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

// Adds a new flight to the database and renders on the homepage 
function AddFlights(){

const [flightTitle, setFlightTitle] = useState('');
const [flightDetails, setFlightDetails] = useState('');
const [flightDate, setFlightDate] = useState(dayjs())
const dispatch = useDispatch()
const history = useHistory()

// Modal funcationality 
const [showModal, setShowModal] = useState(false); // sets base state of modal to false so it does not yet appear 

const handleModalCloseNo = () => {
    setShowModal(false); // Close the modal
    // Reset form fields 
    history.push('/home')
  };

  const handleModalCloseYes = () => {
    setShowModal(false); // Close the modal
    // Reset form fields 
    setFlightTitle('');
    setFlightDetails('');
    setFlightDate(dayjs());
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const submitNewFlight = () => {

    dispatch({
        type: 'SUBMIT_NEW_FLIGHT',
        payload: {flightTitle, flightDetails, flightDate}
    })
    setShowModal(true) // opens the modal after submitting a flight to see 
    // if the user wants to add another flight 
}

return (

<Container>
    <Paper sx={{bgcolor:'#717D92', height:'50'}}><Typography fontSize={40} variant="h2" textAlign="center">Add a Flight</Typography></Paper>
    
    <Container>
        <form>
            <TextField 
            onChange={(e) => setFlightTitle(e.target.value)}
            value={flightTitle} 
            label="Flight Title"
            margin="dense"
            sx={{mb:2, mt: 4}}
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
            sx={{mb:2, mt: 2}}
            />
        </form>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker 
                onChange={(newValue) => setFlightDate(newValue)}
                value={flightDate} 
                label="Flight Date"
                margin="dense"
                sx={{mb:4, mt: 2}}
                 />
            </LocalizationProvider>
    </Container>

    <Container>
         <Button onClick={submitNewFlight} variant="contained">Submit Flight</Button>
    </Container>

    <Modal open={showModal} onClose={handleModalCloseYes}>
        <Box sx={style}>
          <Typography id="modal-submit-another-flight?" variant="h6">Do you want to submit another flight?</Typography>
          <Button onClick={handleModalCloseNo}>No</Button>
          <Button onClick={handleModalCloseYes}>Yes</Button>
        </Box>
      </Modal>
</Container>


)



}

export default AddFlights; 