import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchGetCurrencies, saveExpense } from '../actions';

class FormExpenses extends React.Component {
  constructor() {
    super();

    this.setInputValue = this.setInputValue.bind(this);
    this.setInputDescription = this.setInputDescription.bind(this);
    this.setSelectCurrency = this.setSelectCurrency.bind(this);
    this.setSelectMethod = this.setSelectMethod.bind(this);
    this.setSelectTag = this.setSelectTag.bind(this);
    this.hendleChange = this.hendleChange.bind(this);
    this.submitExpense = this.submitExpense.bind(this);

    this.state = {
      value: '',
      currency: '',
      description: '',
      method: '',
      tag: '',
    };
  }

  async componentDidMount() {
    const { getCurrencies } = this.props;
    await getCurrencies();
  }

  setInputValue() {
    const { value } = this.state;
    return (
      <label htmlFor="value">
        Valor
        <input
          type="number"
          data-testid="value-input"
          name="value-input"
          id="value"
          value={ value }
          onChange={ this.hendleChange }
        />
      </label>
    );
  }

  setInputDescription() {
    const { description } = this.state;
    return (
      <label htmlFor="description">
        Descrição
        <input
          type="text"
          data-testid="description-input"
          name="description-input"
          id="description"
          value={ description }
          onChange={ this.hendleChange }
        />
      </label>
    );
  }

  setSelectCurrency() {
    const { currencies } = this.props;
    const { currency } = this.state;
    return (
      <label htmlFor="currency">
        Moeda
        <select
          id="currency"
          data-testid="currency-input"
          value={ currency }
          onChange={ this.hendleChange }
        >
          { currencies.map((currenc) => (
            currenc === 'USDT'
              ? null : (
                <option
                  value={ currenc }
                  key={ currenc }
                  data-testid={ currenc }
                >
                  { currenc }
                </option>
              )
          ))}
        </select>
      </label>
    );
  }

  setSelectMethod() {
    const { method } = this.state;
    return (
      <label htmlFor="method">
        <select
          id="method"
          data-testid="method-input"
          value={ method }
          onChange={ this.hendleChange }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
    );
  }

  setSelectTag() {
    const { tag } = this.state;
    return (
      <label htmlFor="tag">
        <select
          id="tag"
          data-testid="tag-input"
          value={ tag }
          onChange={ this.hendleChange }
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }

  hendleChange({ target }) {
    const { id, value } = target;
    this.setState({
      [id]: value,
    });
  }

  async submitExpense(e) {
    e.preventDefault();
    const { getExpenses, expenses, getCurrencies } = this.props;
    const { value, currency, method, tag, description } = this.state;

    const response = await getCurrencies();
    const data = await response.payload;
    const exchangeRates = data;

    const expenseInfors = {
      id: expenses.length,
      value,
      currency,
      method,
      description,
      tag,
      exchangeRates,
    };
    getExpenses(expenseInfors);

    this.setState({
      value: '0',
      description: '',
      tag: '',
    });
  }

  render() {
    return (
      <form onSubmit={ this.submitExpense }>
        { this.setInputValue() }
        { this.setInputDescription() }
        { this.setSelectCurrency() }
        { this.setSelectMethod() }
        { this.setSelectTag() }
        <button type="submit">Adicionar despesa</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchGetCurrencies()),
  getExpenses: (expenseInfors) => dispatch(saveExpense(expenseInfors)),
});

FormExpenses.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  getExpenses: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormExpenses);
