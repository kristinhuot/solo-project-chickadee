import { combineReducers } from "redux";


const initialState = {
  name: '',
  pronouns: '',
  birthday: null,
  location: '',
  photo: '',
};

const myNestReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NEST_INPUTS':
      return {
        ...state,
        name: action.payload.name,
        pronouns: action.payload.pronouns,
        birthday: action.payload.birthday,
        location: action.payload.location,
        photo: action.payload.photo,
      };
    default:
      return state;
  }
};



const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.payload;
    case 'UNSET_USER':
      return {};
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default combineReducers({
  userReducer,
  myNestReducer,
})


;
