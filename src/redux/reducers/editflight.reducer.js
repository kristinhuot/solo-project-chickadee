
const editFlightsReducer = (state = [], action) => {
    switch (action.type) {
      case '******':
        return action.payload;
      default:
        return state;
    }
  };

  
  export default editFlightsReducer; 
