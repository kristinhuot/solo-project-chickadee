import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* fetchFlights() {
    try{
       const response = yield axios.get('/api/flights')

        yield put({
            type: 'GET_FLIGHTS',
            payload: response.data
        })
    } catch(error) {
        console.log('fetch Flights failed', error);
    }
}


function* addFlight(action){
    try{
        const response = yield axios.post('/api/flights', action.payload)
 
         yield put({
             type: 'ADD_FLIGHT',
             payload: response.data
         })
     } catch(error) {
         console.log('Add Flight failed', error);
     }
}


function* flightsSaga() {
  yield takeLatest('FETCH_FLIGHTS', fetchFlights);
  yield takeLatest('SUBMIT_NEW_FLIGHT', addFlight)
}

export default flightsSaga;
