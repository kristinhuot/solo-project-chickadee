import { Container, Typography, Input, TextField, } from "@mui/material"; 
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';



 function MyNest(){

return (
<>
    <Container sx={{bgcolor:'plum', height:'100'}}>
        <Typography variant="h1" textAlign="center" sx={{":hover": {bgcolor: "#6D7D98"}}}>My Nest</Typography>
    </Container>

    <Container>
    <form>
        <TextField label="Name"/>
    </form>
    <form>
        <TextField label="Pronouns"/>
    </form>
    <Container components={['DatePicker']}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label="Birthday" />
        </LocalizationProvider>
    </Container>



</Container>
</>

)}



 export default MyNest; 