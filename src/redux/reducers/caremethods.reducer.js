import logger from "redux-logger";

const careMethodReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_CARE_METHOD':
        console.log('action.payload is',action.payload);
        return action.payload;
      default:
        return state;
    }
  };
  

  export default careMethodReducer;

