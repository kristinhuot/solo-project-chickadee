import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* toggleCarePreference(action) {
console.log('action.payload is', action.payload);
    try{
        const response = yield axios.put(`/api/caremethods/`, {method: action.payload})

        yield put({
            type: 'SET_CARE_METHOD',
            payload: response.data
        })
    } catch(error) {
        console.log('Toggle care method failed', error);
    }
}


function* addCareMethod(action){
    try{
        const response = yield axios.post('/api/caremethods', action.payload)
 
         yield put({
             type: 'GET_CARE_METHODS',
             payload: response.data
         })
     } catch(error) {
         console.log('Add care method failed', error);
     }
}


function* getCareMethods () {
    try{
        const response = yield axios.get('/api/caremethods')
 
         yield put({
             type: 'SET_CARE_METHOD',
             payload: response.data
         })
     } catch(error) {
         console.log('Get care method failed', error);
     }


}



function* careMethodsSaga() {
  yield takeLatest('TOGGLE_PREFERENCE', toggleCarePreference);
  yield takeLatest('CREATE_CARE_PREFERENCES', addCareMethod)
  yield takeLatest('GET_CARE_METHODS', getCareMethods)
}

export default careMethodsSaga;
