// Coloque aqui suas actions
export const NEW_USER = 'NEW_USER';
export const GET_CURRENCIES = 'GET_CURRENCIES';

export const saveEmail = (payload) => ({ type: NEW_USER, payload });

export const getCurrencies = (payload) => ({ type: GET_CURRENCIES, payload });

export const fetchGetCurrencies = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const exchangeRates = await response.json();
  return dispatch(getCurrencies((exchangeRates)));
};
