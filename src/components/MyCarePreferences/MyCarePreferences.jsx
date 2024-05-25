import { Box, Button, Container } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";

// allows users to indicate their preferred care methods and stores them to the database 
function MyCarePreferences(){

const dispatch = useDispatch()

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
            >+ add other 
        </Box>
        
       
    
    </Box> 

    <Button variant="contained">Save Preferences</Button>
</Container>

)

}

export default MyCarePreferences; 


