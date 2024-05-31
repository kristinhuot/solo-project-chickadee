import { Box, Button, Container, TextField, Typography, Paper } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

// allows users to indicate their preferred care methods and stores them to the database 
function MyCarePreferences(){

const [newCareMethod, setNewCareMethod] = useState('') 
const dispatch = useDispatch()
const history = useHistory()
const [timeTogether, setTimeTogether] = useState(false)
const [tellMeNiceThings, setTellMeNiceThings] = useState(false)
const [sendMeNiceThings, setSendMeNiceThings] = useState(false)
const [doNiceThings, setDoNiceThings] = useState(false)
const [hugs, setHugs] = useState(false)
const [surprises, setSurprises] = useState(false)


const submitPreferences = (e) => {

    history.push('my_flights') 
    // dispatch({
    //     type: 'SUBMIT_NEW_CARE_METHOD',
    //     payload: newCareMethod
    // })

    dispatch({
        type: 'TOGGLE_CARE_METHOD',

    })


}

function handleTimeTogether(e){
    try{
        if(timeTogether) {
            dispatch({
                type: 'TOGGLE_PREFERENCE',
                payload: 'time_together'
            })
            setTimeTogether(false)
        } else {
            dispatch({
                type: 'TOGGLE_PREFERENCE',
                payload: 'time_together'
            })
            setTimeTogether(true)
        }
    
    } catch(error){
        console.log('Error handling time together click', error);
    }
    
}

function handleTellMeNiceThings(e){
    try{
        if(tellMeNiceThings) {
            dispatch({
                type: 'TOGGLE_PREFERENCE',
                payload: 'tell_me_nice_things'
            })
            setTellMeNiceThings(false)
        } else {
            dispatch({
                type: 'TOGGLE_PREFERENCE',
                payload: 'tell_me_nice_things'
            })
            setTellMeNiceThings(true)
        }
    
    } catch(error){
        console.log('Error handling tell me nice things click', error);
    }
    
}

function handleSendMeNiceThings(e){
    try{
        if(sendMeNiceThings) {
            dispatch({
                type: 'TOGGLE_PREFERENCE',
                payload: 'send_me_nice_things'
            })
            setSendMeNiceThings(false)
        } else {
            dispatch({
                type: 'TOGGLE_PREFERENCE',
                payload: 'send_me_nice_things'
            })
            setSendMeNiceThings(true)
        }
    
    } catch(error){
        console.log('Error handling send me nice things click', error);
    }
    
}

function handleDoNiceThings(e){
    try{
        if(doNiceThings) {
            dispatch({
                type: 'TOGGLE_PREFERENCE',
                payload: 'do_nice_things_for_me'
            })
            setDoNiceThings(false)
        } else {
            dispatch({
                type: 'TOGGLE_PREFERENCE',
                payload: 'do_nice_things_for_me'
            })
            setDoNiceThings(true)
        }
    
    } catch(error){
        console.log('Error handling do nice things click', error);
    }
    
}

function handleHugsPlease(e){
    try{
        if(hugs) {
            dispatch({
                type: 'TOGGLE_PREFERENCE',
                payload: 'hugs_please'
            })
            setHugs(false)
        } else {
            dispatch({
                type: 'TOGGLE_PREFERENCE',
                payload: 'hugs_please'
            })
            setHugs(true)
        }
    
    } catch(error){
        console.log('Error handling hugs, please click', error);
    }
    
}

function handleSurprises(e){
    try{
        if(surprises) {
            dispatch({
                type: 'TOGGLE_PREFERENCE',
                payload: 'surprises'
            })
            setSurprises(false)
        } else {
            dispatch({
                type: 'TOGGLE_PREFERENCE',
                payload: 'surprises'
            })
            setSurprises(true)
        }
    
    } catch(error){
        console.log('Error handling surprises click', error);
    }
    
}




function handleInput(e){
    setNewCareMethod(e.target.value)
}


 
return (

<Container>   
    <Container sx={{height:'50'}}>
        <Paper><Typography bgcolor="#717D92" fontSize={40} variant="h2" textAlign="center">My Care Preferences</Typography></Paper>
    </Container>

    <Container>
    <Typography margin={2} fontSize={25} variant="h3" textAlign="center">Finish setting up your profile by indicating the ways in which you prefer to receive care. Select all that apply</Typography>

    <Box display="flex" flexWrap="wrap" gap={2}>
        <Box   
            onClick={handleTimeTogether}
            height={25}
            width={100}
            my={4}
            display="flex"
            alignItems="center"
            gap={4}
            p={2}
            sx={{ 
                border: '2px solid grey',
                borderRadius: '50%',
                alignItems: 'center',
                justifyContent: 'center', 
                textAlign: 'center',
                backgroundColor: timeTogether ? '#6D7D98' : '#E6E6E6' 
            }}
            >time together
        </Box>
        <Box
             onClick={handleTellMeNiceThings}
             height={25}
             width={100}
             my={4}
             display="flex"
             alignItems="center"
             gap={4}
             p={2}
             sx={{ 
                 border: '2px solid grey',
                 borderRadius: '50%',
                 alignItems: 'center',
                 justifyContent: 'center', 
                 textAlign: 'center',
                 backgroundColor: tellMeNiceThings ? '#6D7D98' : '#E6E6E6' 
             }}
            >tell me nice things
        </Box>
        <Box   
            onClick={handleSendMeNiceThings}
            height={25}
            width={100}
            my={4}
            display="flex"
            alignItems="center"
            gap={4}
            p={2}
            sx={{ 
                border: '2px solid grey',
                borderRadius: '50%',
                alignItems: 'center',
                justifyContent: 'center', 
                textAlign: 'center',
                backgroundColor: sendMeNiceThings ? '#6D7D98' : '#E6E6E6' 
            }}
            >send me nice things
        </Box>
        <Box   
            onClick={handleDoNiceThings}
            height={25}
            width={100}
            my={4}
            display="flex"
            alignItems="center"
            gap={4}
            p={2}
            sx={{ 
                border: '2px solid grey',
                borderRadius: '50%',
                alignItems: 'center',
                justifyContent: 'center', 
                textAlign: 'center',
                backgroundColor: doNiceThings ? '#6D7D98' : '#E6E6E6' 
            }}
            >do nice things for me
        </Box>
        <Box   
            onClick={handleHugsPlease}
            height={25}
            width={100}
            my={4}
            display="flex"
            alignItems="center"
            gap={4}
            p={2}
            sx={{ 
                border: '2px solid grey',
                borderRadius: '50%',
                alignItems: 'center',
                justifyContent: 'center', 
                textAlign: 'center',
                backgroundColor: hugs ? '#6D7D98' : '#E6E6E6' 
            }}
            >hugs, please!
        </Box>
        <Box   
            onClick={handleSurprises}
            height={25}
            width={100}
            my={4}
            display="flex"
            alignItems="center"
            gap={4}
            p={2}
            sx={{ 
                border: '2px solid grey',
                borderRadius: '50%',
                alignItems: 'center',
                justifyContent: 'center', 
                textAlign: 'center',
                backgroundColor: surprises ? '#6D7D98' : '#E6E6E6' 
            }}
            >surprises!
        </Box>
        <Box  
            height={25}
            width={100}
            my={4}
            display="flex"
            alignItems="center"
            gap={4}
            p={2}
            sx={{ 
                border: '2px solid grey',
                borderRadius: '50%',
                alignItems: 'center',
                justifyContent: 'center', 
                textAlign: 'center',
                backgroundColor: '#E6E6E6'
            }}
            ><TextField 
                label='+ add other'
                size="small"
                multiline
                onChange={handleInput}
                value={newCareMethod}
            />
        </Box>
        
       
    
    </Box> 

    <Button variant="contained" onClick={submitPreferences}>Save Preferences</Button>
    </Container>
</Container>

)

}

export default MyCarePreferences; 


