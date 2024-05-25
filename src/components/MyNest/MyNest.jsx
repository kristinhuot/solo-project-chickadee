import { Container, Typography, TextField, Button, } from "@mui/material"; 
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";
import dayjs from "dayjs";

// collects user inputs for their profile and saves them to the database 
function MyNest(){

    const [name, setName] = useState('')
    const [pronouns, setPronouns] = useState('')
    const [birthday, setBirthday] = useState(dayjs())
    const [location, setLocation] = useState('')
    const [photo, setPhoto] = useState('')
    const history = useHistory()
    const dispatch = useDispatch()

    const submitMyNestInputs = () => {

    dispatch({
        type: 'SUBMIT_NEST_INPUTS',
        payload: {name, pronouns, birthday, location, photo}
    })
    history.push('my_care_preferences')
}

return (
<Container>
    <Container sx={{bgcolor:'#B18C9E', height:'50'}}>
        <Typography fontSize={40} variant="h2" textAlign="center">My Nest</Typography>
    </Container>

    <Container>
    <form>
        <TextField 
        onChange={(e) => setName(e.target.value)}
        value={name} 
        label="Name"
        margin="dense"
        />
    </form>
    <form>
        <TextField 
        onChange={(e) => setPronouns(e.target.value)} 
        value={pronouns} 
        label="Pronouns"
        margin="dense"
        />
    </form>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker 
            onChange={(newValue) => setBirthday(newValue)}
            value={birthday} 
            label="Birthday"
            margin="dense"
            />
        </LocalizationProvider>
    <form>
        <TextField 
        onChange={(e) => setLocation(e.target.value)}
        value={location} 
        label="Location"
        margin="dense"
        />
    </form>
    <form>
        <TextField 
        onChange={(e) => setPhoto(e.target.value)} 
        value={photo} 
        label="Profile Photo URL"
        margin="dense"
        />
    </form>
    <Button onClick={submitMyNestInputs} variant="contained">Preferences</Button>

    </Container>
</Container>

)}



 export default MyNest; 