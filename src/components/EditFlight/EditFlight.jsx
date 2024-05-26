import { Container, Typography, Button, Box } from "@mui/material";
import { useSelector } from "react-redux";

function EditFlight(){

const myflights = useSelector(store=> store.myflights)


return(
<Container>    
    <Container sx={{bgcolor:'#B18C9E', height:'50'}}>
        <Typography fontSize={40} variant="h2" textAlign="center">Edit Flight</Typography>
    </Container>
   
</Container>

    )

}
export default EditFlight; 