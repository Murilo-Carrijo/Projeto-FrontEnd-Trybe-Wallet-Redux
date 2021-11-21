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
      </form>
    );
  }
}

export default FormExpenses;
