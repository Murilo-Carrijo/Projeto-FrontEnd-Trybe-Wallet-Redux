// Esse reducer será responsável por tratar as informações da pessoa usuária
import { NEW_USER } from '../actions';

const INITIAL_STATE_LOGIN = {
  email: '',
};

function user(state = INITIAL_STATE_LOGIN, action) {
  switch (action.type) {
  case NEW_USER:
    return {
      ...state,
      email: action.payload,
    };
  default:
    return state;
  }
}

export default user;
