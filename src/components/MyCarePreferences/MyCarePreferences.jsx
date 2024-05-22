import { Box, Button, Container } from "@mui/material";

function MyCarePreferences(){

function handleClick(){}


return (

    <Container>

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

</Container>

)
}

export default MyCarePreferences; 