import { Container, Typography, TextField, Button, Paper } from "@mui/material"; 
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
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
    const user = useSelector(store => store.user)

    console.log('user is', user);

    const submitMyNestInputs = () => {

        const time_together = false 
        const tell_me_nice_things = false
        const do_nice_things_for_me = false
        const hugs_please = false
        const surprises = false

    dispatch({
        type: 'SUBMIT_NEST_INPUTS',
        payload: {name, pronouns, birthday, location, photo}
    })

    dispatch({
        type: 'CREATE_CARE_PREFERENCES', 
        payload: {time_together, tell_me_nice_things, do_nice_things_for_me, hugs_please, surprises}
    })
    history.push('my_care_preferences')
}

return (
<Container>
    <Container sx={{height:'50'}}>
        <Paper><Typography bgcolor="#717D92" fontSize={40} variant="h2" textAlign="center">My Nest</Typography></Paper>
    </Container>

    <Typography margin={2} fontSize={25} variant="h3" textAlign="center">Welcome to the flock, {user.username}! Lets get started by learning a little about you</Typography>

    <Container>
    <form>
        <TextField 
        onChange={(e) => setName(e.target.value)}
        value={name} 
        label="Name"
        margin="dense"
        sx={{mb:2, mt: 4}}
        />
    </form>
    <form>
        <TextField 
        onChange={(e) => setPronouns(e.target.value)} 
        value={pronouns} 
        label="Pronouns"
        margin="dense"
        sx={{mb:2, mt: 2}}
        />
    </form>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker 
            onChange={(newValue) => setBirthday(newValue)}
            value={birthday} 
            label="Birthday"
            margin="dense"
            sx={{mb:2, mt: 2}}
            />
        </LocalizationProvider>
    <form>
        <TextField 
        onChange={(e) => setLocation(e.target.value)}
        value={location} 
        label="Location"
        margin="dense"
        sx={{mb:2, mt: 2}}
        />
    </form>
    <form>
        <TextField 
        onChange={(e) => setPhoto(e.target.value)} 
        value={photo} 
        label="Profile Photo URL"
        margin="dense"
        sx={{mb:4, mt: 2}}
        fullWidth
        />
    </form>
    <Button onClick={submitMyNestInputs} sx={{backgroundColor: '#AE9C8E'}} variant="contained">Preferences</Button>

    </Container>
</Container>

)}



 export default MyNest; 