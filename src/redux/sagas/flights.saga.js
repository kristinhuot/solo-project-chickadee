import { put, take, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* fetchFlights() {
    try{
       const response = yield axios.get('/api/flights')

        yield put({
            type: 'SET_MY_FLOCK',
            payload: response.data
        })
        console.log('response.data is', response.data);
    } catch(error) {
        console.log('fetch Flights failed', error);
    }
}

function* fetchMyFlights(action){

console.log('action.payload is', action.payload);

    try{
        const response = yield axios.get(`/api/flights/mine`)
 
         yield put({
             type: 'SET_MY_FLIGHTS',
             payload: response.data
         })
     } catch(error) {
         console.log('fetch my Flights failed', error);
     }
}

function* addFlight(action){
    try{
        const response = yield axios.post('/api/flights', action.payload)
 
         yield put({
             type: 'FETCH_MY_FLIGHTS',
             payload: response.data
         })
     } catch(error) {
         console.log('Add Flight failed', error);
     }
}

function* deleteFlight(action){

    const flight_id = action.payload.id
    const user_id = action.payload.user_id

    try{
        yield axios.delete(`/api/flights/${flight_id}`)

        yield put({
            type: 'FETCH_MY_FLIGHTS', payload: user_id
        })
    } catch(error) {
        console.log('Add Flight failed', error);
    }
  
}

function* fetchFlighttoEdit(action){
    try{
        const idOfFlight = action.payload
        console.log('display action.payload', action.payload);
        const response = yield axios.get(`/api/flights/edit_flight/${idOfFlight}`)
        // Once we get the flight that we want to edit, we send it to the editFlightsReducer
       
       console.log('response.data is. HTML', response.data);
        const flightToEdit = response.data
        yield put({
            type: 'SET_FLIGHT_TO_EDIT',
            payload: flightToEdit
        })

    } catch(err) {
        console.log('fetch Flight to edit error', err);
    }

}

function* updateFlight(action){
    try{
       const editedFlight = action.payload 
        
       yield axios.put(`/api/flights/${editedFlight.id}`, editedFlight)

        yield put({
            type: 'FETCH_MY_FLIGHTS'
        })
    } catch (error){
        console.log('Update flight error', error)
    }


}

function* flightsSaga() {
  yield takeLatest('SUBMIT_NEW_FLIGHT', addFlight)
  yield takeLatest('FETCH_MY_FLIGHTS', fetchMyFlights)
  yield takeLatest('DELETE_FLIGHT', deleteFlight)
  yield takeLatest('FETCH_FLIGHT_TO_EDIT', fetchFlighttoEdit)
  yield takeLatest('UPDATE_FLIGHT', updateFlight);
  yield takeLatest('FETCH_FLOCK', fetchFlights)
}

export default flightsSaga;
