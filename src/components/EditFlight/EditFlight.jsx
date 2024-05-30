import {
  Container,
  Typography,
  Button,
  TextField,
  FormControl,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
  useParams,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

function EditFlight() {
  const params = useParams(); // will use this id to make a GET request to obtain the data for the single flight to edit
  const idOfFlightToEdit = params.flight_id;
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch({
      type: "FETCH_FLIGHT_TO_EDIT",
      payload: idOfFlightToEdit,
    });
  }, []);

  const FlightToEdit = useSelector((store) => store.editflight);
  const flightDateToEdit = dayjs(FlightToEdit.flight_date)

  const handleFlightNameChange = (event) => {
    dispatch({
      type: "EDIT_FLIGHT_TITLE",
      payload: event.target.value,
    });
  };

  const handleFlightDateChange = (event) => {
    dispatch({
      type: "EDIT_FLIGHT_DATE",
      payload: event.target.value,
    });
  };

  const handleFlightDetailsChange = (event) => {
    dispatch({
      type: "EDIT_FLIGHT_DETAILS",
      payload: event.target.value,
    });
  };

  const updateFlight = (event) => {
    event.preventDefault();

    dispatch({
      type: "UPDATE_FLIGHT",
      payload: FlightToEdit,
    });

    history.push("/my_flights");
  };

  return (
    <Container>
      <Container sx={{ bgcolor: "#717D92", height: "50" }}>
        <Typography fontSize={40} variant="h2" textAlign="center">
          Edit Flight
        </Typography>
      </Container>

      <Container>
        <FormControl>
          <Container>
            {FlightToEdit.flight_title && (
              <TextField
                value={FlightToEdit.flight_title}
                onChange={handleFlightNameChange}
                label="Flight Title"
                margin="dense"
                multiline
                sx={{mb:2, mt: 4}}
              ></TextField>
            )}
          </Container>
          <Container>
            {FlightToEdit.flight_date && (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  onChange={handleFlightDateChange}
                  value={flightDateToEdit}
                  label="Flight Date"
                  margin="dense"
                  sx={{mb:2, mt: 4}}
                />
              </LocalizationProvider>
            )}
          </Container>
          <Container>
            {FlightToEdit.flight_details && (
              <TextField
                value={FlightToEdit.flight_details}
                onChange={handleFlightDetailsChange}
                label="Flight Details"
                margin="dense"
                multiline
                sx={{mb:2, mt: 4}}
              ></TextField>
            )}
          </Container>
        </FormControl>
        <Container>
          <Button sx={{mb:2, mt: 4}} onClick={updateFlight} variant="contained">
            Submit Changes
          </Button>
        </Container>
      </Container>
    </Container>
  );
}
export default EditFlight;
