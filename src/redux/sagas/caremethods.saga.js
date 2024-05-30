import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* updateCareMethod(action) {

    try{
        const response = yield axios.put(`/api/caremethods/${action.payload}`)

        yield put({
            type: 'SET_CARE_METHOD',
            payload: response.data
        })
    } catch(error) {
        console.log('delete care method failed', error);
    }
}


function* addCareMethod(action){
    try{
        const response = yield axios.post('/api/caremethods', action.payload)
 
         yield put({
             type: 'SET_CARE_METHOD',
             payload: response.data
         })
     } catch(error) {
         console.log('Add care method failed', error);
     }
}


function* careMethodsSaga() {
  yield takeLatest('UPDATE_CARE_PREFERENCES', updateCareMethod);
  yield takeLatest('CREATE_CARE_PREFERENCES', addCareMethod)
}

export default careMethodsSaga;
