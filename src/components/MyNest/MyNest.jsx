import { Container, Typography, Input, TextField, Button, } from "@mui/material"; 
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";

 function MyNest(){

const [name, setName] = useState('')
const [pronouns, setPronouns] = useState('')
const [birthday, setBirthday] = useState()
const [location, setLocation] = useState('')
const [photo, setPhoto] = useState('')
const history = useHistory()
const dispatch = useDispatch()

const submitMyNestInputs = () => {

    dispatch({
        type: 'SUBMIT_MYNEST_INPUTS',
        payload: name, pronouns, birthday, location, photo
    })

}

return (
<>
    <Container sx={{bgcolor:'plum', height:'100'}}>
        <Typography variant="h1" textAlign="center" sx={{":hover": {bgcolor: "#6D7D98"}}}>My Nest</Typography>
    </Container>

    <Container>
    <form>
        <TextField onChange={(e) => setName(e.target.value)} value={name} label="Name"/>
    </form>
    <form>
        <TextField onChange={(e) => setPronouns(e.target.value)} value={pronouns} label="Pronouns"/>
    </form>
    {/* <Container components={['DatePicker']}> */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker onChange={(e) => setBirthday(e.target.value)} value={birthday} label="Birthday" />
        </LocalizationProvider>
    {/* </Container> */}
    <form>
        <TextField onChange={(e) => setLocation(e.target.value)} value={location} label="Location"/>
    </form>
    <form>
        <TextField onChange={(e) => setPhoto(e.target.value)} value={photo} label="Profile Photo URL"/>
    </form>
    <Button onClick={submitMyNestInputs} variant="contained">Preferences</Button>

</Container>
</>

)}



 export default MyNest; 