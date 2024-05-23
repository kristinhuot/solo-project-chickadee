import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* deleteCareMethod(action) {

    try{
        const response = yield axios.delete(`/api/caremethods/${action.payload.method_id}`)

        yield put({
            type: 'DELETE_CARE_METHOD',
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
             type: 'POST_CARE_METHOD',
             payload: response.data
         })
     } catch(error) {
         console.log('Add care method failed', error);
     }
}


function* careMethodsSaga() {
  yield takeLatest('REMOVE_CARE_METHOD', deleteCareMethod);
  yield takeLatest('ADD_CARE_METHOD', addCareMethod)
}

export default careMethodsSaga;
