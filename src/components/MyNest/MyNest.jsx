import { Container, Typography, TextField, Button, } from "@mui/material"; 
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";
import dayjs from "dayjs";


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
<>
    <Container sx={{bgcolor:'#B18C9E', height:'50'}}>
        <Typography variant="h2" textAlign="center">My Nest</Typography>
    </Container>

    <Container>
    <form>
        <TextField 
        onChange={(e) => setName(e.target.value)}
        value={name} 
        label="Name"/>
    </form>
    <form>
        <TextField 
        onChange={(e) => setPronouns(e.target.value)} 
        value={pronouns} 
        label="Pronouns"
        />
    </form>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker 
            onChange={(newValue) => setBirthday(newValue)}
            value={birthday} 
            label="Birthday" />
        </LocalizationProvider>
    <form>
        <TextField 
        onChange={(e) => setLocation(e.target.value)}
        value={location} 
        label="Location"/>
    </form>
    <form>
        <TextField 
        onChange={(e) => setPhoto(e.target.value)} 
        value={photo} 
        label="Profile Photo URL"/>
    </form>
    <Button onClick={submitMyNestInputs} variant="contained">Preferences</Button>

</Container>
</>

)}



 export default MyNest; 