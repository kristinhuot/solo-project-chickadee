import axios from 'axios';
import { put, takeLatest, call } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchUser() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    // the config includes credentials which
    // allow the server session to recognize the user
    // If a user is logged in, this will return their information
    // from the server session (req.user)
    const response = yield axios.get('/api/user', config);

    // now that the session has given us a user object
    // with an id and username set the client-side user object to let
    // the client-side code know the user is logged in
    yield put({ type: 'SET_USER', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}
// Function to send updated user inputs for the Nest to the server, 
// then update the Users reducer
function* setNestInputs(action){
  console.log('action.payload is', action.payload);
  try {
    yield axios.put('/api/user', action.payload)
    yield call (fetchUser)

  } catch(error) {
    console.log('Setting Nest Inputs failed', error);
  }
}



function* userSaga() {
  yield takeLatest('FETCH_USER', fetchUser),
  yield takeLatest('SUBMIT_NEST_INPUTS', setNestInputs);
}

export default userSaga;
