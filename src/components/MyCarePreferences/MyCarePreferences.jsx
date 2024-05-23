import { Box, Button, Container } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";

// allows users to indicate their preferred care methods and stores them to the database 
function MyCarePreferences(){

const [isAdded, setIsAdded] = useState(false)
const [careMethodColor, setCareMethodColor] = useState(false)
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

    const careMethods = [
        {method_id: 1, value: 'time together'},
        {method_id: 2, value: 'tell me nice things'},
        {method_id: 3, value: 'send me nice things'},
        {method_id: 4, value: 'do nice things for me'},
        {method_id: 5, value: 'hugs, please!'},
        {method_id: 6, value: 'surprises!'},
        {method_id: 7, value: '+ add new!'},
    ]
return (
<>
    <Box display="flex" flexWrap="wrap">
        {careMethods.map((method)=> (
            <Box 
                onClick={() => handleClick(method)} 
                gap={4} 
                p={2} 
                sx={{ 
                    borderRadius: '50%', 
                    border: '2px solid grey',
                    backgroundColor: isAdded ? '#717D92' : 'white',
                }}
                key={method.method_id}
                m={3}
                >
                {method.value}
            </Box>
        ))}
    </Box>
    <Button variant="contained">Save Preferences</Button>
</>
)

}

export default MyCarePreferences; 

/* <Container>

<Box   
    onClick={handleClick}
    height={100}
    width={100}
    my={4}
    display="flex"
    alignItems="center"
    gap={4}
    p={2}
    sx={{ border: '2px solid grey' }}
    >time together
</Box>
<Box
    onClick={handleClick}   
    height={100}
    width={100}
    my={4}
    display="flex"
    alignItems="center"
    gap={4}
    p={2}
    sx={{ border: '2px solid grey' }}
    >tell me nice things
</Box>
<Box   
    onClick={handleClick}  
    height={100}
    width={100}
    my={4}
    display="flex"
    alignItems="center"
    gap={4}
    p={2}
    sx={{ border: '2px solid grey' }}
    >send me nice things
</Box>
<Box   
    onClick={handleClick}  
    height={100}
    width={100}
    my={4}
    display="flex"
    alignItems="center"
    gap={4}
    p={2}
    sx={{ border: '2px solid grey' }}
    >do nice things for me
</Box>
<Box   
    onClick={handleClick}  
    height={100}
    width={100}
    my={4}
    display="flex"
    alignItems="center"
    gap={4}
    p={2}
    sx={{ border: '2px solid grey' }}
    >hugs, please!
</Box>
<Box   
    onClick={handleClick}  
    height={100}
    width={100}
    my={4}
    display="flex"
    alignItems="center"
    gap={4}
    p={2}
    sx={{ border: '2px solid grey' }}
    >surprises!
</Box>
<Box  
    onClick={handleClick}   
    height={100}
    width={100}
    my={4}
    display="flex"
    alignItems="center"
    gap={4}
    p={2}
    sx={{ border: '2px solid grey' }}
    >+ add other 
</Box>

<Button variant="contained">Save Preferences</Button>

</Container> */
