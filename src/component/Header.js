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
    if (getExpenses.length >= 1) {
      const totalValue = getExpenses.reduce((acc, curr) => {
        const changeCurrency = curr.value * curr.exchangeRates[curr.currency].ask;
        return Number(acc) + Number(changeCurrency).toFixed(2);
      }, 0);
      console.log(totalValue);
      return totalValue;
    }
    return 0;
  }

  render() {
    const { getEmail } = this.props;
    return (
      <header>
        <span data-testid="email-field">
          { `Olá, seja bem vindo ${getEmail}` }
        </span>

        <span data-testid="total-field">
          { this.toConvertValue() }
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
