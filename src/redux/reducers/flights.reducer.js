
const flightsReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_FLIGHTS':
        return action.payload;
      default:
        return state;
    }
  };

  
  export default flightsReducer; 




