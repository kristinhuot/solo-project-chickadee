
const careMethodReducer = (state = [], action) => {
    switch (action.type) {
      case 'ADD_CARE_METHOD':
        return action.payload;
      case 'REMOVE_CARE_METHOD':
        return action.payload; 
      default:
        return state;
    }
  };
  

  export default careMethodReducer;

