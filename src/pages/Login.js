import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveEmail } from '../actions';

import '../style/Login.css';

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

  handleRoute(e) {
    e.preventDefault();
    const { history, getEmail } = this.props;
    const { email } = this.state;
    getEmail(email);
    history.push('./carteira');
  }

  render() {
    const { isButtonDisabled, email, password } = this.state;
    return (
      <div className="container">
        <form className="form-login" onSubmit={ this.handleRoute }>
          TrybeWallet

          <label className="label-login" htmlFor="email">
            Email:
            <input
              type="email"
              data-testid="email-input"
              name="email"
              id="email"
              value={ email }
              required
              onChange={ this.handleChange }
              className="input-login"
            />
          </label>

          <label className="label-login" htmlFor="password">
            Senha:
            <input
              type="password"
              data-testid="password-input"
              name="password"
              id="password"
              value={ password }
              required
              onChange={ this.handleChange }
              className="input-login"
            />
          </label>

          <button
            className="button-login"
            type="submit"
            disabled={ isButtonDisabled }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

const mapDispachToProps = (dispatch) => ({
  getEmail: (email) => dispatch(saveEmail(email)) });

Login.propTypes = {
  getEmail: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect(null, mapDispachToProps)(Login);
