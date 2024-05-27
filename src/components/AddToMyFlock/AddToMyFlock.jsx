import { Button, Container, TextField, Typography, Paper, Box } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import logger from "redux-logger";

function AddToMyFlock(){

const dispatch = useDispatch()
const [flockmateInput, setFlockmateInput] = useState('') // creates state for the input of the flockmate's code 
const userData = useSelector(store => store.user) // grabs userdata from the reducer 
const [showShareCode, setShowShareCode] = useState(false)
const [shareCode, setShareCode] = useState('')

const handleGenerateCode = (event) => {
    setShareCode(userData.share_code) // update the share code state with the value from the reducer 
    setShowShareCode(true) // show the sharecode in the text field 
   
}


const handleAddFlockmate = (event) => {
    
  
    console.log('this is the flockmateInput', flockmateInput);

    dispatch({
        type: 'SUBMIT_FLOCKMATE',
        payload: {flockmateInput}
    })
}

return(
    <Container>
        <Paper sx={{bgcolor:'#717D92', height:'50'}}><Typography fontSize={40} variant="h2" textAlign="center">Expand Your Flock</Typography></Paper>

        <Box m={4} p={4}>
            <Box m={2} p={2} xs={12}>
                <Paper sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', bgcolor:'#C9C9CB', margin:'2', padding:'2' }}>
                    <Container><Typography fontSize={24} variant="h3" sx={{ mb: 2, mt: 2 }}> Add to your flock by generating and sharing your flock code</Typography></Container>
                    <Button onClick={handleGenerateCode} variant="contained" sx={{ mb: 2 }}>Generate My Share Code</Button>
                    <Container><TextField value={shareCode} fullWidth sx={{ mb: 2 }}></TextField></Container>
                </Paper>
            </Box>
            <Box m={2} p={2} xs={12}>
                <Paper sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', bgcolor:'#C9C9CB' }}>
                    <Container><Typography fontSize={24} variant="h3" sx={{ mb: 2, mt: 2 }}> Add a new flockmate by entering their flock code below</Typography></Container>
                    <Button onClick={handleAddFlockmate} variant="contained" sx={{ mb: 2 }}>Add to My Flock</Button>
                    <Container><TextField onChange={(e) => setFlockmateInput(e.target.value)} value={flockmateInput} fullWidth sx={{ mb: 2 }}></TextField></Container>
                </Paper>
            </Box>
        </Box>
    </Container>


)
}


export default AddToMyFlock; 