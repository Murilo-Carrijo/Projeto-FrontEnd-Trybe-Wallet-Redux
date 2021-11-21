import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import saveEmail from '../actions';

import './Login.css';

class Login extends React.Component {
  constructor() {
    super();

    this.checkValidadeInputs = this.checkValidadeInputs.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRoute = this.handleRoute.bind(this);

    this.state = {
      isButtonDisabled: true,
      email: '',
      password: '',
      changeRoute: false,
    };
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    },
    () => { this.checkValidadeInputs(); });
  }

  // para utilizar regex na logica de validação me orientei pelo link: https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
  checkValidadeInputs() {
    let inputEmail = false;
    let inputPassword = false;
    const { email, password } = this.state;
    const emailRe = /\S+@\S+\.\S+/;
    const minPassLength = 6;

    if (emailRe.test(email)) inputEmail = true;
    if (password.length >= minPassLength) inputPassword = true;

    if (inputEmail && inputPassword) {
      this.setState({ isButtonDisabled: false });
    } else {
      this.setState({ isButtonDisabled: true });
    }
  }

  handleRoute() {
    this.setState({
      changeRoute: true,
    });
  }

  render() {
    const { isButtonDisabled, email, password, changeRoute } = this.state;
    const { emailDispatch } = this.props;
    return (
      <main>
        TrybeWallet

        <label htmlFor="email">
          Email
          <input
            type="email"
            data-testid="email-input"
            name="email"
            id="email"
            value={ email }
            required
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="password">
          Senha
          <input
            type="password"
            data-testid="password-input"
            name="password"
            id="password"
            value={ password }
            required
            onChange={ this.handleChange }
          />
        </label>

        <button
          type="submit"
          disabled={ isButtonDisabled }
          onClick={ () => {
            emailDispatch(email);
            this.handleRoute();
          } }
        >
          Entrar
        </button>
        { changeRoute && <Redirect to="/carteira" />}
      </main>
    );
  }
}

const mapDispachToProps = (dispatch) => ({
  emailDispatch: (email) => dispatch(saveEmail(email)) });

Login.propTypes = {
  emailDispatch: PropTypes.func.isRequired,
};

export default connect(null, mapDispachToProps)(Login);
