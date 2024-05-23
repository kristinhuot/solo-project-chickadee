
const careMethodReducer = (state = [], action) => {
    switch (action.type) {
      case 'POST_CARE_METHOD':
        return action.payload;
      case 'DELETE_CARE_METHOD':
        return action.payload; 
      default:
        return state;
    }
  };
  

  export default careMethodReducer;

