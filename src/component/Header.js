import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { loginEmail } = this.props;
    return (
      <header>
        <span data-testid="email-field">
          { `Olá, seja bem vindo ${loginEmail}` }
        </span>

        <span data-testid="total-field">
          Despesa total: 0
        </span>
      </header>
    );
  }
}

Header.propTypes = {
  loginEmail: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  loginEmail: state.user.email,
});
export default connect(mapStateToProps)(Header);
