import React from 'react';

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
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: '',
    };
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
    return (
      <label htmlFor="currency-input">
        Moeda
        <select
          id="currency-input"
          data-testid="currency-input"
          onChange={ this.hendleChange }
        >
          <option value="currency">Selecione a tag</option>
        </select>
      </label>
    );
  }

  setSelectMethod() {
    return (
      <label htmlFor="tag-input">
        <select
          id="tag-input"
          data-testid="method-input"
          onChange={ this.hendleChange }
        >
          <option value="tag">Selecione a tag</option>
          <option value="money">Dinheiro</option>
          <option value="credit">Cartão de crédito</option>
          <option value="debt">Cartão de débito</option>
        </select>
      </label>
    );
  }

  setSelectTag() {
    return (
      <label htmlFor="tag-input">
        <select
          id="tag-input"
          data-testid="tag-input"
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
    const { name, value } = target;
    this.setState({
      [name]: value,
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

export default FormExpenses;
