
const flightmateReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_MY_FLOCK':
          return action.payload;
        default:
          return state;
      }       
  };

  
  export default flightmateReducer; 
