// Coloque aqui suas actions
export const NEW_USER = 'NEW_USER';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const SAVE_EXPENSES = 'SAVE_EXPENSES';
export const CONVERTED_EXPENSE = 'CONVERTED_EXPENSE';

export const saveEmail = (payload) => ({ type: NEW_USER, payload });

export const getCurrencies = (payload) => ({ type: GET_CURRENCIES, payload });

export const saveExpense = (payload) => ({ type: SAVE_EXPENSES, payload });

export const fetchGetCurrencies = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const exchangeRates = await response.json();
  return dispatch(getCurrencies((exchangeRates)));
};
