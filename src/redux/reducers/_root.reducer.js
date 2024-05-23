import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import flights from './flights.reducer'
import caremethods from './caremethods.reducer'

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // contains id, username and sharecode if someone is logged in from UserReducer function. Also contains the myNestReducer that includes MyNest details about the user 
  flights, // contains all flight details 
  caremethods,
});

export default rootReducer;
