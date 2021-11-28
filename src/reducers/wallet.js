// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_CURRENCIES, SAVE_EXPENSES } from '../actions';

const INITIAL_STATE_WALLET = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE_WALLET, action) => {
  switch (action.type) {
  case GET_CURRENCIES:
    return {
      ...state,
      currencies: Object.keys(action.payload),
    };
  case SAVE_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  default:
    return state;
  }
};

export default wallet;
