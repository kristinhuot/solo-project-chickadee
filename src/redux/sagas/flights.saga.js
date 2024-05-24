import { put, take, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* fetchFlights() {
    try{
       const response = yield axios.get('/api/flights')

        yield put({
            type: 'SET_FLIGHTS',
            payload: response.data
        })
    } catch(error) {
        console.log('fetch Flights failed', error);
    }
}

function* fetchMyFlights(action){

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

function* flightsSaga() {
  yield takeLatest('FETCH_FLIGHTS', fetchFlights)
  yield takeLatest('SUBMIT_NEW_FLIGHT', addFlight)
  yield takeLatest('FETCH_MY_FLIGHTS', fetchMyFlights)
  yield takeLatest('DELETE_FLIGHT', deleteFlight)
}

export default flightsSaga;
