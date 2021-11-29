import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor() {
    super();

    this.toConvertValue = this.toConvertValue.bind(this);
  }

  toConvertValue() {
    const { getExpenses } = this.props;
    const currencyInfos = getExpenses.map((expense) => {
      const { value, currency, exchangeRates } = expense;
      return value * exchangeRates[currency].ask;
    });

    return currencyInfos;
  }

  render() {
    const { getEmail, getExpenses } = this.props;
    const converted = this.toConvertValue();
    return (
      <header>
        <span data-testid="email-field">
          { `Olá, seja bem vindo ${getEmail}` }
        </span>

        <span data-testid="total-field">
          { !getExpenses
            ? '0'
            : converted.reduce((acc, curr) => acc + curr, 0).toFixed(2) }
        </span>

        <span data-testid="header-currency-field">
          BRL
        </span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  getEmail: state.user.email,
  getExpenses: state.wallet.expenses,
});

Header.propTypes = {
  getEmail: PropTypes.string.isRequired,
  getExpenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(Header);
