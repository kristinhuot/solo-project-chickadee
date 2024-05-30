
const careMethodReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_CARE_METHOD':
        return action.payload;
      default:
        return state;
    }
  };
  

  export default careMethodReducer;

