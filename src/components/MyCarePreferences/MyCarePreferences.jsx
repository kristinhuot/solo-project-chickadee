import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// allows users to indicate their preferred care methods and stores them to the database 
function MyCarePreferences(){

const [newCareMethod, setNewCareMethod] = useState(''); 
const dispatch = useDispatch()


const submitPreferences = () => {

    // dispatch({
    //     type: 'SUBMIT_NEW_CARE_METHOD',
    //     payload: newCareMethod
    // })

    dispatch({
        type: 'TOGGLE_CARE_METHOD',

    })


}


function handleInput(e){
    setNewCareMethod(e.target.value)
}

function handleClick(method){

try{
    if(isAdded) {
        dispatch({
            type: 'REMOVE_CARE_METHOD',
            payload: method
        })
        setIsAdded(false)
    } else {
        dispatch({
            type: 'ADD_CARE_METHOD',
            payload: method
        })
        setIsAdded(true)
    }

} catch(error){
    console.log('Error handling care method click', error);
}}

 
return (

<Container>   
    <Container sx={{bgcolor:'#717D92', height:'50'}}>
        <Typography fontSize={40} variant="h2" textAlign="center">My Care Preferences</Typography>
    </Container>

    <Typography margin={2} fontSize={25} variant="h3" textAlign="center">I prefer to receive care in the following ways. Select all that apply</Typography>

    <Box display="flex" flexWrap="wrap" gap={2}>
        <Box   
            onClick={handleClick}
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
            >time together
        </Box>
        <Box
             onClick={handleClick}
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
            >tell me nice things
        </Box>
        <Box   
            onClick={handleClick}
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
            >send me nice things
        </Box>
        <Box   
            onClick={handleClick}
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
            >do nice things for me
        </Box>
        <Box   
            onClick={handleClick}
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
            >hugs, please!
        </Box>
        <Box   
            onClick={handleClick}
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
                onChange={handleInput}
                value={newCareMethod}
            />
        </Box>
        
       
    
    </Box> 

    <Button variant="contained" onSubmit={submitPreferences}>Save Preferences</Button>

</Container>

)

}

export default MyCarePreferences; 


