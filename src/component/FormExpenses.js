import React from 'react';

class FormExpenses extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="value-input">
          Valor
          <input
            type="number"
            data-testid="value-input"
            name="value-input"
            id="value-input"
          />
        </label>

        <label htmlFor="description-input">
          Descrição
          <input
            type="text"
            data-testid="description-input"
            name="description-input"
            id="description-input"
          />
        </label>
      </form>
    );
  }
}

export default FormExpenses;
