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

function* flightsSaga() {
  yield takeLatest('FETCH_FLIGHTS', fetchFlights);
}

export default flightsSaga;
