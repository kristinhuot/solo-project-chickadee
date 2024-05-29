
const flightToEditReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_FLIGHT_TO_EDIT': 
        return action.payload
    case 'EDIT_FLIGHT_TITLE':
        return {
            ...state, // copy the current value of the reducer into the new object we're going to return
            flight_title: action.payload};
    case 'EDIT_FLIGHT_DATE':
        return {
            ...state,
            flight_date: action.payload}; 
    case 'EDIT_FLIGHT_DETAILS':
        return {
            ...state,
            flight_details: action.payload}; 
    default:
        return state;       
  };
}
  
  export default flightToEditReducer; 
