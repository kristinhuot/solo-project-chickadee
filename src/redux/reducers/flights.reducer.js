const flightsReducer = (state = [], action) => {
    switch (action.type) {
      case 'GET_FLIGHTS':
        return action.payload;
      default:
        return state;
    }
  };
  

  export default flightsReducer;