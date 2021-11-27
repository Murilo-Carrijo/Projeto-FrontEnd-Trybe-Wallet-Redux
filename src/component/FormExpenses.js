import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchGetCurrencies } from '../actions';

class FormExpenses extends React.Component {
  constructor() {
    super();

    this.setInputValue = this.setInputValue.bind(this);
    this.setInputDescription = this.setInputDescription.bind(this);
    this.setSelectCurrency = this.setSelectCurrency.bind(this);
    this.setSelectMethod = this.setSelectMethod.bind(this);
    this.setSelectTag = this.setSelectTag.bind(this);
    this.hendleChange = this.hendleChange.bind(this);

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
    const response = await getCurrencies();
    console.log(response);
  }

  setInputValue() {
    const { value } = this.state;
    return (
      <label htmlFor="value-input">
        Valor
        <input
          type="number"
          data-testid="value-input"
          name="value-input"
          id="value-input"
          value={ value }
          onChange={ this.hendleChange }
        />
      </label>
    );
  }

  setInputDescription() {
    const { description } = this.state;
    return (
      <label htmlFor="description-input">
        Descrição
        <input
          type="text"
          data-testid="description-input"
          name="description-input"
          id="description-input"
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
      <label htmlFor="currency-input">
        Moeda
        <select
          id="currency-input"
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
      <label htmlFor="tag-input">
        <select
          id="tag-input"
          data-testid="method-input"
          value={ method }
          onChange={ this.hendleChange }
        >
          <option value="money">Dinheiro</option>
          <option value="credit">Cartão de crédito</option>
          <option value="debt">Cartão de débito</option>
        </select>
      </label>
    );
  }

  setSelectTag() {
    const { tag } = this.state;
    return (
      <label htmlFor="tag-input">
        <select
          id="tag-input"
          data-testid="tag-input"
          value={ tag }
          onChange={ this.hendleChange }
        >
          <option value="food">Alimentação</option>
          <option value="leisure">Lazer</option>
          <option value="work">Trabalho</option>
          <option value="transport">Transporte</option>
          <option value="health">Saúde</option>
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

  render() {
    return (
      <form>
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
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchGetCurrencies()),
});

FormExpenses.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormExpenses);
