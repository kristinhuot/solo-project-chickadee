

const myFlightsReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_MY_FLIGHTS':
        return action.payload;
      default:
        return state;
    }
  };

  export default myFlightsReducer; 