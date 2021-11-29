import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ExpensesTab extends React.Component {
  render() {
    const { expenses } = this.props;
    console.log(expenses);
    return (
      <section>
        <table>
          <tr>
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
                         .exchangeRates[expense.currency].ask * expense.value).toFixed(2)}
                   </td>
                   <td>Real</td>
                 </tr>
               )) }
        </table>
      </section>
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
