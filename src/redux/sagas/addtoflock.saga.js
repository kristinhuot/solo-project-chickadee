import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addToFlock(action){
    try{
        const response = yield axios.post('/api/addtoflock', action.payload)
 
         yield put({
             type: 'FETCH_FLIGHTS',
             payload: response.data
         })
     } catch(error) {
         console.log('Add to flock failed', error);
     }
}




function* addToFlockSaga() {
  yield takeLatest('SUBMIT_FLOCKMATE', addToFlock)
}

export default addToFlockSaga;
