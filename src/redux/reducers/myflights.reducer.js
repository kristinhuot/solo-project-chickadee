

const myFlightsReducer = (state = [], action) => {
    switch (action.type) {
      case 'GET_MY_FLIGHTS':
        return action.payload;
      default:
        return state;
    }
  };

  export default myFlightsReducer; 