import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import '../style/ExpensesTab.css';

class ExpensesTab extends React.Component {
  render() {
    const { expenses } = this.props;
    console.log(expenses);
    return (
      <table className="table-contaienr">
        <thead>
          <tr className="table-header">
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody className="table-header">
          { expenses.length > 0
                && expenses.map((expense) => (
                  <tr key={ expense.id }>
                    <td>{expense.description}</td>
                    <td>{expense.tag}</td>
                    <td>{expense.method}</td>
                    <td>{expense.value}</td>
                    <td>{expense.exchangeRates[expense.currency].name}</td>
                    <td>
                      {
                        Number(expense.exchangeRates[expense.currency].ask).toFixed(2)
                      }

                    </td>
                    <td>
                      { (
                        expense
                          .exchangeRates[expense.currency].ask * expense.value)
                        .toFixed(2)}
                    </td>
                    <td>Real</td>
                  </tr>
                )) }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

ExpensesTab.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(ExpensesTab);
