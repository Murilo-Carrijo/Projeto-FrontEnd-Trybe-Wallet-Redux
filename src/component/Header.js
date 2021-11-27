import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { getEmail } = this.props;
    return (
      <header>
        <span data-testid="email-field">
          { `Olá, seja bem vindo ${getEmail}` }
        </span>

        <span data-testid="total-field">
          Despesa total: 0
        </span>

        <span data-testid="header-currency-field">
          BRL
        </span>
      </header>
    );
  }
}

Header.propTypes = {
  getEmail: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  getEmail: state.user.email,
});
export default connect(mapStateToProps)(Header);
