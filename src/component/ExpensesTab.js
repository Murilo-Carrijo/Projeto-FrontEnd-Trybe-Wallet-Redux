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
          <tbody>
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
                  <tb>{ expense.description }</tb>
                  <tb>{ expense.tag }</tb>
                  <tb>{ expense.method }</tb>
                  <tb>{ expense.value }</tb>
                  <tb>{ expense.exchangeRates[expense.currency].name }</tb>
                  <tb>
                    {
                      Number(expense.exchangeRates[expense.currency].ask).toFixed(2)
                    }
                  </tb>
                  <tb>
                    {(
                      expense
                        .exchangeRates[expense.currency].ask * expense.value).toFixed(2)}
                  </tb>
                  <tb>Real</tb>
                </tr>
              )) }
          </tbody>
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
