
const flightToEditReducer = (state = {}, action) => {
    if (action.type === 'SET_FLIGHT_TO_EDIT') {
        return action.payload
    } else if (action.type === 'EDIT_FLIGHT_TITLE') {
        return{
            ...state, // copy the current value of the reducer into the new object we're going to return
            flight_title: action.payload}
        }
        return state;       
  };

  
  export default flightToEditReducer; 
