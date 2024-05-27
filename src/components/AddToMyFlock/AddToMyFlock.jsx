import { Button, Container, TextField, Typography, Paper, Box } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";

function AddToMyFlock(){

const userData = useSelector(store => store.user)
const [showShareCode, setShowShareCode] = useState(false)
const [shareCode, setShareCode] = useState('')

const handleGenerateCode = (event) => {
    setShareCode(userData.share_code) // update the share code state with the value from the reducer 
    setShowShareCode(true) // show the sharecode in the text field 
   
}


return(
<Container>
    <Container sx={{bgcolor:'#B18C9E', height:'50'}}>
        <Typography fontSize={40} variant="h2" textAlign="center">Expand Your Flock</Typography>
    </Container>
    <Box m={4} p={4}>
        <Box m={2} p={2} xs={12}>
            <Paper sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', bgcolor:'#C9C9CB' }}>
               <Typography fontSize={24} variant="h3" sx={{ mb: 2, mt: 2 }}> Add to your flock by generating and sharing your flock code</Typography>
                <Button onClick={handleGenerateCode} variant="contained" sx={{ mb: 2 }}>Generate My Share Code</Button>
                <TextField value={shareCode} fullWidth sx={{ mb: 2 }}></TextField>
            </Paper>
        </Box>
        <Box m={2} p={2} xs={12}>
            <Paper sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', bgcolor:'#C9C9CB' }}>
               <Typography fontSize={24} variant="h3" sx={{ mb: 2, mt: 2 }}> Add a new flockmate by entering their flock code below</Typography>
                <Button variant="contained" sx={{ mb: 2 }}>Generate My Share Code</Button>
                <TextField fullWidth sx={{ mb: 2 }}></TextField>
            </Paper>
        </Box>
    </Box>
</Container>


)
}


export default AddToMyFlock; 